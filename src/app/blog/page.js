"use client";

import React from 'react';
import '../../styles/Blog.scss';
import FetchLoading from "../../utils/FetchLoading";
import FetchAOS from "../../utils/FetchAOS";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Typewriter } from 'react-simple-typewriter';
import { WEBSITE } from '../../story/WEBSITE';
import { GAME } from '../../story/GAME';
import { BLOCK } from '../../story/BLOCK';
import { FaKey  } from "react-icons/fa";
import { FaBackward, FaAddressCard, FaBible , FaFileContract } from "react-icons/fa";
import DOMPurify from 'dompurify';

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
    const detailContent = (contents) => {
        const htmlSanatized = DOMPurify.sanitize(contents);
        return htmlSanatized;
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
                                words={["Game"]}
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
                                words={["Block"]}
                            />
                        </div>
                        <div className="elemento__fotos elemento__3" onClick={() => numberThree()}>
                            <div className="titulo__inicial">Hover Me!</div>
                        </div>
                        <div className="elemento__fotos elemento__4">
                            <Typewriter
                                cursor
                                loop
                                cursorStyle= "|"
                                cursorColor='black'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                words={["Card"]}
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
                                words={["Website"]}
                            />
                        </div>
                    </div>
                </div>
                <div className='Box-message'>
                    {number === 1 &&
                        <div className='Box-message-item' data-aos="fade-up">
                            {GAME.map((item) => {
                                return(
                                    <div key={item.id} className='Box-item_img-cover'>
                                        <img src={item.img} alt={item.name} onClick={() => openModal(item)}/>
                                    </div>
                                )
                            })}
                        </div>
                    }
                    {number === 2 &&
                        <div className='Box-message-item' data-aos="fade-up">
                            {BLOCK.map((item) => {
                                return(
                                    <div key={item.id} className='Box-item_img-cover'>
                                        <img src={item.img} alt={item.name} />
                                    </div>
                                )
                            })}
                        </div>
                    }
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
                                    <FaKey /></button>
                                </div>
                            </div>
                            {open && 
                                <div className='Box-message-item' data-aos="fade-up">
                                    <div className='Box-item_img-cover'>
                                        <h3>Diện</h3>
                                        <div>
                                            <p>Diện cầu</p>
                                            <p>Diện lộ</p>
                                            <p>Hạ diện nguyên</p>
                                            <p>Thượng diện đơn</p>
                                            <p>Diện giật phong</p>
                                        </div>
                                    </div>
                                    <div className='Box-item_img-cover'>
                                        <h3>Ẩn</h3>
                                        <div>
                                            <p>Ẩn son</p>
                                            <p>Ẩn tráo</p>
                                            <p>Ẩn như</p>
                                            <p>Ẩn phi hạ</p>
                                            <p>Ẩn phi thượng</p>
                                        </div>
                                    </div>
                                    <div className='Box-item_img-cover'>
                                        <h3>Ảo</h3>
                                        <div>
                                            <p>Ảo danh nhị</p>
                                            <p>Ảo danh nhất</p>
                                            <p>Ảo phi khống</p>
                                            <p>Ảo lưỡng nghi</p>
                                            <p>Ảo tam chỉ</p>
                                        </div>
                                    </div>
                                    <div className='Box-item_img-cover'>
                                        <h3>Trảm</h3>
                                        <div>
                                            <p>Trảm danh ngũ</p>
                                            <p>Trảm danh nhị</p>
                                            <p>Trảm song thủ</p>
                                            <p>Trảm thượng đơn hạ hạ</p>
                                            <p>Trảm giả ẩn son</p>
                                        </div>
                                    </div>
                                    <div className='Box-item_img-cover'>
                                        <h3>Loạn</h3>
                                        <div>
                                            <p>Loạn thượng đơn</p>
                                            <p>Loạn song thượng hạ đơn</p>
                                            <p>Loạn phôi</p>
                                            <p>Hóa kiếp phù du</p>
                                            <p>Loạn như phật tiền</p>
                                        </div>
                                    </div>
                                    <div className='Box-item_img-cover'>
                                        <h3>Nhị</h3>
                                        <div>
                                            <p>Song tứ |///|///.../</p>
                                            <p>Thượng ngũ tam ||///.../</p>
                                            <p>Thượng hạ tứ tam |///.../|</p>
                                            <p>Tam nhị tam ///||///.../</p>
                                            <p>Hạ song tam ///.../||</p>
                                        </div>
                                    </div>
                                    <div className='Box-item_img-cover'>
                                        <h3>Thâu</h3>
                                        <div>
                                            <p>Thâu thượng ||///.../</p>
                                            <p>Thâu hạ ///.../||</p>
                                            <p>Thâu thượng đơn |///.../(|)</p>
                                            <p>Thâu số nhị ///||///.../</p>
                                            <p>Thâu chuẩn ///|///|///.../</p>
                                        </div>
                                    </div>
                                </div>
                            }
                        </>
                    }
                    {number === 4 &&
                        <div className='Box-message-item' data-aos="fade-up">
                            {WEBSITE.map((item) => {
                                return(
                                    <div key={item.id} className='Box-item_img-cover'>
                                        <img src={item.img} alt="website"/>
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
                <div className='modal' style={{display: modal ? "flex" : "none"}}>
                    {number === 1 &&
                    <div className='box'>
                        {GAME.map((item) => {
                            return(
                                id === item.id &&
                                <form key={item.id}>
                                    <div>
                                        <img src={item.img} alt={item.name} />
                                    </div>
                                    <div>
                                        <input type='text' defaultValue={item.name} disabled/>
                                    </div>
                                    <div dangerouslySetInnerHTML={{__html: detailContent(item.text)}}></div>
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