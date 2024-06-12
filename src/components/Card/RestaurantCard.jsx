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
            const response = await fetch(`http://45.141.102.127:8080/api/v1/restaurants/${restaurant.id}/images/main?size=medium`);

            if (!response.ok) {
                throw new Error("Error fetching restaurants");
            }

            const imageBlob = await response.blob();
            setRestaurant((prevState) => ({...prevState, image: URL.createObjectURL(imageBlob)}));
        };

        fetchRestaurantsImages();
    }, []);


    const handleCardClick = () => {
        navigate(`/restaurant/${restaurant.id}`, {state: {restaurant}})
    }

    return (
        <div className="rest-container" onClick={handleCardClick}>
            <div className="rest-image" style={{background: `url(${restaurant.image})`}}>
                {/*<button {...props}  >*/}
                {/*    <div className="inner-item" >*/}
                {/*        /!*<img src={restaurant.image}  alt={props.name}/>*!/*/}
                {/*    </div>*/}

                {/*</button>*/}
            </div>
            <div className="rest-info">
                <div className="name">
                    {restaurant.name} </div>

                <div className="desc">
                    {restaurant.description}

                </div>
                <div className="address">
                    {restaurant.address}</div>
            </div>

        </div>

    );
}

export default RestaurantCard;