import React, { useEffect, useRef } from 'react'
import text from '../assets/Screenshot_2023-12-09_203323-removebg-preview.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const textRef = useRef(null)
    const parRef = useRef(null)
    const roundRef = useRef(null)

    useEffect(() => {
        gsap.from(textRef.current, {
            translateX: '-1000px',
            duration: 1.1,
            opacity: 0,
            ease:'power3.in',
        })

        gsap.from(parRef.current , {
            translateX: '1000px',
            duration: 1.1,
            opacity: 0,
            ease: 'power3.in',
        })

        gsap.from(roundRef.current , {
            duration: 2,
            opacity: 0,
            ease: 'power3.in',
        })
    })
    return (
        <div className='Hero'>
            <div ref={textRef} className="left">
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
            <div ref={parRef} className="right">
                <p>_________ <br />
                    Hey there! I'm Anush, a 17-year-old web developer from Yerevan, Armenia. I kicked off my web development journey on January 1st last year, and I've been loving every moment of it! Excited about creating awesome things on the web.</p>
            </div>
            <div ref={roundRef} className="roundtext">
                <img src={text} />
            </div>
        </div>
    )
}

export default Hero