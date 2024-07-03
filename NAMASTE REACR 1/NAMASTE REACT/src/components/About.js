import React from "react";
import User from "./User";
import UserClass from "./UserClass";
//import UserContext from '../utils/UserContext.js';

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Component did mount logic if needed
    }

    render() {
        return (
            <div className="p-5 border-solid black">
                <h1>About Us page</h1>
                {/* <div>
                    <UserContext.Consumer>
                        {({loggedInUser}) => {
                           <h1>Default User:{loggedInUser}</h1>;
        
                        }}
                    </UserContext.Consumer>
                </div> */}
                <UserClass name={"Avinash Chitare(Class)"} age={"24 years"} />
            </div>
        );
    }
}

export default About;
