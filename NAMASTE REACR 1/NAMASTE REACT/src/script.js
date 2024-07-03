import React ,{lazy,Suspense} from "react"
import ReactDOM from "react-dom/client"
import { useState,useEffect } from "react"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./Error"
import RestaurantMenu from "./components/RestaurantMenu"
import Shimmer from "./components/shimmer"
//import Grocery from "./components/Grocery"
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux"
import Appstore from "./utils/Appstore"
import Cart from "./components/Cart"
const Applayout=()=>{
  const[userName,setUserName]=useState()
  useEffect(()=>{
   const data={
    name:"Avinash Chitare"
   }
   setUserName(data.name);
  },[])
  console.log(<Body></Body>)
    return(
      <Provider store={Appstore}>
      <UserContext.Provider value={{ loggedInUser:userName,setUserName}}>
    <div className="bg-white dark:bg-black">
     <Header></Header>
    <Outlet></Outlet>
    </div></UserContext.Provider>
    </Provider>)
}

const Grocery=lazy(()=>import("./components/Grocery"));

const appRouter=createBrowserRouter ([
  {
    path:"/",
    element:<Applayout></Applayout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Body></Body>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<Shimmer></Shimmer>}><Grocery></Grocery></Suspense>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu></RestaurantMenu>
      },
      {
        path:"/cart",
        element:<Cart></Cart>
      }
    ]
  },
  
])
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<RouterProvider router={appRouter}></RouterProvider>);
  
