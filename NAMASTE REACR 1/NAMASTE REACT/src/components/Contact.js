import React from "react"
const Contact=()=>{
    const submit=()=>{
        alert("Sucessfully submitted!")
    }
    return(
        <div>
            <h1>Contact Us page</h1>
            <form className="p=5 m-5">
                <input type="text" className="border solid black m-5" required="This is necessary"/>
                <input type="text" className="border solid black m-5" required/>
                <button className="w-40 bg-black text-white rounded-lg" onClick={submit}>Submit</button>
            </form>
        </div>
    )
}
export default Contact;