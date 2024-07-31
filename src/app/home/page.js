"use client";

import React from 'react';
import "../../styles/Home.scss";
import { Typewriter } from 'react-simple-typewriter';
import FetchAOS from "../../utils/FetchAOS";
import { DOCUMENT } from '../../story/DOCUMENT';
import THL from "../../../public/avatar.jpg";
import Image from 'next/image';
import Link from 'next/link';
import { FaBackward, FaFacebook, FaGithub, FaEnvelope } from "react-icons/fa";

const Page = () => {
    const gettingStarted = (e) => {
        const x = e.pageX - e.target.offsetLeft
        const y = e.pageY - e.target.offsetTop

        e.target.style.setProperty('--x', `${x}px`)
        e.target.style.setProperty('--y', `${y}px`)
    }
    FetchAOS();
    return (
        <div className='Home'>
            <nav className='Home-navbar' data-aos="fade-up">
                <div style={{overflow:"hidden", borderRadius: "100vh", width: "50px", height: "50px", border: "2px solid red"}}>
                    <Image src={THL} alt='avatar' />
                </div>
                <ul>
                    <li title='Menu'><Link href="/"><FaBackward /></Link></li>
                    <li title='Facebook' ><Link href='https://web.facebook.com/profile.php?id=61551727813662'><FaFacebook /></Link></li>
                    <li title='Github'><Link href='https://github.com/TruongHoaiLinh3103'><FaGithub /></Link></li>
                    <li title='Email'><Link href='mailto:truonghoailinh3103@gmail.com'><FaEnvelope /></Link></li>
                </ul>
            </nav>
            {DOCUMENT.map((item) => {
                return(
                    <section className='Home-section' key={item.id}>
                        <div className='Home-section-item' data-aos="fade-right">
                            <h3>A Frontend Developer that creates free quality content.</h3>
                            <h3>I,m <Typewriter
                                cursor
                                loop
                                cursorStyle= "|"
                                cursorColor='red'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                words={["Truong Hoai Linh.", "Mavuika Anikey.", "Thuy Tuy Thien Khu."]}
                            /></h3>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <a href="https://truonghoailinh3103.github.io/AboutMe"><button className="botao__cor__perseguida" onMouseMove={(e) => gettingStarted(e)}>
                                    <span>See CV page</span>
                                </button></a>
                                <a href={item.imgCV.src} download="Trương Hoài Linh"><button className="botao__cor__perseguida dowloadCV" onMouseMove={(e) => gettingStarted(e)}>
                                    <span>Dowload CV</span>
                                </button></a>
                            </div>
                        </div>
                        <div className='Home-section-video' data-aos="fade-left">
                            <video autoPlay loop muted>
                                <source src={item.video} type="video/mp4" />
                            </video>
                        </div>
                    </section>
                )
            })}
        </div>
    );
};

export default Page;