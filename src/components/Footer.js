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
            <p>&#xa9;2022 News Yatu Media. All Rights Reserved</p>
        </div>
        <div>
          <Link to="/facebok"><RiFacebookBoxFill color='#777' size={22} /></Link>
          <Link to="/twitter"><BsTwitter color='#777' size={22} /></Link>
          <Link to="/youtube"><BsYoutube color='#777' size={22} /></Link>
          <Link to="/instagram"><AiFillInstagram color='#777' size={22} /></Link>
        </div>
        <div>
          <Link to="/contact">Contact Us</Link>
            <Link to="/terms">Terms and Condition</Link>
            <Link to="/policy">Privacy Policy</Link>
            <Link to="/security">Security</Link>
        </div>
    </div>
  )
}

export default Footer;
