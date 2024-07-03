import React, { useState, useEffect ,useContext} from "react";
import Restro, { WithPromotedCards } from "./Restro";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [fewResult, setfewResult] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null); // State to track the selected restaurant

  const PromotedLabel = WithPromotedCards(Restro);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=18.61610&lng=73.72860&restaurant_id=57347"
      );
      const json = await response.json();
      setfewResult(
        json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterRestaurants(
        json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const onlinestatus = useOnlinestatus();

  if (!onlinestatus) {
    return (
      <h1>
        It looks like you are offline! Check your connection.
      </h1>
    );
  }

  const handleCardClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };
  const{loggedInUser,setUserName}=useContext(UserContext)

  return fewResult.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter flex">
        <div className="focus">
          <input
            type="text"
            className="px-4 py-1 m-4 border border-black rounded-md shadow-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 rounded-md"
            onClick={() => {
              const newSearchResult = fewResult.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestaurants(newSearchResult);
            }}
          >
            Search
          </button>
          <button
            className="px-4 py-2 bg-gray-100 m-10 rounded-md"
            onClick={() => {
              const filteredResults = fewResult.filter(
                (res) => res.info.avgRating > 4
              );
              setFilterRestaurants(filteredResults);
            }}
          >
            Top Rated Results
          </button>
          <label>UserName:</label>
          <input    
            type="text" placeholder="Type Username" required value= {loggedInUser}
  
            className="px-4 py-1 m-4 border border-black rounded-md shadow-md"
            onChange={(e)=>{
              setUserName(e.target.value)
              console.log(e.target.value);
            }}
    
           
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {filterRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            <div onClick={() => handleCardClick(restaurant.info)}>
              {restaurant.info.promoted ? (
                <PromotedLabel data={restaurant}></PromotedLabel>
              ) : (
                <Restro data={restaurant}></Restro>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Display selected restaurant heading */}
      {selectedRestaurant && (
        <h2 className="font-bold text-xl mt-5">
          {selectedRestaurant.name}
        </h2>
      )}
    </div>
  );
};

export default Body;
