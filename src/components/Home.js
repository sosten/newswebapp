import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import style from '../styles/home.module.css'
import image from '../assets/images/woman.jpg';
import boxing from '../assets/images/boxing.jpg';
import basketball from '../assets/images/basketball.jpg';
import stock from '../assets/images/stock-exchange.jpg';
import google from '../assets/images/google.jpg';
import finance from '../assets/images/finance.jpg';
import obama from '../assets/images/obama.jpg';
import { MdArrowRightAlt } from 'react-icons/md';

function Home() {
  return(
    <>
      <div>
        <Navbar />
      </div>
      <div className={style.wrapper}>
        <div className={style.header}> 
          <div className={style.img_cont}>
            <img src={image} alt='woman enterprenure' className={style.img} />
            <Link to={'/'} id='cate'>Developing</Link>
            <h1><Link to={'/'} id='title'>Women in Enterprenueship. This is a great move to empower women.</Link></h1>
            <p>Dr. Mulilo Banda has ecouraged the Minister of Commerce to continue with the move of supporing women. This will help to further develop our country as many will...</p>
            <p id='author'>By <b>Samson Kasonde</b> <span style={{color: '#737373', fontSize: 12}}>News Yatu staff</span> </p>
            <p id='time'>18 minutes ago</p>
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
        <div>
          <div className={style.m_header}>
            <h2><Link to={'/'}>Money</Link></h2>
            <MdArrowRightAlt size={22} color='rgb(90 25 13)' />
          </div>
          <div className={style.m_wrapper}>
          <div className={style.m_cont}>
              <img src={stock} alt='stock' className={style.m_img}/>
              <div className={style.m_card}>
                <Link to={'/'} id='money'>Money</Link>
                <h3><Link to={'/'}>100 Great Goldilocks Stocks For A Stormy Market</Link></h3>
                <p id='author'>By <b>Mandona</b> <span style={{color: '#737373', fontSize: 12}}>News Yatu staff</span> </p>
              </div>
              <img src={obama} alt='obama' className={style.m_img}/>
              <div className={style.m_card}>
                <Link to={'/'} id='money'>Money</Link>
                <h3><Link to={'/'}>Obama's First Year: An Economic Scorecard</Link></h3>
                <p id='author'>By <b>Mandona</b> <span style={{color: '#737373', fontSize: 12}}>News Yatu staff</span> </p>
              </div>
            </div>
            <div className={style.m_side_cont}>
              <div className={style.m_cover}>
                <img src={finance} alt='finance' className={style.m_side_img} />
                <div>
                  <Link to={'/'} id='money'>Money</Link>
                  <h3><Link to={'/'}>Stocks Just Had Their Worst Month Since March 2020: January's Wild Ride In 8 Numbers</Link></h3>
                  <p id='author'>By <b>Samson</b> <span style={{color: '#737373', fontSize: 12, }}>News Yatu Staff</span></p>
                </div>
              </div>
              <div className={style.sub_heading_wrapper}>
                <div className={style.main_sub}>
                  <img src={google} alt='google' className={style.main_sub_img} />
                  <Link to={'/'} id='day_time'>Money</Link> <small>/</small> <span style={{fontSize: 13, color: '#525252', fontWeight: '500'}}>6 days ago</span>
                  <h3><Link to={'/'}>Alphabet Surges 7% After Blowout Earnings, Here's What The 20:1 Stock Split Means For Investors</Link></h3>
                  <p id='author'>By <b>Samson</b> <span style={{color: '#737373', fontSize: 12}}>News Yatu Staff</span></p>
                </div>
                <div className={style.child_sub_wrapper}>
                  <div className={style.child_cont}>
                    <div className={style.child_flex}>
                      <img src={google} alt='google' className={style.child_img} />
                      <div>
                        <Link to={'/'} id='day_time'>Money</Link> <small>/</small> <span style={{fontSize: 13, color: '#525252', fontWeight: '500'}}> 1 week ago </span>
                        <h3><Link to={'/'}>Alphabet Surges 7% After Blowout Earnings, Here's What The 20:1 Stock Split Means For Investors</Link></h3>
                      </div>
                    </div>
                    <div className={style.child_flex}>
                      <img src={google} alt='google' className={style.child_img} />
                      <div>
                        <Link to={'/'} id='day_time'>Money</Link> <small>/</small> <span style={{fontSize: 13, color: '#525252', fontWeight: '500'}}> 1 week ago </span>
                        <h3><Link to={'/'}>Alphabet Surges 7% After Blowout Earnings, Here's What The 20:1 Stock Split Means For Investors</Link></h3>
                      </div>
                    </div>
                    <div className={style.child_flex}>
                      <img src={google} alt='google' className={style.child_img} />
                      <div>
                        <Link to={'/'} id='day_time'>Money</Link> <small>/</small> <span style={{fontSize: 13, color: '#525252', fontWeight: '500'}}> 1 week ago </span>
                        <h3><Link to={'/'}>Alphabet Surges 7% After Blowout Earnings, Here's What The 20:1 Stock Split Means For Investors</Link></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Home;