import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import style from '../user/styles/register.module.css';

const Register = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className={style.container}>
        <div className={style.form_flex}>
          <div className="header">
            <h1 style={{textAlign: 'center'}}>Sign Up</h1>
          </div>
          <form className={style.form}>
            <label htmlFor="fname" className={style.label}>First Name</label>
            <input type="text" placeholder='First Name' id='fname' className={style.input} />
            <label htmlFor="lname" className={style.label}>Last Name</label>
            <input type="text" placeholder='Last Name' id='lname' className={style.input} />
            <label htmlFor="pwd" className={style.label}>Password</label>
            <input type="password" placeholder='Password' id='pwd' className={style.input} />
            <label htmlFor="confirm-pwd" className={style.label}>Confirm Password</label>
            <input type="password" placeholder='Confirm Password' id='confirm-pwd' className={style.input} />
            <input type="submit" value={"Sign Up"} className={style.btn} />
            <div className="comment">
              <p style={{fontSize: 14, color: '#727272'}}>Already have an account? <Link to="/sign-in">Sign In</Link></p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
};

export default Register;
