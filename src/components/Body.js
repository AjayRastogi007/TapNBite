import RestrauntCard from './RestrauntCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

const Body = () => {

    const [listOfRestraunts, setListOfRestraunts] = useState([]);
    const [filteredRestraunt, setFilteredRestraunt] = useState([]);
    const [searchText, setSearchText] = useState("");

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

    return listOfRestraunts.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                    <input
                        type='text'
                        className='search-box'
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }
                        }></input>
                    <button
                        onClick={() => {
                            const filteredRestraunt = listOfRestraunts.filter((res) =>
                                res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            setFilteredRestraunt(filteredRestraunt);
                        }}>Search</button>
                </div>
                <button
                    className='filter-btn'
                    onClick={() => {
                        const filteredList = listOfRestraunts.filter(
                            (res) => res.card.card.info.avgRating > 4.5
                        );
                        setListOfRestraunts(filteredList);
                    }}
                >Top Rated Restraunts</button>
            </div>
            <div className='res-container'>
                {
                    filteredRestraunt.map((restraunt) => (
                        <RestrauntCard
                            key={restraunt.card.card.info.id}
                            resData={restraunt}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;