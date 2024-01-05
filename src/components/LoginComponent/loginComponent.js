import React,{useState} from 'react'
import  './loginComponent.css'
import { useNavigate } from 'react-router-dom';

function LoginComponent() {
  const navigate = useNavigate();

   const [email,setmail] =  useState("");
   const [password,setPassword] = useState("")

   function emailInputHandler(event){
    setmail(event.target.value);
   }

   function passwordInputHandler(event){
    setPassword(event.target.value)
   };

   function loginEventHandler(event){
    event.preventDefault();

    console.log(email);
    console.log(password);
    var logDetailes;
    if(email !== undefined && password !== undefined){
       logDetailes = "1"
    }
    else{
       logDetailes = "1"
    }

    localStorage.setItem('isLoggedIn',logDetailes)
    console.log('login succesfully');
    navigate('/')
   }
    return ( <>
    
    <div className="container login-container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="login-form">
          <h2 className="text-center">Login</h2>
          <form onSubmit={loginEventHandler}>
            <div className="form-group">
              <label for="username">Email:</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your Email" onChange={emailInputHandler}/>
            </div>
            <div className="form-group">
              <label for="password">Password:</label>
              <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={passwordInputHandler}/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
    
    
    </>
    )
}

export default LoginComponent;
