import React, { useState } from 'react'
import './LogInPopUp.css'
import {assets} from '../../assets/assets'

const LogInPopUp = ({setshowLogin}) => {

  const [currState,setcurrState] = useState("Log In")

  return (
    <div className='login-popup'>
       <form className='login-popup-container'>
        <div className='login-popup-title'>
            <h2>{currState}</h2>
            <img onClick = {()=>setshowLogin(false)} src={assets.cross_icon} alt=''/>
            </div>
            <div className='login-popup-inputs'>
                {currState==="Log In"?<></>:<input type='text' placeholder='Your name' required/>}
                <input type='email' placeholder='Your email' required/>
                <input type='password' placeholder='Password' required/>
            </div>
            <button>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className='login-popup-condition'>
                <input type='checkbox' required/>
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Log In"
            ?<p>Create a new account? <span onClick={()=>setcurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setcurrState("Log In")}>Login here</span></p>
            }
       </form>
    </div>
  )
}

export default LogInPopUp