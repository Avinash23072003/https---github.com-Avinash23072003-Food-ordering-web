import {useState,useEffect} from "react"
const useOnlinestatus=()=>{
    const[onlineStatus,setOnlineStatus]=useState(true)
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
            console.log("ur offline");
        })
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
            console.log("ur online");
        })
    },[]);
    return onlineStatus;
   
};
export default useOnlinestatus;