import React, { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import Restrocatogory from "./Restrocatogory";

const RestaurantMenu = () => {
  const[showIndex,setShowIndex]=useState('');
  const {resId}=useParams();
  const resInfo=useRestaurantsMenu(resId);
  console.log(resId);
  

  
  if (resInfo === null) return <Shimmer/>;

  const restaurantInfo = resInfo?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants[0]?.info;
  console.log(restaurantInfo);
  //const itemCards = resInfo?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants.info;
  const catogory=resInfo?.success?.cards[1].gridWidget?.gridElements?.infoWithStyle?.restaurants;
 
  //console.log(itemCards);
  console.log(catogory);



  if (!restaurantInfo) return <div>No restaurant info available</div>;
  if (!catogory) return <div>No item cards available</div>;

  const { name, cuisines,costForTwo} = restaurantInfo;

  return (
    <div className="text-center p-5 m-5">
       <h2 className="font-bold text-xl">{name}</h2>
       <p className="font-bold text-lg">
       <h3>{cuisines.join(", ")} - {costForTwo}</h3>
       </p> 
       {catogory.map((catogory ,index)=>( <Restrocatogory key={catogory.info.id}data={catogory}showItems={index===showIndex?true:false}
        setShowIndex={()=>setShowIndex(index)}>
       
       </Restrocatogory>))}

  
  {/*
    <ul>
        {itemCards.map((item) => (
          <li key={item?.info?.id}>{item?.info?.name}-  {item?.info?.availability?.nextCloseTime}</li>
         
        ))}
      </ul>
*/}
     
    </div>
  );
};

export default RestaurantMenu;