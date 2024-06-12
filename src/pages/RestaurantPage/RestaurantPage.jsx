import {useLocation,} from "react-router-dom";
import {YMaps, Map, Placemark} from "@pbe/react-yandex-maps";
import {useEffect, useState} from "react";
import "./RestaurantPage.css";
import {MyFabricComponent} from "../../components/RestaurantScheme/RestaurantScheme";
import {ClientScheme} from "../../components/ClientScheme/ClientScheme";


function RestaurantPage() {
    const {state} = useLocation();
    const restaurant = state.restaurant; // Доступ к переданному объекту restaurant
    const [coordinates, setCoordinates] = useState([0, 0]); // Координаты по умолчанию

    const [tablesReserved, setTables] = useState([-1])

    const setTablesClick = (tableId) => {

        setTables((tablesReserved) => [...tablesReserved, tableId]);
    };

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


    const date = new Date('2024-06-08');
    const time = '12:30';

    return (
        <div className="restaurant-page">
            <div className="restaurant-info">
                <img className="restaurant-info img" src={restaurant.image} alt={restaurant.image}/>
                {/*<p>{restaurant.id}</p>*/}
                <p className="restaurant-info p">{restaurant.name}</p>
                <p className="restaurant-info p">{restaurant.description}</p>
                <p className="restaurant-info p">{restaurant.address}</p>
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
            <ClientScheme tablesReserved={tablesReserved} date={date} time={time}/>
        </div>
    )
}

export default RestaurantPage;