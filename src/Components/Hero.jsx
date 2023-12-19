import React, { useState , useEffect, useRef } from 'react'
import text from '../assets/Screenshot_2023-12-09_203323-removebg-preview.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const textRef = useRef(null)
    const parRef = useRef(null)
    const roundRef = useRef(null)
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {

            gsap.from(textRef.current, {
                translateX: '-1000px',
                duration: 1.1,
                opacity: 0,
                ease: 'power3.in',
            })

            gsap.from(parRef.current, {
                translateX: '1000px',
                duration: 1.1,
                opacity: 0,
                ease: 'power3.in',
            })

            gsap.from(roundRef.current, {
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
                            <a href="https://github.com/elizbaryananush">github</a>
                        </li>
                        <li>
                            <a href="https://wa.me/+37477838224">whatsapp</a>
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
            <a href="#Skills">
                <div className="coursor">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <g clip-path="url(#clip0_29_138)">
                            <path d="M16.0417 30.625V33.5417C16.0417 33.9284 16.1953 34.2994 16.4688 34.5729C16.7423 34.8464 17.1132 35 17.5 35C17.8868 35 18.2577 34.8464 18.5312 34.5729C18.8047 34.2994 18.9583 33.9284 18.9583 33.5417V30.625C21.6648 30.6219 24.2595 29.5454 26.1733 27.6316C28.0871 25.7179 29.1636 23.1231 29.1667 20.4167V11.6667C29.1667 8.57247 27.9375 5.60501 25.7496 3.41709C23.5616 1.22916 20.5942 0 17.5 0C14.4058 0 11.4383 1.22916 9.25041 3.41709C7.06249 5.60501 5.83332 8.57247 5.83332 11.6667V20.4167C5.83641 23.1231 6.91292 25.7179 8.82669 27.6316C10.7405 29.5454 13.3352 30.6219 16.0417 30.625ZM8.74999 11.6667C8.74999 9.34602 9.67186 7.12042 11.3128 5.47948C12.9537 3.83854 15.1793 2.91666 17.5 2.91666C19.8206 2.91666 22.0462 3.83854 23.6872 5.47948C25.3281 7.12042 26.25 9.34602 26.25 11.6667L26.25 20.4167C26.2477 22.3498 25.4787 24.2031 24.1118 25.5701C22.7448 26.937 20.8915 27.706 18.9583 27.7083H16.0417C14.1085 27.706 12.2552 26.937 10.8882 25.5701C9.52128 24.2031 8.75231 22.3498 8.74999 20.4167V11.6667Z" fill="black" />
                            <path d="M17.5 24.793C17.8868 24.793 18.2577 24.6393 18.5312 24.3658C18.8047 24.0923 18.9583 23.7214 18.9583 23.3346V20.418C18.9583 20.0312 18.8047 19.6603 18.5312 19.3868C18.2577 19.1133 17.8868 18.9596 17.5 18.9596C17.1132 18.9596 16.7423 19.1133 16.4688 19.3868C16.1953 19.6603 16.0417 20.0312 16.0417 20.418V23.3346C16.0417 23.7214 16.1953 24.0923 16.4688 24.3658C16.7423 24.6393 17.1132 24.793 17.5 24.793Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_29_138">
                                <rect width="35" height="35" fill="white" transform="matrix(-1 0 0 -1 35 35)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.763 3.75C12.5104 3.75 12.2577 3.84605 12.065 4.03882L7.49984 8.60461L2.93471 4.03882C2.54918 3.65395 1.92418 3.65395 1.53865 4.03882C1.15378 4.42434 1.15378 5.04934 1.53865 5.43487L6.80182 10.698C7.18734 11.0829 7.81234 11.0829 8.19787 10.698L13.461 5.43487C13.8459 5.04934 13.8459 4.42434 13.461 4.03882C13.2683 3.84605 13.0156 3.75 12.763 3.75Z" fill="black" />
                    </svg>
                </div>
            </a>
        </div>
    )
}

export default Hero
