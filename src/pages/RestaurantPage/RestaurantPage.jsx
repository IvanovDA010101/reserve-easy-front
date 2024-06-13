import {useLocation,} from "react-router-dom";
import {YMaps, Map, Placemark} from "@pbe/react-yandex-maps";
import React, {useEffect, useState} from "react";
import "./RestaurantPage.css";
import {MyFabricComponent} from "../../components/RestaurantScheme/RestaurantScheme";
import {ClientScheme} from "../../components/ClientScheme/ClientScheme";
import Datepicker from "../../components/DatePicker/DatePicker";
import {useParams} from "react-router";


function RestaurantPage() {
    const {state} = useLocation();
    const restaurant = state.restaurant; // Доступ к переданному объекту restaurant
    const [coordinates, setCoordinates] = useState([0, 0]); // Координаты по умолчанию


    const apiKey = '70d39449-4190-4e2c-841f-56f96e4a1f55';
    const fetchData = async () => {
        try {
            const response = await fetch(`https://geocode-maps.yandex.ru/1.x?apikey=${apiKey}&format=json&geocode=${restaurant.city}  ${restaurant.address}`);
            console.log(response)
            const data = await response.json();
            const coords = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
            // const coords = response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
            setCoordinates([parseFloat(coords[1]), parseFloat(coords[0])]);
            console.log(coords)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData()
    }, [])


    // const date = new Date('2024-06-08');
    // const time = '12:30';

    const [selectedDate, setSelectedDate] = useState("2024-06-13T12:11");
    const [tablesReserved, setTables] = useState([-1])
    const [update, updateComponent] = useState(false)

    console.log(update)
    const setTablesClick = (tableId) => {

        setTables((tablesReserved) => [...tablesReserved, tableId]);
    };


    const params = useParams()
    const id = params.id
    const fetchReservedTables = async () => {
        if (selectedDate!=null)
            try {
                if (selectedDate) { // Проверяем, что дата и время установлены
                    const formattedDate = `${selectedDate}`;
                    // const formattedDate = `${date}T${time}:00.00`;
                    const url = `http://45.141.102.127:8080/api/v1/bookings/restaurants/${id}?datetime=${formattedDate}`;
                    const response = await fetch(url, {
                        headers: {
                            'accept': '*/*'
                        }
                    });
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();




                    setTables([])
                    data.forEach(obj => {

                        const tableId = obj.tableId;
                        setTablesClick(tableId);
                    });

                    console.log(tablesReserved);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
    }


    useEffect(() => {
        fetchReservedTables()
    }, [selectedDate])


    return (
        <div className="restaurant-page">
            <div className="restaurant-info">
                <img className="restaurant-info img" src={restaurant.image} alt={restaurant.image}/>
                {/*<p>{restaurant.id}</p>*/}
                <p className="restaurant-info p">{restaurant.name}</p>
                <p className="restaurant-info p">{restaurant.description}</p>
                <p className="restaurant-info p">{restaurant.address}</p>
                <input className="input-booking" type="datetime-local" placeholder="Дата" value={selectedDate}
                       onChange={(e) => setSelectedDate(e.target.value)}/>
                <ClientScheme tablesReserved={tablesReserved} date={selectedDate}/>
            </div>

            <YMaps>
                <Map className="map" defaultState={{
                    center: coordinates,
                    zoom: 16,
                    controls: ["zoomControl", "fullscreenControl"],
                    }}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                >
                    <Placemark defaultGeometry={coordinates} />
                </Map>
            </YMaps>;

        </div>
    )
}

export default RestaurantPage;