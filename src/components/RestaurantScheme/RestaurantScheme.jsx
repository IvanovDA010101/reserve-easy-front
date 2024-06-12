
import * as fabric from 'fabric';
import { Canvas } from 'fabric';

import {useEffect, useRef} from "react";
import {useParams} from "react-router";

//тестовая отрисовка схемы зала админа
export const MyFabricComponent = () => {
  let canvas = useRef(null);
  let canvasEl = useRef(null);
  let objId = useRef(1);
  const params = useParams()
  const id = params.id
  const grid = 30;
  const width = grid * 30;
  const height = grid * 30;
  const backgroundColor = '#f8f8f8';
  const lineStroke = '#ebebeb';
  const tableFill = 'rgba(196, 185, 185, 1)';
  const tableStroke = '#694d23';
  const tableShadow = 'rgba(0, 0, 0, 0.4) 3px 3px 7px';
  const chairFill = 'rgba(67, 42, 4, 0.7)';
  const chairStroke = '#32230b';
  const chairShadow = 'rgba(0, 0, 0, 0.4) 3px 3px 7px';
  const textOptions = {
    fontFamily: 'Calibri',
    fontSize: 14,
    fill: '#fff',
    textAlign: 'center',
    originX: 'center',
    originY: 'center'
  };
  const gOptions = {
    left: 0,
    top: 0,
    centeredRotation: true,
    snapAngle: 45,
    selectable: true,
    type: 'table',
    id: objId.current,
    number: objId.current,
    idRect: objId
  };

  useEffect(() => {
    if (canvas.current) {
      canvas.current.dispose();
    }

    if (canvasEl.current) {
      canvas.current = new fabric.Canvas(canvasEl.current, {
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        preserveObjectStacking: true,
        selection: true,
      });

      canvas.current.on('object:moving', function (e) {
        snapToGrid(e.target);
      });

      canvas.current.on('object:scaling', function (e) {
        if (e.target.scaleX > 5) {
          e.target.scaleX = 5;
        }
        if (e.target.scaleY > 5) {
          e.target.scaleY = 5;
        }
        if (!e.target.strokeWidthUnscaled && e.target.strokeWidth) {
          e.target.strokeWidthUnscaled = e.target.strokeWidth;
        }
        if (e.target.strokeWidthUnscaled) {
          e.target.strokeWidth = e.target.strokeWidthUnscaled / e.target.scaleX;
          if (e.target.strokeWidth === e.target.strokeWidthUnscaled) {
            e.target.strokeWidth = e.target.strokeWidthUnscaled / e.target.scaleY;
          }
        }
      });

      canvas.current.on('object:modified', function (e) {
        e.target.scaleX = e.target.scaleX >= 0.25 ? (Math.round(e.target.scaleX * 2) / 2) : 0.5;
        e.target.scaleY = e.target.scaleY >= 0.25 ? (Math.round(e.target.scaleY * 2) / 2) : 0.5;
        snapToGrid(e.target);
        if (e.target.type === 'table') {
          canvas.current.bringObjectToFront(e.target);
        } else {
          canvas.current.sendObjectToBack(e.target);
        }
        sendLinesToBack();
      });

      canvas.current.on('object:moving', function (e) {
        checkBoundingBox(e);
      });
      canvas.current.on('object:rotating', function (e) {
        checkBoundingBox(e);
      });
      canvas.current.on('object:scaling', function (e) {
        checkBoundingBox(e);
      });

      // canvas.current.add(new fabric.Rect({width: 60, height: 60, fill: 'red', selectable: true}));

      addRect();
    }
  }, [canvas, width, height]);

  function addRect() {

    // fabric.Image.fromURL(
    //     'https://cdn2.iconfinder.com/data/icons/furniture-1-1-1/1024/round_table3-100.png',
    //     function (img) {
    //       img.set({
    //         width: 0,
    //         height: 0,
    //         scaleX: 0,
    //         scaleY: 0,
    //         originX: 'center',
    //         originY: 'center',
    //         centeredRotation: true,
    //         idInDB: objId.current.toString(),
    //       });
    //
    //
    //     }
    // ).then(r => {
    //   const t = new fabric.IText(objId.current.toString(), textOptions);
    // const g = new fabric.Group([r, t], gOptions);
    //
    // canvas.current.add(g);
    // canvas.current.setActiveObject(g);
    // objId.current++;
    // return g});
      const o = new fabric.Rect({
        width: 60,
        height: 60,
        fill: tableFill,
        stroke: tableStroke,
        strokeWidth: 2,
        shadow: tableShadow,
        originX: 'center',
        originY: 'center',
        centeredRotation: true,
        snapAngle: 45,
        idInDB: objId.current.toString(),

      });

      const t = new fabric.IText(objId.current.toString(), textOptions);
      const g = new fabric.Group([o,  t], gOptions);
      canvas.current.renderAll()
      canvas.current.add(g);
      canvas.current.setActiveObject(g);
      objId.current++;



    // const t = new fabric.IText(objId.current.toString(), textOptions);
    // const g = new fabric.Group([o, t], gOptions);
    // canvas.current.add(g);
    //
    // canvas.current.requestRenderAll();
    // canvas.current.setActiveObject(g);
    // objId.current++;
    // return g;
  }

  function addCircle() {
    const o = new fabric.Circle({
      radius: 60,
      fill: tableFill,
      stroke: tableStroke,
      strokeWidth: 2,
      shadow: tableShadow,
      originX: 'center',
      originY: 'center',
      centeredRotation: true
    });
    const t = new fabric.IText(objId.current.toString(), textOptions);
    const g = new fabric.Group([o, t], gOptions);
    canvas.current.add(g);
    canvas.current.requestRenderAll();
    canvas.current.setActiveObject(g);
    objId.current++;
    return g;
  }
  function addChair() {
    const o = new fabric.Rect({
      width: 30,
      height: 30,
      fill: chairFill,
      stroke: chairStroke,
      strokeWidth: 2,
      shadow: chairShadow,
      originX: 'center',
      originY: 'center',
      centeredRotation: true,
      snapAngle: 45,
      type: 'chair'
    });
    const g = new fabric.Group([o], gOptions);
    canvas.current.add(g);
    canvas.current.requestRenderAll();
    canvas.current.setActiveObject(g);
    objId.current++;
    return g;
  }

  function snapToGrid(target) {
    target.set({
      left: Math.round(target.left / (grid / 2)) * grid / 2,
      top: Math.round(target.top / (grid / 2)) * grid / 2
    });
  }

  function checkBoundingBox(e) {
    const obj = e.target;

    if (!obj) {
      return;
    }
    obj.setCoords();

    const objBoundingBox = obj.getBoundingRect();
    if (objBoundingBox.top < 0) {
      obj.set('top', 0);
      obj.setCoords();
    }
    if (objBoundingBox.left > canvas.current.width - objBoundingBox.width) {
      obj.set('left', canvas.current.width - objBoundingBox.width);
      obj.setCoords();
    }
    if (objBoundingBox.top > canvas.current.height - objBoundingBox.height) {
      obj.set('top', canvas.current.height - objBoundingBox.height);
      obj.setCoords();
    }
    if (objBoundingBox.left < 0) {
      obj.set('left', 0);
      obj.setCoords();
    }
  }

  function sendLinesToBack() {
    canvas.current.getObjects().forEach(o => {
      if (o.type === 'line') {
        canvas.current.sendObjectToBack(o);
      }
    });
  }

  function clickOnRemove() {
    const o = canvas.current.getActiveObject();
    if (o) {
      o?.remove();
      canvas.current.remove(o);
      canvas.current.discardActiveObject();
      canvas.current.renderAll();
    }
  }

  function clickOnCustomer() {
    canvas.current.getObjects().forEach(o => {
      o.hasControls = false;
      o.lockMovementX = true;
      o.lockMovementY = true;
      if (o.type === 'chair' || o.type === 'bar' || o.type === 'wall') {
        o.selectable = false;
      }
      o.borderColor = '#38A62E';
      o.borderScaleFactor = 2.5;
    });
    // setCanvas(initCanvas(false))
    canvas.current.selection = false;
    canvas.current.hoverCursor = 'pointer';
    canvas.current.discardActiveObject();
    canvas.current.renderAll();
    document.querySelectorAll('.admin-menu')[0].style.display = 'none';
    document.querySelectorAll('.customer-menu')[0].style.display = 'block';
  }

  function clickOnAdmin() {
    canvas.current.getObjects().forEach(o => {
      o.hasControls = true;
      o.lockMovementX = false;
      o.lockMovementY = false;
      if (o.type === 'chair' || o.type === 'bar' || o.type === 'wall') {
        o.selectable = true;
      }
      o.borderColor = 'rgba(102, 153, 255, 0.75)';
      o.borderScaleFactor = 1;
    });
    canvas.current.selection = true;
    canvas.current.hoverCursor = 'move';
    canvas.current.discardActiveObject();
    canvas.current.renderAll();
    document.querySelectorAll('.admin-menu')[0].style.display = 'block';
    document.querySelectorAll('.customer-menu')[0].style.display = 'none';
  }

  function getObjects() {
    canvas.current.getObjects().forEach(o => {
      if (o.type !== 'line') {
        canvas.current.bringObjectToFront(o);
        console.log(o);
      }
    });
  }


  console.log(id)
  //TODO: самая тупая заглушка
  const sendDataToBackend = async (json) => {
    try {
      const response = await fetch(`http://45.141.102.127:8080/api/v1/owner/restaurants/1/tables`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Указываем тип контента как JSON
          'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0aW1rYWE1QHlhbmRleC5ydSJ9.lhE6De0vdiauNQI6WyX0h8Aw9VZcgqSYZTMshfbB3ME',
          'accept': '*/*'
        },
        body: json
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      // Возможно, здесь вам захочется что-то делать с возвращенными данными
    } catch (error) {
      console.error('Error sending data to the backend:', error);
    }
  };
  const handleSaveButton = () => {
    // Преобразуем canvas.current в JSON
    const jsonData = JSON.stringify(canvas.current);
    const fileJson = {
      file : jsonData
    }
    // Отправляем данные на бэкенд
    sendDataToBackend(JSON.stringify(fileJson));
  };


  return (
    <div className="container-fluid text-center">
      <div className="form-group admin-menu">
        <div className="btn-group">
          <button onClick={addRect}>+ Rect table</button>
          <button onClick={addCircle}>+ Circle table</button>
          <button onClick={addChair}>+ Chair</button>
          <button onClick={clickOnRemove}>Remove</button>
          <button onClick={clickOnCustomer}>Customer mode</button>
          <button onClick={getObjects}>check</button>
        </div>
      </div>

      <div className="form-group customer-menu" style={{display: "none"}}>
        <div className="btn-group">
          <button className="btn btn-success submit" onClick={handleSaveButton}>Submit reservation</button>
          <button className="btn btn-warning admin-mode" onClick={clickOnAdmin}>Admin mode</button>
        </div>
        <br/>
        <br/>
        <div id="slider"></div>
        <div id="slider-value"></div>
      </div>

      <canvas ref={canvasEl}></canvas>
    </div>
  );
};


