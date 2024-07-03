import React from 'react';
import { useState } from 'react';

const User=(props)=>{
    const[count,setcount]=useState(0);
    //console.log(count);

    return (
        <div className="userdetails">
            <h1>Count={count}</h1>
            <button onClick={()=>{
                setcount(count+1)
            }}>Increase</button>
            <h3>name:{props.name}</h3>
            <h3>Age:{props.age}</h3>
            <h3>Class:{props.class}</h3>
        </div>
    )
}
export default User;