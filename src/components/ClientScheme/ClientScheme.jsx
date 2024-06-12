import {useContext, useEffect, useRef, useState} from 'react';
import * as fabric from 'fabric';
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router";
import {AuthContext} from "../../Context/AuthProvider";
import Button from "../Button/Button";


export const ClientScheme = ({ tablesReserved, date, time }) => {
    const canvasRef = useRef(null);
    const navigate = useNavigate()
    let {token} = useContext(AuthContext)

    const tables = tablesReserved
    const params = useParams()
    const id = params.id

    const [canvas, setCanvas] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (canvas) {
                    const response = await fetch(`http://45.141.102.127:8080/api/v1/restaurants/${id}/tables`, {
                        headers: {
                            'accept': '*/*'
                        }
                    });
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    const data = await response.json();
                    const jsonParse = JSON.parse(data.file);
                    const objects = await fabric.util.enlivenObjects(jsonParse.objects);

                    canvas.clear()

                    objects.forEach(function (o) {

                        console.log("Tables = " + tables.includes(3))

                        if (tables.includes(parseInt(o._objects[1].text))) {
                            o.selectable = false;
                            o._objects[0].fill = 'red';
                        } else {
                            o.selectable = true;
                            o._objects[0].fill = 'green';
                        }

                        o.fill = 'rgba(245, 40, 145, 0.8)';
                        o.lockMovementX = true;
                        o.lockMovementY = true;
                        o.lockRotation = true;
                        o.lockScalingX = true;
                        o.lockScalingY = true;
                        o.lockScalingFlip = true;

                        canvas.add(o);
                    });

                    canvas.renderAll();

                    canvas.on('selection:created', function (e) {
                        const tableId = e.selected[0]._objects[1].text;
                        if (tableId !== undefined) {
                            navigate(`/restaurant/${id}/tables/${tableId}`);
                        }
                    });
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }

            }

        fetchData();
    }, [canvas, date, time]);

    useEffect(() => {
        if (!canvas) {
            const newCanvas = new fabric.Canvas(canvasRef.current, {width: 800, height: 600});
            setCanvas(newCanvas);
        }
    }, []);



    const handleClickSignIn = () =>{
        navigate("/login")
    }

    return (
        <div>
            {token ?
                <canvas ref={canvasRef}></canvas> :
                <div>
                    <p>Сначала авторизируйтесь</p>
                    <Button className="button accept" onClick={handleClickSignIn}>Войти</Button>
                </div>}
        </div>)

}
