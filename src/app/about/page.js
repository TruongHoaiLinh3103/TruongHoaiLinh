"use client";

import React from 'react';
import "../../styles/About.scss";
import FetchLoading from '../../utils/FetchLoading';
import FetchAOS from '../../utils/FetchAOS';
import { useRouter } from 'next/navigation';
import { DOCUMENT } from '../../story/DOCUMENT';
import { FaBackward, FaBlogger, FaBible , FaFileContract, FaDownload } from "react-icons/fa";

const Page = () => {
    const {check} = FetchLoading();
    FetchAOS();
    const router = useRouter();
    console.log(DOCUMENT)
    return (
        <div className='About'>
            {check ?
                <>
                    <div className="rocket">
                        <div className="rocket-body">
                        <div className="body"></div>
                        <div className="fin fin-left"></div>
                        <div className="fin fin-right"></div>
                        <div className="window"></div>
                        </div>
                        <div className="exhaust-flame"></div>
                        <ul className="exhaust-fumes">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        </ul>
                        <ul className="star">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        </ul>
                    </div>
                    <h3 className="title-loading" data-aos="fade-up">Starting up, please wait a moment!...</h3>
                </>
            :
                <div className='About-body'>
                    {DOCUMENT.map((item) => {
                        return(
                            <div className='About-body_box' key={item.id}>
                                <img src={item.imgCV.src} alt='Đây là thông tin của tôi' />
                                <a href={item.imgCV.src} download="Trương Hoài Linh"><FaDownload /></a>
                            </div>
                        )
                    })}
                    <ul style={{margin: "20px 20px 0px"}}>
                        <li title='Menu' onClick={() => {router.push("/")}}><FaBackward /></li>
                        <li title='Blog' onClick={() => {router.push("/blog")}}><FaBlogger /></li>
                        <li title='Project' onClick={() => {router.push("/project")}}><FaBible /></li>
                        <li title='Contact' onClick={() => {router.push("/contact")}}><FaFileContract /></li>
                    </ul>
                </div>
            }
        </div>
    );
};

export default Page;