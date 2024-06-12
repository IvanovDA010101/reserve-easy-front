import './RestaurantCard.css';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function RestaurantCard({children, className, ...props}) {
    const cl = 'card-Button' + (className ? ' ' + className : '');
    const navigate = useNavigate();

    const [restaurant, setRestaurant] = useState({
        id: props.id,
        name: props.name,
        address: props.address,
        city: props.city,
        description: props.description,
        image: null
    });

    useEffect(() => {
        // Запрос для получения всех ресторанов из API
        const fetchRestaurantsImages = async () => {
            const response = await fetch(`http://45.141.102.127:8080/api/v1/restaurants/${restaurant.id}/images/main?size=big`);

            if (!response.ok) {
                throw new Error("Error fetching restaurants");
            }

            const imageBlob = await response.blob();
            setRestaurant((prevState) => ({...prevState, image: URL.createObjectURL(imageBlob)}));
        };

        fetchRestaurantsImages();
    }, []);


    const handleCardClick = () => {
        navigate(`/restaurant/${restaurant.id}`, { state: { restaurant } })
    }

    return (
        <button {...props} className={cl} onClick={handleCardClick}>
            <img className="inner-item" src={restaurant.image} alt={props.name}/>
            <p>{restaurant.name}</p>
            <p>{restaurant.address}</p>
        </button>
    );
}

export default RestaurantCard;