import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
    const navbarRef = useRef(null)

    useEffect(() => {
        gsap.from(navbarRef.current, {
            translateY: '-100px',
            duration: 1.1,
            opacity: 0,
        })
    })
    return (
        <nav ref={navbarRef} className='Navbar'>
            <ul>
                <a href="/#Skills"><li>Skills</li></a>
                <a href="/#Projects"><li>Projects</li></a>
                <a href="/#Footer"><li>Contacts</li></a>
            </ul>
        </nav>
    )
}

export default Navbar