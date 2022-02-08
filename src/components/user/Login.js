import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import style from '../user/styles/login.module.css';

function Login() {
  return(
    <>
      <div>
        <Navbar />
      </div>
      <div className={style.container}>
        <div className={style.form_flex}>
           <div className="header">
             <h1 style={{textAlign: 'center'}}>Sign In</h1>
           </div>
          <form className={style.form}>
            <div className={style.input_row}>
              <label htmlFor="email" className={style.label}>Email Address</label>
              <input type="text" placeholder='johndoe@mail.com' id='email' className={style.input} />
            </div>
            <div className={style.input_row}>
              <label htmlFor="pwd" className={style.label}>Password</label>
              <input type="password" placeholder='Password' id='pwd' className={style.input} />
            </div>
            <input type="submit" value="Sign In" className={style.btn} />
            <div className="comment">
              <p style={{fontSize: 14, color: '#727272'}}>Do not have an account? <Link to="/sign-up">Sign Up</Link></p>
            </div>
          </form>
        </div>
      </div>
    </>
  ); 
}
export default Login;
