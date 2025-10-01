import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {

    const [listOfRestraunts, setListOfRestraunts] = useState([]);
    const [filteredRestraunt, setFilteredRestraunt] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.91360&lng=75.78580&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        );

        const json = await data.json();

        setListOfRestraunts(json?.data?.cards.slice(3));
        setFilteredRestraunt(json?.data?.cards.slice(3));
    }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <h1>Looks like you are offline. Please check your internet connectivity.</h1>
        );
    }

    return listOfRestraunts.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className='filter flex'>
                <div className='search m-4 p-4'>
                    <input
                        type='text'
                        className='border border-solid border-black'
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }
                        }></input>
                    <button className='px-4 py-2 bg-green-100 m-4 rounded-lg'
                        onClick={() => {
                            const filteredRestraunt = listOfRestraunts.filter((res) =>
                                res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            setFilteredRestraunt(filteredRestraunt);
                        }}>Search</button>
                </div>
                <div className='search m-4 p-4 flex items-center'>
                    <button
                        className='px-4 py-2 bg-gray-100 rounded-lg'
                        onClick={() => {
                            const filteredList = listOfRestraunts.filter(
                                (res) => res.card.card.info.avgRating > 4.5
                            );
                            setListOfRestraunts(filteredList);
                        }}
                    >Top Rated Restraunts</button>
                </div>
            </div>
            <div className='flex flex-wrap'>
                {
                    filteredRestraunt.map((restraunt) => (
                        <Link
                            key={restraunt.card.card.info.id}
                            to={'/restaurants/' + restraunt.card.card.info.id}>
                            {
                                restraunt.card.card.info.promoted ? <RestaurantCardPromoted resData={restraunt} /> : <RestaurantCard
                                    resData={restraunt}
                                />
                            }
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;