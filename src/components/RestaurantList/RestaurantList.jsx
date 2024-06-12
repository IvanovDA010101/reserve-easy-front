import RestaurantCard from "../Card/RestaurantCard";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../Context/AuthProvider";
import "./RestaurantList.css";

function RestaurantList() {
    const {userId} = useContext(AuthContext);
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        // Запрос для получения всех ресторанов из API
        const fetchRestaurants = async () => {
            const response = await fetch("http://45.141.102.127:8080/api/v1/restaurants", {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Error fetching restaurants");
            }

            const data = await response.json();
            setRestaurants(data);
        };

        fetchRestaurants();
    }, []);


    return (
        <div className="restaurant-list">
            {restaurants.map((restaurant) => (
                <RestaurantCard className="item" key={restaurant.id} {...restaurant} />
            ))}
        </div>
    );
}

export default RestaurantList;