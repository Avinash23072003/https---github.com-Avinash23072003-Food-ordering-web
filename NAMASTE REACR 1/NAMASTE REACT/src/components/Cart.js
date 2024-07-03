import { useDispatch, useSelector } from "react-redux";
import { clearitem } from "../utils/CartSlice";
import Itemlist from "./Itemlist";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    // Check if cartItems is undefined or null to avoid errors
    if (cartItems.length==0) {
        return <div className="p-5 m-5 flex justify-center font-bold text-xl">Your Cart is empty!</div>; // Handle loading state if necessary
    }

  const dispatch=useDispatch();

  
   const clearItems=()=>{
    dispatch(clearitem());
    console.log("Item deleted");
   }

    return (
        <div>
            <h1 className="font-bold text-center text-lg p-5">Cart</h1>
        {/* </div> <Itemlist recdata={cartItems}/> </div>*/}
        <div className="flex justify-center">
        <button className= "bg-black text-white rounded-lg w-56 text-center" onClick={clearItems}>Clear</button>
          </div>
          </div>
        
    )
};

export default Cart;
