import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';
import style from '../user/styles/register.module.css';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFirstName = (event) =>{
    setFirstName(event.target.value)
  }
  
  const handleLastName = (event) =>{
    setLastName(event.target.value)
  }

  const handleEmail = (event) =>{
    setEmail(event.target.value)
  }

  const handlePassword = (event) =>{
    setPassword(event.target.value)
  }

  const handleConfirmPassword = (event) =>{
    setConfirmPassword(event.target.value)
  }

  const comparePasswords = () =>{
    if(password !== confirmPassword) {
      alert('your passwords did not match');
    }
  }

  const user = ({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  })

  const onSubmit = (event) => {
    event.preventDefault();
    comparePasswords()
    
    axios.post('http://localhost:5000/api/user', user)
      .then(()=>{
        window.location="/";
      })
      .catch(error =>{
        console.log(error)
        alert('Unable to Register. Check if all required fields on the form are filled')
      })
  }

  useEffect(()=>{
    axios.get('http://localhost:5000/api/getusers',)
  })
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className={style.container}>
        <div className={style.form_flex}>
          <div className={style.header}>
            <h1>Sign Up</h1>
          </div>
          <form onSubmit={onSubmit} className={style.form}>
            <label htmlFor="fname" className={style.label}>First Name</label>
            <input 
              type="text" 
              placeholder='First Name'
              name='fname'
              value={firstName} 
              id='fname'
              onChange={handleFirstName} 
              className={style.input}
              required 
            />

            <label htmlFor="lname" className={style.label}>Last Name</label>
            <input 
              type="text" 
              placeholder='Last Name'
              name='lname'
              value={lastName} 
              id='lname'
              onChange={handleLastName} 
              className={style.input}
              required 
            />

            <label htmlFor="email" className={style.label}>Email</label>
            <input 
              type="text" 
              placeholder='yourname@mail.com'
              name='email'
              value={email} 
              id='email'
              onChange={handleEmail} 
              className={style.input}
              required 
            />

            <label htmlFor="pwd" className={style.label}>Password</label>
            <input 
              type="password" 
              placeholder='Password'
              name='passsword'
              value={password} 
              id='pwd'
              onChange={handlePassword} 
              className={style.input}
              required 
            />

            <label htmlFor="confirm-pwd" className={style.label}>Confirm Password</label>
            <input 
              type="password" 
              placeholder='Confirm Password'
              name='confrim_password'
              value={confirmPassword} 
              onChange={handleConfirmPassword}
              id='confirm-pwd' 
              className={style.input}
              required 
            />

            <input type="submit" value={"Sign Up"} className={style.btn} />
            <div className="comment">
              <p style={{fontSize: 14, color: '#727272'}}>Already have an account? <Link to="/sign-in">Sign In</Link></p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
};

export default Register;
