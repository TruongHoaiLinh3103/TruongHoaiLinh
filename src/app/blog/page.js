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
import { SUPORT } from '../../story/SUPORT';
import { DETAIL } from "../../story/DETAIL"
import { FaKey  } from "react-icons/fa";
import { FaBackward, FaAddressCard, FaBible , FaFileContract } from "react-icons/fa";
import DOMPurify from 'dompurify';
import { VIDEOBALISONG } from '@/story/VIDEOBALISONG';

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
    const numberFive = () => {
        setNumber(5)
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
                        
                        <div className="elemento__fotos elemento__2" onClick={() => numberTwo()}></div>

                        <div className="elemento__fotos elemento__3" onClick={() => numberThree()}>
                            <div className="titulo__inicial">Hover Me!</div>
                        </div>

                        <div className="elemento__fotos elemento__4" onClick={() => numberFour()}></div>

                        <div className="elemento__fotos elemento__5" onClick={() => numberFive()}>
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
                            {SUPORT.map((item) => {
                                return(
                                    <div key={item.id}>
                                        {item.id < 5 && 
                                            <div className='Box-item_img-cover'>
                                                <img src={item.img} alt={item.name} />
                                            </div>
                                        }
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
                                <>
                                    <div style={{display: 'grid', gridTemplateColumns: "30% 70%"}}>
                                        <div style={{margin: "0px auto"}}>
                                            <Typewriter
                                                cursor
                                                loop
                                                cursorStyle= "|"
                                                cursorColor='black'
                                                typeSpeed={70}
                                                deleteSpeed={50}
                                                delaySpeed={1000}
                                                words={["WIND"]}
                                            />
                                        </div>
                                        <div>
                                            <img style={{width: "100%", height: "100%", objectFit: "cover"}} src="https://i.pinimg.com/originals/9b/a4/65/9ba465f1d0f1e7581f3aafe8b78fac19.png" alt="Wind" />
                                        </div>
                                    </div>
                                    <div className='Box-message-item'>
                                        <div className='Box-item_content-cover'>
                                            <h3>Diện</h3>
                                            <select>
                                                <option>Diện cầu</option>
                                                <option>Diện lộ</option>
                                                <option>Diện thượng đơn</option>
                                                <option>Diện giật phong</option>
                                                <option>Diện chia thượng</option>
                                                <option>Diện loạn khôi</option>
                                            </select>
                                        </div>
                                        <div className='Box-item_content-cover'>
                                            <h3>Ẩn</h3>
                                            <select>
                                                <option>Ẩn son</option>
                                                <option>Ẩn tráo</option>
                                                <option>Ẩn như</option>
                                                <option>Ẩn chia hạ</option>
                                                <option>Ẩn đôi</option>
                                                <option>Ẩn loạn thượng đơn</option>
                                                <option>Ẩn loạn thượng hạ song</option>
                                                <option>Ẩn như phật tiền</option>
                                                <option>Ẩn đả địa</option>
                                            </select>
                                        </div>
                                        <div className='Box-item_content-cover'>
                                            <h3>Ảo</h3>
                                            <select>
                                                <option>Ảo danh nhị</option>
                                                <option>Ảo danh nhất</option>
                                                <option>Ảo phi khống</option>
                                                <option>Ảo lưỡng nghi</option>
                                                <option>Ảo tam chỉ</option>
                                                <option>Ảo trảm danh ngũ</option>
                                                <option>Ảo trảm danh nhị</option>
                                                <option>Ảo trảm thượng đơn hạ hạ</option>
                                                <option>Ảo trảm giả ẩn son</option>
                                                <option>Ảo kiếp phù du</option>
                                            </select>
                                        </div>
                                        <div className='Box-item_content-cover'>
                                            <h3>Thao</h3>
                                            <select>
                                                <option>Thao nhập song tứ</option>
                                                <option>Thao nhập thượng ngũ tam</option>
                                                <option>Thao nhập thượng hạ tứ tam</option>
                                                <option>Thao nhập tam nhị tam</option>
                                                <option>Thao nhập hạ song tam</option>
                                                <option>Thao thâu thượng</option>
                                                <option>Thao thâu hạ</option>
                                                <option>Thao thâu thượng đơn</option>
                                                <option>Thao thâu số trong</option>
                                                <option>Thao thâu chuẩn</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='Box-message-item'>
                                        {DETAIL.map((item) => {
                                            return(
                                                <div key={item.id}>
                                                    {item.id < 5 && 
                                                        <div className='Box-item_img-cover'>
                                                            <img src={item.img} alt={item.name} />
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className='Box-message-item'>
                                        {DETAIL.map((item) => {
                                            return(
                                                <div key={item.id}>
                                                    {item.id > 4 && item.id < 9 &&
                                                        <div className='Box-item_img-cover'>
                                                            <img src={item.img} alt={item.name} />
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div style={{display: 'grid', gridTemplateColumns: "30% 70%"}}>
                                        <div style={{margin: "0px auto"}}>
                                            <Typewriter
                                                cursor
                                                loop
                                                cursorStyle= "|"
                                                cursorColor='black'
                                                typeSpeed={70}
                                                deleteSpeed={50}
                                                delaySpeed={1000}
                                                words={["DARK"]}
                                            />
                                        </div>
                                        <div>
                                            <img style={{width: "100%", height: "100%", objectFit: "cover"}} src="https://i.pinimg.com/originals/6b/58/be/6b58bef34530f2eded32552133c826a5.png" alt="Dark" />
                                        </div>
                                    </div>
                                    <div className='Box-message-item'>
                                        {VIDEOBALISONG.map((item) => {
                                            return(
                                                <div className='Box-item_img-cover' key={item.id}>
                                                    <video controls style={{width: "100%", height: "100%"}}>
                                                        <source src={item.video} type="video/mp4" />
                                                    </video>
                                                </div>
                                            )
                                        })
                                        }
                                        
                                    </div>
                                    <div className='Box-message-item'>
                                        {DETAIL.map((item) => {
                                            return(
                                                <div key={item.id}>
                                                    { item.id > 8 && item.id < 13 && 
                                                        <div className='Box-item_img-cover'>
                                                            <img src={item.img} alt={item.name} />
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className='Box-message-item'>
                                        {DETAIL.map((item) => {
                                            return(
                                                <div key={item.id}>
                                                    {item.id > 12 &&
                                                        <div className='Box-item_img-cover'>
                                                            <img src={item.img} alt={item.name} />
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                </>
                            }
                        </>
                    }
                    {number === 4 &&
                        <div className='Box-message-item' data-aos="fade-up">
                            {SUPORT.map((item) => {
                                return(
                                    <div key={item.id}>
                                        {item.id > 4 && 
                                            <div className='Box-item_img-cover'>
                                                <img src={item.img} alt={item.name} />
                                            </div>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    }
                    {number === 5 &&
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