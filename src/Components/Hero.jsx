import React from 'react'
import text from '../assets/Screenshot_2023-12-09_203323-removebg-preview.png'

function Hero() {
    return (
        <div className='Hero'>
            <div className="left">
                <div className="top">
                    <div className="line"></div>
                    <p> Hi , I’m a </p>
                </div>
                <div className="middle">
                    <h1>Web</h1>
                    <h1>Developer</h1>
                </div>
                <div className="bottom">
                    <ul>
                        <li>
                            <a href="">github</a>
                        </li>
                        <li>
                            <a href="">whatsapp</a>
                        </li>
                        <li>
                            <a href="">CV</a>
                        </li>
                        <li>
                            <a href="">telegram</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right">
                <p>_________ <br />
                    Hey there! I'm Anush, a 17-year-old web developer from Yerevan, Armenia. I kicked off my web development journey on January 1st last year, and I've been loving every moment of it! Excited about creating awesome things on the web.</p>
            </div>
            <div className="roundtext">
                <img src={text} />
                {/* <p>you write the future</p> */}
            </div>
        </div>
    )
}

export default Hero