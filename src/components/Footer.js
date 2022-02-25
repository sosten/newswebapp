import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/footer.module.css';
import { RiFacebookBoxFill } from 'react-icons/ri';
import { BsYoutube } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

function Footer() {
  return (
    <div className={style.footer}>
        <div>
            <p>&#xa9;{new Date().getFullYear()} News Yatu Media. All Rights Reserved</p>
        </div>
        <div>
          <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><RiFacebookBoxFill color='#777' size={22} /></a>
          <a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><BsTwitter color='#777' size={22} /></a>  
          <a href="http://youtube.com" target="_blank" rel="noopener noreferrer"><BsYoutube color='#777' size={22} /></a>  
          <a href="http://instagram" target="_blank" rel="noopener noreferrer"><AiFillInstagram color='#777' size={22} /></a>
        </div>
        <div>
          <Link to={'contact-us'}>Contact Us</Link>
          <Link to={"/terms"}>Terms and Condition</Link>
          <Link to={"/policy"}>Privacy Policy</Link>
          <Link to={"/security"}>Security</Link>
        </div>
    </div>
  )
}

export default Footer;
