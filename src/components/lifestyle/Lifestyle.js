import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../styles/lifestyle.module.css';
import { MdArrowRightAlt } from 'react-icons/md';
import iris from '../../assets/images/iris.jpg' ;
import people from '../../assets/images/people.jpg' ;

function Lifestyle() {
    return (
        <>
            <div className={style.header}>
                <h1 style={{marginRight: 10, fontSize: 20}}><Link to={'lifestyle'} className={style.header_link}>Lifestyle</Link></h1>
                <MdArrowRightAlt size={22} color="#333" />
            </div>
            <div className={style.container}>
                <div className={style.cont_flex}>
                    <div className={style.left_cont}>
                        <img src={iris} alt="iris" className={style.left_img} />
                        <p><Link to={'/lifestyle-detail'} className={style.cate}>Lifestyle</Link></p>
                        <h4><Link to={'/lifestyle-detail'} className={style.intro}>IRS To Drop Facial Scan ID.me Verification For Online Accounts</Link></h4>
                        <p className={style.author}>By <b>Mandona</b> <span style={{color: '#737373', fontSize: 12}}>News Yatu staff</span></p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className={style.right_cont}>
                        <div className={style.right_card}>
                            <img src={people} alt="people" className={style.right_img} />
                            <p><Link to={'/lifestyle'} className={style.cate}>Lifestyle</Link></p>
                            <h4><Link to={'/lifestyle'} className={style.right_intro}>People are having fun. Greate staff you know, yes</Link></h4>
                            <p className={style.author}>By <b>Mandona</b> <span style={{color: '#737373', fontSize: 12}}>News Yatu staff</span></p>
                        </div>
                        <div className={style.right_card}>
                            <img src={people} alt="people" className={style.right_img} />
                            <p><Link to={'/lifestyle'} className={style.cate}>Lifestyle</Link></p>
                            <h4><Link to={'/lifestyle'} className={style.right_intro}>People are having fun. Greate staff you know, yes</Link></h4>
                            <p className={style.author}>By <b>Mandona</b> <span style={{color: '#737373', fontSize: 12}}>News Yatu staff</span></p>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}
export default Lifestyle;