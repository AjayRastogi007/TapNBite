import {CDN_URL} from "../utils/constant";

const styleCard = {
    backgroundColor: "#f0f0f0",
}

const RestrauntCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.card.card.info;

    return (
        <div className='res-card' style={styleCard}>
            <img
                className='res-logo'
                alt='res-logo'
                src={CDN_URL + cloudinaryImageId}
            ></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestrauntCard;