import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import style from '../styles/contact.module.css';

const Contact = () => {
  return (
      <>
        <Navbar />
        <div className={style.header}>
          <div className={style.header_cont}>
            <div className={style.title_1}>
              <h1>Get in touch now</h1>
            </div>
            <div className={style.title_2}>
              <p>Everything and anything you need to know about Yatu, the global media brand that celebrates entrepreneurial capitalism. Find out more information on Yatu' full-year business plan, franchises, products, platforms, events and more.</p>
            </div>
          </div> 
        </div>
        <div className={style.row}>
          <div className={style.bg_img}></div>
          <div className={style.team}>
            <h2>Meet our staff members</h2>
            <p>Find out more about Yatus' products, franchises, new initiatives and communities, as well as our print schedule, digital list launches, event calendar, rates and specs.</p>
            <Link to="/about">Learn More</Link>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.address}>
            <h3>Yatu News Media</h3>
            <p>499 Church Road</p>
            <p>Lusaka, Zambia</p>
            <p>+260777730003</p>
          </div>
          <div className={style.contact_form}>
            <form>
              <div className={style.name}>
                <div className={style.fname}>
                  <label htmlFor="fname">First Name</label>
                  <input type="text" placeholder='First Name' id='fname' />
                </div>
                <div className={style.lname}>
                  <label htmlFor="lname">Last Name</label>
                  <input type="text" placeholder='Last Name' id='lname' />
                </div>
              </div>
              <label htmlFor="email">Email Address</label>
              <input type="text" placeholder='yourname@mail.com' id='email' />
              <label htmlFor="pnumber">Phone Number</label>
              <input type="text" placeholder='+260 ...' id="pnumber" />
              <label htmlFor="msg">Your Message</label>
              <textarea id="msg" rows={10}></textarea>
              <input type="checkbox" /> <span>I'd like to receive valuable offers and information from Yatu News Media.</span>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>

        <Footer />
      </>
  )
}

export default Contact