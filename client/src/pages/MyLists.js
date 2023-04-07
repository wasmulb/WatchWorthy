import React from 'react'
import Footer from '../components/Footer'

function MyLists() {
  return (
    <div className ="loginWrapper">
    <div className="login">
  <h1>Login7</h1>
    <form method="post">
      <input type="text" name="u" placeholder="Username" required="required" />
        <input type="password" name="p" placeholder="Password" required="required" />
        <button type="submit" className="btn btn-primary btn-block btn-large">Let me in.</button>
    </form>
    <Footer/>
</div>
</div>
  )
}

export default MyLists