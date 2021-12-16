import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import "./forminput.css"

const FormInput = () => {

    const [firstName , setFirstName] = useState("");
    const [surname , setSurname] = useState("");
    const [email , setEmail] = useState("");
    const [phone , setPhone] = useState("");
    const history = useHistory();
    
     
    const handleSubmit = (e) => {
           
        e.preventDefault();
        const inputField = {firstName , surname , email , phone}
        console.log(inputField)

        history.push("/");
         
    }


    return ( 
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
            
              <input 
                type="text"
                required
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <input 
                type="text"
                required
                placeholder="Surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />

              <input 
                type="text"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input 
                type="text"
                required
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <button>Get Movie</button>
            </form>
        </div>
     );
}
 
export default FormInput;