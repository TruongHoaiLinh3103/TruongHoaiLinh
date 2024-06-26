"use client";

import React from 'react';
import "../../styles/About.scss";
import FetchLoading from '../../utils/FetchLoading';
import FetchAOS from '../../utils/FetchAOS';
import { useRouter } from 'next/navigation';
import { DOCUMENT } from '../../story/DOCUMENT';
import { FaBackward, FaBible , FaFileContract, FaDownload } from "react-icons/fa";

const Page = () => {
    const {check} = FetchLoading();
    FetchAOS();
    const router = useRouter();
    return (
        <div className='About'>
            {check ?
                <>
                    <div className="spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
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
                        <li title='Project' onClick={() => {router.push("/project")}}><FaBible /></li>
                        <li title='Contact' onClick={() => {router.push("/contact")}}><FaFileContract /></li>
                    </ul>
                </div>
            }
        </div>
    );
};

export default Page;