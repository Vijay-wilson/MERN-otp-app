import React from 'react'
import axios from 'axios'
import "./form.css";
function Form() {
    
      return (
          <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
            <div id ="container">

                        <form onSubmit={optRequest}>
                     
                        <div id ="email">
                            <span>Email: </span> 
                            <input type = "text"  name = "email" placeholder = "Enter Your email" />
                        </div>
                      
                        <input type = "submit" className = "btn btn-primary" value="Submit" style={{margin:'20px'}}/>
                        </form>
                    </div>
        </div>
      );
    }

async function optRequest(event){
    event.preventDefault();
    let email = event.target.email.value;
    await axios.post('http://localhost:1234/send',{email}).then(res=>{
        sessionStorage.setItem('otp',res.data);
        sessionStorage.setItem('email',email);
    })
    window.open("/otp","_self");
}
export default Form;
