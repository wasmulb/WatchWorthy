import React from 'react'
import Footer from '../components/Footer'

function Signup() {
  return (
    <div className ="loginWrapper">
    <div className="login">
  <h1>Sign up</h1>
    <form method="post">
        <input type="email" placeholder="Email Address" name="email" required />
        <input type="password" name="p" placeholder="Password" required="required" />
        <button type="submit" className="btn btn-primary btn-block btn-large">Sign Me Up!</button>
    </form>
    <Footer/>
</div>
</div>
  )
}

export default Signup