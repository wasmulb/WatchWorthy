import React, { useState } from 'react'
import Footer from '../components/Footer'
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

function Signup() {
  const [userFormData, setUserFormData] = useState({username: '', email: '', password: ''});
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [addUser, {error, data}] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) =>{
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    };
    try {
      const test = await addUser({
        variables: {...userFormData}
      });
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  }

  return (
    <div className ="loginWrapper">
    <div className="login">
  <h1>Sign up</h1>
    <form method="post" onSubmit={handleFormSubmit}>
        <input type="username" placeholder="Username" name="username" onChange={handleInputChange} required />
        <input type="email" placeholder="Email Address" name="email" onChange={handleInputChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleInputChange} required />
        <button type="submit" className="btn btn-primary btn-block btn-large"  onClick={handleFormSubmit} validated={validated.toString()}>Sign Me Up!</button>
    </form>
    <Footer/>
</div>
</div>
  )
}

export default Signup;