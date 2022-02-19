import React from 'react';
import { Link } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import { BiSearch } from 'react-icons/bi';
import style from '../styles/navbar.module.css';

function Navbar() {
  return(
    <div className={style.container}>
        <div className={style.navbar}>
            <div className={style.logo}>
                <Link to={'/'} style={{fontWeight: '600', color: '#fff'}}><span style={{backgroundColor: 'red', padding: 5, borderRadius: 2}}>NEWS</span> YATU</Link>
                <div className={style.sign_in}>
                    <BiUserCircle color='#fff' size={24}/>
                    <Link to={'/sign-in'}>Sign in</Link> <span style={{display: 'inlineBlock', color: '#fff', marginLeft: 10}}> / </span>
                    <Link to={'/sign-up'}>Sign up</Link>
                </div>
            </div>
            <div className={style.links}>
                <ul className={style.links_flex}>
                    <li><Link to={'/business'}>Business</Link></li>
                    <li><Link to={'/sport'}>Sport</Link></li>
                    <li><Link to={'/politics'}>Politics</Link></li>
                    <li><Link to={'/lifestyle'}>Lifestyle</Link></li>
                    <li><Link to={'/tech'}>Tech</Link></li>
                    <li><Link to={'/featured'}>Featured</Link></li>
                    <li><Link to={'/real-estate'}>Real Estate</Link></li>
                    <li><Link to={'/money'}>Money</Link></li>
                </ul>
            </div>
            <form className={style.search_form}>
                <label htmlFor='search'></label>
                <div className={style.form_flex}>
                    <input type='text' placeholder='Search' id='search' />
                    <span className={style.search}>
                        <BiSearch color='#fff' size={24} />
                    </span>
                </div>
            </form>
        </div>
    </div>
  ) 
}

export default Navbar;
