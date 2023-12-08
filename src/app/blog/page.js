"use client";

import React from 'react';
import '../../styles/Blog.css';
import FetchLoading from "../../utils/FetchLoading";
import FetchAOS from "../../utils/FetchAOS";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Typewriter } from 'react-simple-typewriter';
import { READSTORY } from '../../story/READSTORY';
import { GAME } from '../../story/GAME';
import { FOOD } from '../../story/FOOD';
import { HOBBY } from '../../story/HOBBY';
import { FaSearch } from "react-icons/fa";

const Page = () => {
    const {check} = FetchLoading();
    FetchAOS();
    const [number, setNumber] = useState(1);
    const history = useRouter();
    const [pass, setPass] = useState("");
    const [open, setOpen] = useState(false);
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
    return (
        <div className="Blog">
            <header className="Blog-header">
                {check ? (
                <>
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
                </>
                ):
                (
                <div className='Box'>
                    <div>
                        <div className="conteudo__geral">
                            <div className="elemento__fotos elemento__1" onClick={() => numberOne()}>
                            </div>
                            <div className="elemento__fotos elemento__2" onClick={() => numberTwo()}>
                            </div>
                            <div className="elemento__fotos elemento__3" onClick={() => {history.push("/")}}>
                                <div className="titulo__inicial">Hover Me!</div>
                            </div>
                            <div className="elemento__fotos elemento__4" onClick={() => numberThree()}>
                            </div>
                            <div className="elemento__fotos elemento__5" onClick={() => numberFour()}>
                            </div>
                        </div>
                    </div>
                    <div className='Box-message'>
                        {number === 1 &&
                        <div className='Box-message-item'>
                            <h3 data-aos="fade-up">Truyện</h3>
                            <p data-aos="fade-up"><Typewriter
                                cursor
                                loop
                                cursorStyle= "|"
                                cursorColor='black'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                words={["Vạn tra triêu hoàng", 
                                "Thám tử lừng danh Conan", 
                                "Đại quản gia là ma hoàng", 
                                "Cổ chân nhân", 
                                "Người đưa thư vô hạn​", 
                                "Lưỡng bất nghi", 
                                "Dị thế tà quân", 
                                "Đường dần tại dị giới", 
                                "Bao Thanh Thiên", 
                                "Ta là tà đế", 
                                "Chàng rể mạnh nhất lịch sử", 
                                "Tâm ma", 
                                "Chuyển sinh vào thế giới võ lâm", 
                                "Trở Thành Thần Chủ Cthulhu",
                                "Yêu Thần Ký", 
                                "Đạo Quân", 
                                "Tung tiền hữu tọa Linh kiếm sơn", 
                                "Ta làm kiêu hùng tại dị giới", 
                                "Độc bộ thiên hạ", 
                                "Hoạn phi thiên hạ", 
                                "Vạn giới tiên tung", 
                                "Bậc thầy thiết kế điền trang",
                                "Đào mộ bút ký",
                                "Ma thổi đèn", 
                                "Tử thần Phiêu Nguyệt", 
                                "Ảo thuật", 
                                "Hoạn thư", 
                                "Content marketing", 
                                "Âm nhạc chữa lành", 
                                "Truyện ngắn"]}
                            /></p>
                            <div className='Box-item_img' data-aos="fade-up">
                                {READSTORY.map((item) => {
                                    return(
                                        <div key={item.id} className='Box-item_img-cover'>
                                            <img src={item.img} alt='' />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>}
                        {number === 2 &&
                        <div className='Box-message-item'>
                            <h3 data-aos="fade-up">Trò chơi</h3>
                            <p data-aos="fade-up"><Typewriter
                                cursor
                                loop
                                cursorStyle= "|"
                                cursorColor='black'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                words={["Liên quân"]}
                            /></p>
                            <div className='Box-item_img' data-aos="fade-up">
                                {GAME.map((item) => {
                                    return(
                                        <div key={item.id} className='Box-item_img-cover'>
                                            <img src={item.img} alt='' />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>}
                        {number === 3 &&
                        <div className='Box-message-item'>
                            <div style={{display: !open ? "flex" : "none", alignItems: "center"}}>
                                <input type='password' onChange={(e) => {setPass(e.target.value)}} 
                                value={pass} placeholder='Password (ADMIN)' 
                                style={{padding: "5px", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px"}}/>
                                <button 
                                style={{padding: "5px", backgroundColor:"black", color: "white", border: "1px solid white", borderTopRightRadius: "10px", borderBottomRightRadius: "10px"}} 
                                onClick={() => {pass==="Ahkoeptr3103?" ? setOpen(true): alert("Muốn biết à :)), Đừng nghĩ nhiểu!")}}>
                                <FaSearch /></button>
                            </div>
                            {open && 
                                <>
                                    <h3 data-aos="fade-up">Món ăn</h3>
                                    <p data-aos="fade-up"><Typewriter
                                        cursor
                                        loop
                                        cursorStyle= "|"
                                        cursorColor='black'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                        words={["Kịch độc"," Thức uống tự nhiên", "Thức ăn nướng", "Thức ăn gỏi, xào", "Thức ăn hấp"]}
                                    /></p>
                                    <div className='Box-item_img' data-aos="fade-up">
                                        {FOOD.map((item) => {
                                            return(
                                                <div key={item.id} className='Box-item_img-cover'>
                                                    <img src={item.img} alt='' />
                                                </div>
                                            )
                                        })}
                                    </div>
                                </>
                            }
                        </div>}
                        {number === 4 &&
                        <div className='Box-message-item'>
                            <h3 data-aos="fade-up">Đặc biệt</h3>
                            <p data-aos="fade-up"><Typewriter
                                cursor
                                loop
                                cursorStyle= "|"
                                cursorColor='black'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                words={["Thư pháp"]}
                            /></p>
                            <div className='Box-item_img' data-aos="fade-up">
                                {HOBBY.map((item) => {
                                    return(
                                        <div key={item.id} className='Box-item_img-cover'>
                                            <img src={item.img} alt='' />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>}
                    </div>
                </div>
                )
                }
            </header>
            <aside className='Blog-error'>
                <h3 data-aos="fade-up">Phones and tablets cannot access the Blog !!!</h3>
                <span data-aos="fade-up"><i className="fa-solid fa-triangle-exclamation"></i></span>
                <ul style={{margin: "20px 20px 0px"}} data-aos="fade-up">
                    <li title='Menu' onClick={() => {history.push("/")}}><i className="fa-solid fa-backward"></i></li>
                    <li title='About' onClick={() => {history.push("/About")}}><i className="fa-regular fa-address-card"></i></li>
                    <li title='Project' onClick={() => {history.push("/Project")}}><i className="fa-solid fa-kitchen-set"></i></li>
                    <li title='Contact' onClick={() => {history.push("/Contact")}}><i className="fa-solid fa-file-contract"></i></li>
                </ul>
            </aside>
        </div>
    );
};

export default Page;