import React, { useState , useEffect, useRef } from 'react'
import image1 from '../assets/html.png'
import image2 from '../assets/css.png'
import image3 from '../assets/javascript.png'
import image4 from '../assets/react.png'
import image5 from '../assets/git.png'
import image6 from '../assets/inchvoraya.png'
import image7 from '../assets/mongodb.png'
import image8 from '../assets/node.png'
import { Tilt } from 'react-tilt'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Skills() {
    const headingRef = useRef(null)
    const cardsRef = useRef(null)
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {

        if (size > 900) {
            gsap.from(headingRef.current, {
                translateX: '-1000px',
                duration: 1.1,
                opacity: 0,
                ease: 'power3.in',
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top-=700px',
                    end: 'bottom center',
                    toggleActions: 'play none none none',
                },
            })

            gsap.from(cardsRef.current, {
                duration: 1.5,
                opacity: 0,
                ease: 'power3.in',
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: 'top-=700px',
                    end: 'bottom center',
                    toggleActions: 'play none none none',
                },
            })
        }
    }, [])
    return (
        <div className='Skills' id='Skills'>
            <h1 ref={headingRef}>My skills</h1>
            <div ref={cardsRef} className="cards">
                <Tilt className="card" options={{ max: 50, scale: 1 }}>
                    <div className="background2">
                        <div className="item2"></div>
                        <div className="item2"></div>
                    </div>
                    <img src={image1} alt="" />
                </Tilt>
                <Tilt className="card" options={{ max: 50, scale: 1 }}>
                    <div className="background2">
                        <div className="item2"></div>
                        <div className="item2"></div>
                    </div>
                    <img src={image2} alt="" />
                </Tilt>
                <Tilt className="card" options={{ max: 50, scale: 1 }}>
                    <div className="background2">
                        <div className="item2"></div>
                        <div className="item2"></div>
                    </div>
                    <img src={image3} alt="" />
                </Tilt>
                <Tilt className="card" options={{ max: 50, scale: 1 }}>
                    <div className="background2">
                        <div className="item2"></div>
                        <div className="item2"></div>
                    </div>
                    <img src={image4} alt="" />
                </Tilt>
                <Tilt className="card" options={{ max: 50, scale: 1 }}>
                    <div className="background2">
                        <div className="item2"></div>
                        <div className="item2"></div>
                    </div>
                    <img src={image5} alt="" />
                </Tilt>
                <Tilt className="card" options={{ max: 50, scale: 1 }}>
                    <div className="background2">
                        <div className="item2"></div>
                        <div className="item2"></div>
                    </div>
                    <img src={image6} alt="" />
                </Tilt>
                <Tilt className="card" options={{ max: 50, scale: 1 }}>
                    <div className="background2">
                        <div className="item2"></div>
                        <div className="item2"></div>
                    </div>
                    <img src={image7} alt="" />
                </Tilt>
                <Tilt className="card" options={{ max: 50, scale: 1 }}>
                    <div className="background2">
                        <div className="item2"></div>
                        <div className="item2"></div>
                    </div>
                    <img src={image8} alt="" />
                </Tilt>
            </div>
        </div>
    )
}

export default Skills