import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import style from '../styles/home.module.css';
import woman from '../assets/images/woman.jpg';
import boxing from '../assets/images/boxing.jpg';
import basketball from '../assets/images/basketball.jpg';
import { MdArrowRightAlt } from 'react-icons/md';
import Money from './money/Money';
import Lifestyle from './lifestyle/Lifestyle';

function Home() {
  return(
    <>
      <div>
        <Navbar />
      </div>
      <div className={style.wrapper}>
        <div className={style.header}> 
          <div className={style.img_cont}>
            <img src={woman} alt='woman enterprenure' className={style.img} />
            <p><Link to={'/'} className={style.cate}>Developing</Link></p> 
            <h1><Link to={'/'} className={style.title}>Women in Enterprenueship. This is a great move to empower women.</Link></h1>
            <p>Dr. Mulilo Banda has ecouraged the Minister of Commerce to continue with the move of supporing women. This will help to further develop our country as many will...</p>
            <p className={style.author}>By <b>Samson Kasonde</b> <span style={{color: '#737373', fontSize: 12}}>News Yatu staff</span> </p>
            <p className={style.time}>18 minutes ago</p>
          </div>
          <div className={style.aside_wrapp}>
            <div className={style.aside_section}>
              <img src={boxing} alt='boxing' className={style.img_aside}/>
              <Link to={'/'} id='cate'>Sport</Link> / <span id='aside_time'>3 hours ago</span>
              <h2><Link to={'/'} id='aside_title'>Malunga defeates Tarzan in round 3</Link></h2>
              <p>This was tiet fight as both men were strong. Fought with passion never sim to give up, one would say battle of the giants...</p>
              <p id='aside_author'>By <b>Mutale Sarah</b> <span style={{color: '#737373', fontSize: 12}}>News Yatu staff</span></p>
            </div>
            <div className={style.aside_section}>
              <img src={basketball} alt='boxing' className={style.img_aside}/>
              <Link to={'/'} id='cate'>Sport</Link> / <span id='aside_time'>2 days ago</span>
              <h2><Link to={'/'} id='aside_title'>basketball is the Real thing</Link></h2>
              <p>This was tiet fight as both men were strong. Fought with passion never sim to give up, one would say battle of the giants...</p>
              <p id='aside_author'>By <b>Mutale Sarah</b> <span style={{color: '#737373', fontSize: 12}}>News Yatu staff</span></p>
            </div>
            <div className={style.btn_wrapper}>
              <Link to={'/'} id='btn'>More Sport </Link>
              <MdArrowRightAlt size={22} color='#d33316' />
            </div>
          </div>
        </div>
        <Money />
        <Lifestyle />
      </div>
      <Footer />
    </>
  )
}
export default Home;