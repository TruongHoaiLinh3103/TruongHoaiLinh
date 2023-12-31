"use client";

import React from 'react';
import '../../styles/Blog.scss';
import FetchLoading from "../../utils/FetchLoading";
import FetchAOS from "../../utils/FetchAOS";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Typewriter } from 'react-simple-typewriter';
import { READSTORY } from '../../story/READSTORY';
import { GAME } from '../../story/GAME';
import { FOOD } from '../../story/FOOD';
import { HOBBY } from '../../story/HOBBY';
import { FaKey  } from "react-icons/fa";
import { FaBackward, FaAddressCard, FaBible , FaFileContract } from "react-icons/fa";

const Page = () => {
    const {check} = FetchLoading();
    const [modal, setModal] = useState(false);
    FetchAOS();
    const [number, setNumber] = useState(1);
    const router = useRouter();
    const [pass, setPass] = useState("");
    const [open, setOpen] = useState(false);
    const [id, setID] = useState(0)
    const numberOne = () => {
        setNumber(1)
    }
    const numberTwo = () => {
        setNumber(2)
    }
    const numberThree = () => {
        setNumber(3)
    }
    const numberFour = () => {
        setNumber(4)
    }
    const openModal = (item) => {
        setID(item.id)
        setModal(true);
    }
    const closeModal = () => {
        setID(0)
        setModal(false);
    }
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
                        <div className="elemento__fotos elemento__1" onClick={() => numberOne()}>
                            <Typewriter
                                cursor
                                loop
                                cursorStyle= "|"
                                cursorColor='black'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                words={["Comic"]}
                            />
                        </div>
                        <div className="elemento__fotos elemento__2" onClick={() => numberTwo()}>
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
                        <div className="elemento__fotos elemento__3">
                            <div className="titulo__inicial">Hover Me!</div>
                        </div>
                        <div className="elemento__fotos elemento__4" onClick={() => numberThree()}>
                            <Typewriter
                                cursor
                                loop
                                cursorStyle= "|"
                                cursorColor='black'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                words={["Cooking"]}
                            />
                        </div>
                        <div className="elemento__fotos elemento__5" onClick={() => numberFour()}>
                            <Typewriter
                                cursor
                                loop
                                cursorStyle= "|"
                                cursorColor='black'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                words={["Calligraphy"]}
                            />
                        </div>
                    </div>
                </div>
                <div className='Box-message'>
                    {number === 1 &&
                    <div className='Box-message-item' data-aos="fade-up">
                        {READSTORY.map((item) => {
                            return(
                                <div key={item.id} className='Box-item_img-cover'>
                                    <img src={item.img} alt={item.name} onClick={() => openModal(item)}/>
                                </div>
                            )
                        })}
                    </div>}
                    {number === 2 &&
                    <div className='Box-message-item' data-aos="fade-up">
                        {GAME.map((item) => {
                            return(
                                <div key={item.id} className='Box-item_img-cover'>
                                    <img src={item.img} alt={item.name} onClick={() => openModal(item)}/>
                                </div>
                            )
                        })}
                    </div>}
                    {number === 3 &&
                        <>
                            <div className='Box-message-input' style={{display: !open ? "flex" : "none"}} data-aos="fade-up">
                                <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                                    <input type='password' onChange={(e) => {setPass(e.target.value)}} 
                                    value={pass} placeholder='Password (ADMIN)' 
                                    style={{padding: "10px", border: "3px solid black", fontSize: "15px"}}/>
                                    <button 
                                    style={{padding: "10px", backgroundColor:"black", color: "white", border: "3px solid white", fontSize: "15px", marginTop: "20px"}} 
                                    onClick={() => {pass==="Ahkoeptr3103?" ? setOpen(true): alert("Muốn biết à :)), Đừng nghĩ nhiểu!")}}>
                                    <FaKey  /></button>
                                </div>
                            </div>
                            {open && 
                                <div className='Box-message-item' data-aos="fade-up">
                                    {FOOD.map((item) => {
                                        return(
                                            <div key={item.id} className='Box-item_img-cover'>
                                                <img src={item.img} alt={item.name} onClick={() => openModal(item)}/>
                                            </div>
                                        )
                                    })}
                                </div>
                            }
                        </>
                    }
                    {number === 4 &&
                    <div className='Box-message-item' data-aos="fade-up">
                        {HOBBY.map((item) => {
                            return(
                                <div key={item.id} className='Box-item_img-cover'>
                                    <img src={item.img} alt='Calligraphy' onClick={() => openModal(item)}/>
                                </div>
                            )
                        })}
                    </div>}
                </div>
                <ul style={{margin: "20px 20px 0px"}}>
                    <li title='Menu' onClick={() => {router.push("/")}}><FaBackward /></li>
                    <li title='Blog' onClick={() => {router.push("/about")}}><FaAddressCard /></li>
                    <li title='Project' onClick={() => {router.push("/project")}}><FaBible /></li>
                    <li title='Contact' onClick={() => {router.push("/contact")}}><FaFileContract /></li>
                </ul>
                <div className='modal' style={{display: modal ? "flex" : "none"}}>
                    {number === 1 &&
                    <div className='box'>
                        {READSTORY.map((item) => {
                            return(
                                id === item.id &&
                                <form key={item.id}>
                                    <div>
                                        <img src={item.img} alt={item.name} />
                                    </div>
                                    <div>
                                        <input type='text' defaultValue={item.name}/>
                                    </div>
                                </form>
                            )
                        })}
                        <div className='btn-form'>
                            <button onClick={() => closeModal()}>Close</button>
                        </div>
                    </div>}
                    {number === 2 &&
                    <div className='box'>
                        {GAME.map((item) => {
                            return(
                                id === item.id &&
                                <form key={item.id}>
                                    <div>
                                        <img src={item.img} alt={item.name} />
                                    </div>
                                    <div>
                                        <input type='text' defaultValue={item.name}/>
                                    </div>
                                </form>
                            )
                        })}
                        <div className='btn-form'>
                            <button onClick={() => closeModal()}>Close</button>
                        </div>
                    </div>}
                    {number === 3 &&
                    <div className='box'>
                        {FOOD.map((item) => {
                            return(
                                id === item.id &&
                                <form key={item.id}>
                                    <div>
                                        <img src={item.img} alt={item.name} />
                                    </div>
                                    <div>
                                        <input type='text' defaultValue={item.name}/>
                                    </div>
                                </form>
                            )
                        })}
                        <div className='btn-form'>
                            <button onClick={() => closeModal()}>Close</button>
                        </div>
                    </div>}
                    {number === 4 &&
                    <div className='box'>
                        {HOBBY.map((item) => {
                            return(
                                id === item.id &&
                                <form key={item.id}>
                                    <div>
                                        <img src={item.img} alt={item.name} />
                                    </div>
                                    <div>
                                        <input type='text' defaultValue={item.name}/>
                                    </div>
                                </form>
                            )
                        })}
                        <div className='btn-form'>
                            <button onClick={() => closeModal()}>Close</button>
                        </div>
                    </div>}
                </div>
            </div>
            )
            }
        </>
    );
};

export default Page;