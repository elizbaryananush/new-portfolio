import React from 'react'
import yourbank from '../assets/yourBank.png'
import plantshop from '../assets/plantshop.png'
import movie from '../assets/movie.png'

function Projects() {
    return (
        <div className='Projects' id='Projects'>
            <div className="background3">
                <div className="item3"></div>
                <div className="item3"></div>
                <div className="item3"></div>
                <div className="item3"></div>
                <div className="item3"></div>
            </div>
            <div className="heading">
                <h1>Projects</h1>
                <p>Hey there! Welcome to my little portfolio world, where I've poured heart and soul into this adorable projects. From cute designs to clever solutions, it's a snug spot with a lot of heart. This trio is just the start of the fun—more cozy projects coming your way soon!</p>
            </div>
            <div className="grid">
                <div className="box">
                    <img src={yourbank} alt="" />
                    <div className="text">
                        <p className="heading">YourBanK</p>
                        <p>In this project, I set out to create a <span>visually engaging and user-friendly</span> design for a modern banking website. The primary objective was to blend functionality with an intuitive and aesthetically pleasing interface to enhance the user experience . Figma template you can see <span><a href="https://www.figma.com/file/ILPQaZR1CWVtCSlqmZulQu/Banking-Company-Website-UI-Template-Design-in-Dark-Theme-(-FREE-Editable-)-(Community)?mode=dev" target='_blank'>here</a></span>.</p>
                        <div onClick={() => {
                            window.location.href = 'https://yourbankae.vercel.app/'
                        }} className="button"> <p>View</p> <span>
                                <svg xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.88153 12.6302C3.88153 12.3776 3.97758 12.1249 4.17035 11.9322L8.73614 7.36703L4.17035 2.80189C3.78548 2.41637 3.78548 1.79137 4.17035 1.40584C4.55587 1.02097 5.18087 1.02097 5.5664 1.40584L10.8296 6.669C11.2144 7.05453 11.2144 7.67953 10.8296 8.06506L5.5664 13.3282C5.18087 13.7131 4.55587 13.7131 4.17035 13.3282C3.97758 13.1355 3.88153 12.8828 3.88153 12.6302Z" />
                                </svg>
                            </span></div>
                    </div>
                </div>
                <div className="box">
                    <div className="text">
                        <p className="heading">Plantarium</p>
                        <p>For this project, I embarked on the development of a vibrant and functional Plant Shop website <span>using React and Redux</span>. The primary goal was to create a seamless and enjoyable online shopping experience for plant enthusiasts,.</p>
                        <div onClick={() => {
                            window.location.href = 'https://plantarium.vercel.app/'
                        }} className="button"> <p>View</p> <span>
                                <svg xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.88153 12.6302C3.88153 12.3776 3.97758 12.1249 4.17035 11.9322L8.73614 7.36703L4.17035 2.80189C3.78548 2.41637 3.78548 1.79137 4.17035 1.40584C4.55587 1.02097 5.18087 1.02097 5.5664 1.40584L10.8296 6.669C11.2144 7.05453 11.2144 7.67953 10.8296 8.06506L5.5664 13.3282C5.18087 13.7131 4.55587 13.7131 4.17035 13.3282C3.97758 13.1355 3.88153 12.8828 3.88153 12.6302Z" />
                                </svg>
                            </span></div>
                    </div>
                    <img src={plantshop} alt="" />
                </div>
                <div className="box">
                    <img src={movie} alt="" />
                    <div className="text">
                        <p className="heading">MovieMingle</p>
                        <p>In this project, I endeavored to create a dynamic and engaging movie website by <span>leveraging the power of APIs</span> . The primary objective was to provide users with a seamless and immersive experience, allowing them to discover, explore, and obtain information about a vast array of movies.</p>
                        <div onClick={() => {
                            window.location.href = 'https://moviemingleae.vercel.app/'
                        }} className="button"> <p>View</p> <span>
                                <svg xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.88153 12.6302C3.88153 12.3776 3.97758 12.1249 4.17035 11.9322L8.73614 7.36703L4.17035 2.80189C3.78548 2.41637 3.78548 1.79137 4.17035 1.40584C4.55587 1.02097 5.18087 1.02097 5.5664 1.40584L10.8296 6.669C11.2144 7.05453 11.2144 7.67953 10.8296 8.06506L5.5664 13.3282C5.18087 13.7131 4.55587 13.7131 4.17035 13.3282C3.97758 13.1355 3.88153 12.8828 3.88153 12.6302Z" />
                                </svg>
                            </span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects