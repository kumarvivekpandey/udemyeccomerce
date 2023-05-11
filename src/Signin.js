import React from 'react'
import "./Signin.css";

function Signin() {
  return (
    
    <div>
        <div className="conatiner">
        <form >
      <label>
        Email:
        <input type="email"  />
      </label>
      <br />
      <label>
        Password:
        <input type="password"  />
      </label>
      <br />
      <button type="submit">Sign In</button>
    </form>
        </div>
    </div>
  )
}

export default Signin