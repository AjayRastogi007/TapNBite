import Shimmer from './Shimmer';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constant';

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);

        const json = await data.json();
        setResInfo(json.data);
    }

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const { carousel } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className='menu'>
            <h1>{name}</h1>
            <p>{cuisines.join(', ')} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {carousel.map((item,) => <li key={item.dish.info.id}>{item.dish.info.name} - Rs. {item.dish.info.price / 100}</li>)}
            </ul>
        </div>
    );
}

export default RestaurantMenu;