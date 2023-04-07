import React from 'react'
import Footer from '../components/Footer'

function Login() {
  return (
    <div className ="loginWrapper">
    <div className="login">
  <h1>Login</h1>
    <form method="post">
        <input type="email" placeholder="Email Address" name="email" required />
        <input type="password" name="p" placeholder="Password" required="required" />
        <button type="submit" className="btn btn-primary btn-block btn-large">Let's go!</button>
    </form>
    <Footer/>
</div>
</div>
  )
}

export default Login