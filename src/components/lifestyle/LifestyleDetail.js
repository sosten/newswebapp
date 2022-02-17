import React from 'react';
import style from '../../styles/lifestyledetail.module.css';
import mandona from '../../assets/images/mandona.jpg';
import iris from '../../assets/images/iris.jpg';
import { FaFacebookF }  from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Navbar from '../Navbar';

function LifestyleDetail() {
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <div className={style.header}>
          <p>LIFESTYLE <span>|</span> Feb 10, 2022, 04:18pm CAT <span>|</span> 14,231 views</p>
          <h1>IRS To Drop Facial Scan ID.me Verification For Online Accounts</h1>
        </div>
        <div className={style.profile_wrapper}>
          <div className={style.profile}>
            <div className="img_cover">
              <img src={mandona} alt="mandona" className={style.img} />
            </div>
            <div className={style.author_cont}>
              <p><span>Mandona</span> Yatu news contributer</p>
              <p style={{color: "#598141"}}>Markets</p>
              <p>I cover markets and business news</p>
            </div>
          </div>
          <div className={style.follow_btn}>
            <button>Follow</button>
          </div>
        </div>
        
        <div className={style.article}>
          <p style={{fontSize: 13, color: "#737373"}}>Updated Feb 10, 2022, 04:18pm CAT</p>
          <div className={style.social}>
            <p><a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></p>
            <p><a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter /></a></p>
            <p><a href="http://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></p>
          </div>
          <p><b style={{color: "#d8361e"}}>TOPLINE</b> The Stock Market plunged on Thursday after a worse-than-expected inflation reading with consumer pricing spiking 7.5% in January</p>
          <img src={iris} alt="iris" />
          <div className="cont">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perspiciatis inventore? Perspiciatis esse tempora, 
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, pariatur aut minima reprehenderit fuga qui accusantium 
             maiores perspiciatis quis inventore dolorum nisi porro corporis ab consequuntur a magnam aliquam neque. illo dicta 
             necessitatibus optio unde quo error veniam animi, obcaecati enim provident omnis magni amet repellat.</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perspiciatis inventore? Perspiciatis esse tempora, 
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, pariatur aut minima reprehenderit fuga qui accusantium 
             maiores perspiciatis quis inventore dolorum nisi porro corporis ab consequuntur a magnam aliquam neque. illo dicta 
             necessitatibus optio unde quo error veniam animi, obcaecati enim provident omnis magni amet repellat.</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perspiciatis inventore? Perspiciatis esse tempora, 
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, pariatur aut minima reprehenderit fuga qui accusantium 
             maiores perspiciatis quis inventore dolorum nisi porro corporis ab consequuntur a magnam aliquam neque. illo dicta 
             necessitatibus optio unde quo error veniam animi, obcaecati enim provident omnis magni amet repellat.</p>
          </div>
          <div className={style.social_media}>
            <p style={{fontStyle: "italic", fontSize: 17}}>Follow Me on <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>  or <a href="http://linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <div className={style.about_author_wrapper}>
              <div className={style.profile}>
                <div className="img_cover">
                  <img src={mandona} alt="mandona" className={style.profile_img} />
                </div>
                <div className={style.author_name}>
                  <p>Mandona chikatula</p>
                </div>
              </div>
              <div className={style.follow_btn}>
                <button>Follow</button>
              </div>
            </div>
            <div className={style.about_author}>
              <p>I am a senior reporter at News Yatu covering markets and business news. Previously, I worked on the
              the wealth team at Yatu covering billionaire and their wealth. Before that, I.. <b>Read More</b> </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default LifestyleDetail