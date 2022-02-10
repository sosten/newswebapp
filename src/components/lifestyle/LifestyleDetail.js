import React from 'react';
import style from '../../styles/lifestyledetail.module.css';
import mandona from '../../assets/images/mandona.jpg';
import iris from '../../assets/images/iris.jpg';
import Navbar from '../Navbar';

function LifestyleDetail() {
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <div className={style.header}>
          <h1>IRS To Drop Facial Scan ID.me Verification For Online Accounts</h1>
          <p>Lifestyle <span>1hr ago</span> </p>
        </div>
        <div className={style.profile}>
          <div className="img_cover">
            <img src={mandona} alt="mandona" className={style.img} />
          </div>
          <div className={style.author_cont}>
            <p><span>mandona</span> Yatu news contributer</p>
            <p>I write about marketing</p>
          </div>
        </div>
        <div className={style.article}>
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
        </div>
      </div>
    </>
  )
}
export default LifestyleDetail