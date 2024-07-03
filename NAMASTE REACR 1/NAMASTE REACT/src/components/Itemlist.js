import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/CartSlice";
const Itemlist = ({ recdata}) => {
  if (!recdata|| recdata.length === 0) {
    return <div>No items available</div>;
  }


  // const CDN_URL = "https://www.swiggy.com/mapi/homepage/getCards?lat=18.61610&lng=73.72860&restaurant_id=57347"; // Update this to your Cloudinary CDN URL
const dispatch=useDispatch();
  const addHandle=(recdata)=>{
    dispatch(addItems(recdata));
    console.log(recdata);
  }
  return (
    <div>
    
  <div className="w-9/12 p-5 text-left font-normal">
    
    <span>{recdata.info.name}</span>
    <br></br>
    <span>{recdata.info.cuisines.join(",")}</span>
    <br></br>
    <span>{recdata.info.costForTwo}</span>
  
    <div className="flex w-3/12 p-4 ">
            <div className="absolute">
              <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"   
              onClick={()=>addHandle(recdata)}>
                Add +
              </button>
            </div>
           
            <img src={CDN_URL + recdata.info.cloudinaryImageId} className="w-full rounded-md flex" />
          
          </div>

  </div>
  </div> 
  )
};

export default Itemlist;
