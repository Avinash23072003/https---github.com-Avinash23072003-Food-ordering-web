import {useState,useEffect} from "react"
const useRestaurantsMenu=(resId)=>{
    const[resInfo,setresInfo]=useState(null);

   
    useEffect(()=>{
    fetchMenu();
    },[])

    const fetchMenu=async()=>{
        const data=await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=18.61610&lng=73.72860&restaurant_id=57347" + resId);
        const json=await data.json();
        console.log(json);
        setresInfo(json.data);
     };
     return resInfo;
}
export default useRestaurantsMenu;