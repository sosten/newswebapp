import React from 'react';
import { Link } from 'react-router-dom';
import stock from '../../assets/images/stock-exchange.jpg';
import digital from '../../assets/images/digital-marketing.jpg';
import google from '../../assets/images/google.jpg';
import man from '../../assets/images/man.jpg';
import finance from '../../assets/images/finance.jpg';
import obama from '../../assets/images/obama.jpg';
import { MdArrowRightAlt } from 'react-icons/md';
import style from '../../styles/money.module.css';

function Money() {
    return (
        <>
            <div className={style.m_header}>
                <h2><Link to={'/'}>Money</Link></h2>
                <MdArrowRightAlt size={22} color='rgb(90 25 13)' />
            </div>
            <div className={style.m_wrapper}>
                <div className={style.money_left_cont}>
                    <div className={style.money_left_card}>
                        <img src={stock} alt='stock' className={style.left_img}/>
                        <p><Link to={'/'} className={style.cate}>Money</Link></p> 
                        <h3><Link to={'/'} className={style.left_intro}>100 Great Goldilocks Stocks For A Stormy Market</Link></h3>
                        <p className={style.author}>By <b>Mandona</b> <span style={{color: '#737373', fontSize: 12}}>News Yatu staff</span></p>
                    </div>
                    <div className={style.money_left_card}>
                        <img src={obama} alt='obama' className={style.left_img}/>
                        <p><Link to={'/'} className={style.cate}>Money</Link></p> 
                        <h3><Link to={'/'} className={style.left_intro}>Obama's First Year: An Economic Scorecard</Link></h3>
                        <p className={style.author}>By <b>Mandona</b> <span style={{color: '#737373', fontSize: 12}}>News Yatu staff</span> </p>
                    </div>
                </div>
                <div className={style.money_right_cont}>
                    <div className={style.money_right_card}>
                        <img src={finance} alt='finance' className={style.right_img} />
                        <p><Link to={'/'} className={style.cate}>Money</Link></p>  
                        <h3><Link to={'/'} className={style.right_intro}>Stocks Just Had Their Worst Month Since March 2020: January's Wild Ride In 8 Numbers</Link></h3>
                        <p className={style.author}>By <b>Samson</b> <span style={{color: '#737373', fontSize: 12, }}>News Yatu Staff</span></p>
                    </div>
                    <div className={style.sub_heading_wrapper}>
                        <div className={style.main_sub}>
                            <img src={digital} alt='digital' className={style.main_sub_img} />
                            <p><Link to={'/money'} className={style.cate}>Money</Link> <small>/</small> <span style={{fontSize: 13, color: '#525252', fontWeight: '500'}}>6 days ago</span></p>
                            <h3><Link to={'/money'} className={style.sub_intro}>Apple, Amazon Or Nike? Peloton Stock Surges, But Here’s What Experts Say About A Takeover</Link></h3>
                            <p className={style.author}>By <b>Samson</b> <span style={{color: '#737373', fontSize: 12}}>News Yatu Staff</span></p>
                        </div>
                        <div className={style.child_sub_wrapper}>
                            <div className={style.child_cont}>
                                <div className={style.child_flex}>
                                    <div className={style.child_1}>
                                        <img src={google} alt='google' className={style.child_img} />
                                    </div>
                                    <div className={style.child_2}>
                                        <Link to={'/'} className={style.cate}>Money</Link> <small>/</small> <span style={{fontSize: 13, color: '#525252', fontWeight: '500'}}> 1 week ago </span>
                                        <h3><Link to={'/'} className={style.child_intro}>Google has gained an increase in its revenue by 30%</Link></h3>
                                    </div>
                                </div>
                                <div className={style.child_flex}>
                                    <div className={style.child_1}>
                                        <img src={man} alt='man' className={style.child_img} />
                                    </div>
                                    
                                    <div className={style.child_2}>
                                        <Link to={'/'} className={style.cate}>Money</Link> <small>/</small> <span style={{fontSize: 13, color: '#525252', fontWeight: '500'}}> 1 week ago </span>
                                        <h3><Link to={'/'} className={style.child_intro}>America Is Still Missing 2.5 Million Workers—Most Won't Return To Work This Year</Link></h3>
                                    </div>
                                </div>
                                <div className={style.child_flex}>
                                    <div className={style.child_1}>
                                        <img src={digital} alt='digital' className={style.child_img} />
                                    </div>
                                    <div className={style.child_2}>
                                        <Link to={'/'} className={style.cate}>Money</Link> <small>/</small> <span style={{fontSize: 13, color: '#525252', fontWeight: '500'}}> 1 week ago </span>
                                        <h3><Link to={'/'} className={style.child_intro}>Alphabet Surges 7% After Blowout Earnings, Here's What The 20:1 Stock Split Means For Investors</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Money;