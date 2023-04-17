import Footer from '../components/Footer'
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';


function Login() {


  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, {error}] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };



  return (
    <div className ="loginWrapper">
    <div className="login">
  <h1>Login</h1>
    <form method="post" onSubmit={handleFormSubmit}>
        <input type="email" placeholder="Email Address" name="email" value={formState.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formState.password} onChange={handleChange} required />
        <button type="submit" className="btn btn-primary btn-block btn-large">Let's go!</button>
    </form>
    
   
    
    <Footer/>
    <p className='description'>Track your progress as you watch your favorite movies</p>
</div>
</div>
  )
}

export default Login