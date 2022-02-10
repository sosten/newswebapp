import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/newsletter.module.css';

function NewsLetter() {
  return (
    <>
        <div className={style.form_wrapper}>
            <div className={style.header}>
                <h1>Don't miss out.</h1>
                <p>Sign up for our newsletter to stay in the loop.</p>  
            </div>
            <form>
                <label htmlFor="email"></label>
                <input type="text" placeholder='Enter e-mail address' id='email' />
                <input type="submit" value={'Subscribe'} />
            </form>
            <span>You may opt at any time. <Link to={'/terms'}>Tearm and Conditions</Link> and <Link to={'/privacy'}>Privacy Policy</Link></span>
        </div>
    </>
  )
}

export default NewsLetter