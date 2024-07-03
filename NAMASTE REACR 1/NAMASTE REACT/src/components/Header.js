import React from "react"
import { useState,useEffect,useContext } from "react"
import {LOGO_URL} from "../utils/constant"
import { Link } from "react-router-dom"
import useOnlinestatus from "../utils/useOnlinestatus"
import '../../src/index.css';
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"
import { BsBasket2 } from "react-icons/bs";
const Header=()=>{
    const[btnNameReact,setBtnNameReact]=useState("Login")
    const {loggedInUser}=useContext(UserContext)
    console.log(loggedInUser);
    useEffect(()=>{
        console.log("UseEffect called")
},[btnNameReact])
const onlinebtn=useOnlinestatus();
const cartItems=useSelector((store=>store.cart.items));
console.log(cartItems);
    return(
        <div className=" flex justify-between bg-pink-100 sm:bg-yellow-100 lg:bg-green-50 shadow-lg ">
            <div className="logo">
          <img src={LOGO_URL} className="w-24 p-2"/>
            </div>
            <div className="nav-elt ">
               <ul className="flex p-4 m-6 gap-8">
                <li>Online Status:{onlinebtn ? "🟢":"🔴" }</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li><Link to="/cart" className="font-bold text-lg flex" ><BsBasket2 className="text-xl m-auto" /> - {cartItems.length} Items</Link></li>
                <button className="loginBtn" onClick={()=>{
                    btnNameReact==="Login"
                  ? setBtnNameReact("Logout"):setBtnNameReact("Login");
                }}>{btnNameReact}</button>
                <li className="font-bold"><Link to="">{loggedInUser}</Link></li>
               </ul>
            </div>
        </div>
    )
}
export default Header;