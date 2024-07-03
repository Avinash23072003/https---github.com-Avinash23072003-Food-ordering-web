import React from "react"
import { useContext } from "react"
import {CDN_URL} from "../utils/constant"
import UserContext from "../utils/UserContext"

const Restro=(props)=>{
    const{loggedInUser}=useContext(UserContext)
   console.log(loggedInUser)
    
    
    const{data}=props
    return(
        <div className="p-2 m-4 w-[220px] rounded-lg shadow-md bg-white-100 hover:bg-gray-200">
        <img className="rounded-lg bg-cover bg-center h-44 w-full" alt="res-logo" src={CDN_URL+data.info.cloudinaryImageId}/>
        <h3 className="font-bold py-2 text-lg">{data.info.name}</h3 >
        <h4>{data.info.cuisines.join(" , ")} </h4>
        <h4>{data.info.areaName}</h4>
        <h4>{data.info.avgRating} stars</h4>
        <h4>{data.info.costForTwo}</h4>
        <h4>User:{loggedInUser}</h4>
  
        </div>
    )
}

//Higher order promoted cards
export const WithPromotedCards=(Restro)=>{
    return(props)=>{
        return(
            <div>
                <label className="p-2 m-2 absolute bg-black  text-white rounded-md">Promoted</label>
                <Restro {...props}></Restro>
            </div>

        )
    }
}

export default Restro;