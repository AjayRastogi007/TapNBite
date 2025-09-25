import {CDN_URL} from "../utils/constant";

// const styleCard = {
//     backgroundColor: "#f0f0f0",
// }

const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.card.card.info;

    return (
        <div className='m-4 p-4 w-[250px] rounded-lg 
        bg-gray-100 hover:bg-gray-200'>
            <img
                className='rounded-lg'
                alt='res-logo'
                src={CDN_URL + cloudinaryImageId}
            ></img>
            <h3 className='font-bold py-4 text-lg'>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;