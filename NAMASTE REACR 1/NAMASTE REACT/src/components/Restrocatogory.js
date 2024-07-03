import Itemlist from "./Itemlist";
import { useState } from "react";
const Restrocatogory = ({ data,showItems,setShowIndex }) => {
  //const[show,setShow]=useState(false);
  console.log(data);
  console.log(data.info.name);
  const handleClick=()=>{
    setShowIndex();
  }

  return (
    <div className="p-3 bg-gray-100 m-auto my-4 w-6/12 text-lg font-bold shadow-lg">
      <div className="flex justify-between cursor-pointer">
      
        <span onClick={handleClick}>{data.info.name}</span>
        <span>⬇️</span>
      </div>
     {showItems && <Itemlist recdata={data} />}
    </div>
  );
};

export default Restrocatogory;
