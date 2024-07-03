import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
           id:"2343",
           login:"342",

           created_at
:"Dummy",
avatar_url:"dvkdm",

           location:"Dummylocation",
           userInfo:{}

        }
        

    }
   async componentDidMount(){
            const data= await fetch(" https://api.github.com/users/Avinash23072003");
            const json= await data.json();
            this.setState({
                userInfo:json,
            })
            console.log(json);
        
    }
   
    render(){
     
 
     const{id,login
,        created_at
        ,
        avatar_url
        }=this.state.userInfo
        return(
            <div className="p-16 font-bold text-xl">
                <h3>Id:{id}</h3>
                <h3>Created_at
                :{created_at
                }</h3>
                <h3>Login
                :{login
                }</h3>
                <img src={avatar_url} alt="Profile"/>
                


            </div>
        )
    }
}
export default UserClass;