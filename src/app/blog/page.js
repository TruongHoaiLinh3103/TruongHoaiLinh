"use client";

import React from 'react';
import '../../styles/Blog.scss';
import FetchLoading from "../../utils/FetchLoading";
import FetchAOS from "../../utils/FetchAOS";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Typewriter } from 'react-simple-typewriter';
import { DETAIL } from "../../story/DETAIL"
import { FaBackward, FaAddressCard, FaBible , FaFileContract } from "react-icons/fa";

const Page = () => {
    const {check} = FetchLoading();
    FetchAOS();
    const [number, setNumber] = useState(1);
    const router = useRouter();
    return (
        <>
            {check ? (
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center'}}>
                <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
                    <div className="wheel"></div>
                    <div className="hamster">
                        <div className="hamster__body">
                        <div className="hamster__head">
                            <div className="hamster__ear"></div>
                            <div className="hamster__eye"></div>
                            <div className="hamster__nose"></div>
                        </div>
                        <div className="hamster__limb hamster__limb--fr"></div>
                        <div className="hamster__limb hamster__limb--fl"></div>
                        <div className="hamster__limb hamster__limb--br"></div>
                        <div className="hamster__limb hamster__limb--bl"></div>
                        <div className="hamster__tail"></div>
                        </div>
                    </div>
                    <div className="spoke"></div>
                </div>
            <h3 className="title-loading" data-aos="fade-up">Starting up, please wait a moment!...</h3>
            </div>
            ):
            (
            <div className='Box'>
                <div>
                    <div className="conteudo__geral">
                        <div className="elemento__fotos elemento__1" onClick={() => setNumber(1)}>
                            <Typewriter
                                cursor
                                loop
                                cursorStyle= "|"
                                cursorColor='black'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                words={["Game"]}
                            />
                        </div>
                        
                        <div className="elemento__fotos elemento__2" onClick={() => setNumber(2)}></div>

                        <div className="elemento__fotos elemento__3">
                            <div className="titulo__inicial">Hover Me!</div>
                        </div>

                        <div className="elemento__fotos elemento__4" onClick={() => setNumber(3)}></div>

                        <div className="elemento__fotos elemento__5" onClick={() => setNumber(4)}>
                            <Typewriter
                                cursor
                                loop
                                cursorStyle= "|"
                                cursorColor='black'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                words={["Sport"]}
                            />
                        </div>
                    </div>
                </div>
                <div className='Box-message'>
                    {number === 1 &&
                        <div className='Box-message-item' data-aos="fade-up">
                            {DETAIL.map((item) => {
                                return(
                                    <div key={item.id}>
                                        { item.id < 6 && 
                                            <div className='Box-item_img-cover' onClick={() => router.push(item.img)}>
                                                <img src={item.img} alt={item.name}/>
                                            </div>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    }
                    {number === 2 &&
                        <div className='Box-message-item' data-aos="fade-up">
                            {DETAIL.map((item) => {
                                return(
                                    <div key={item.id}>
                                        {item.id > 5 && item.id < 11 &&
                                            <div className='Box-item_img-cover' onClick={() => router.push(item.img)}>
                                                <img src={item.img} alt={item.name}/>
                                            </div>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    }
                    {number === 3 &&
                        <div className='Box-message-item' data-aos="fade-up">
                            {DETAIL.map((item) => {
                                return(
                                    <div key={item.id}>
                                        {item.id > 10 && item.id < 16 && 
                                            <div className='Box-item_img-cover' onClick={() => router.push(item.img)}>
                                                <img src={item.img} alt={item.name}/>
                                            </div>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    }
                    {number === 4 &&
                        <div className='Box-message-item' data-aos="fade-up">
                            {DETAIL.map((item) => {
                                return(
                                    <div key={item.id}>
                                        {item.id > 15 &&
                                            <div className='Box-item_img-cover' onClick={() => router.push(item.img)}>
                                                <img src={item.img} alt={item.name}/>
                                            </div>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div>
                <ul style={{margin: "20px 20px 0px"}}>
                    <li title='Menu' onClick={() => {router.push("/")}}><FaBackward /></li>
                    <li title='Blog' onClick={() => {router.push("/about")}}><FaAddressCard /></li>
                    <li title='Project' onClick={() => {router.push("/project")}}><FaBible /></li>
                    <li title='Contact' onClick={() => {router.push("/contact")}}><FaFileContract /></li>
                </ul>
            </div>
            )
            }
        </>
    );
};

export default Page;
