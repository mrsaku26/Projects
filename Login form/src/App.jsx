import React, { useState } from 'react'

const App = () => {

  const[sign,setSign]=useState('Login')

  return (
    <>
    <div className="login">
      <div className="form">
        <h1>{sign}</h1>
      {
        sign==='Sign In'?<div className="name">
          <label htmlFor="">Enter your Name 
        </label>
        <input type="text" name="" id="" />
      </div>:''
      }
        <div className="email">
          <label htmlFor="">Enter your Email 
          <input type="text" name="" id="" />
        </label>
        </div>
      <div className="password">
          <label htmlFor="">Enter your Password 
          <input type="text" name="" id="" />
        </label>
      </div>
        <div className="low">
          <button onClick={()=>{alert('Form is submitted')}}>{sign}</button>
        </div>
        <div className="texx">
          {
            sign==='Login'?<p> Dont have an account? <span onClick={()=>{setSign('Sign In')}}>Sign In</span></p>:<p> Already have an account?<span onClick={()=>{setSign('Login')}}>Login</span></p>
          }
          
        </div>
      </div>
    </div>
    </>
  )
}

export default App
