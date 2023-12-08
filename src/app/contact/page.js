"use client";

import React from 'react';
import "../../styles/Contact.scss";
import FetchLoading from '../../utils/FetchLoading';
import FetchAOS from '../../utils/FetchAOS';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { QR } from '../../story/QR';
import { FaQrcode, FaBlogger, FaAddressCard, FaBible, FaPinterest, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTiktok, FaGit } from "react-icons/fa";

const Page = () => {
    const router = useRouter();
    const {check} = FetchLoading();
    const [zalo, setZalo] = useState(false);
    const [vietinbank, setVietinbank] = useState(false);
    const [email, setEmail] = useState(false);
    const [fb, setFb] = useState(false);
    const [git, setGit] = useState(false);
    const [titok, setTitok] = useState(false);
    const [phone, setPhone] = useState(false);
    const [instagram, setInstagram] = useState(false);
    const [pin, setPin] = useState(false);
    const [navbar, setNavbar] = useState(false)
    FetchAOS();
    const alerAdress = () => {
        alert("12/9 Tân Thới Nhất 5, Tân Thới Nhất, Quận 12, TP.HCM");
    }
    const checkNavbar = () => {
        setNavbar(!navbar)
    }
    const checkZalo = () => {
        setZalo(!zalo)
    }
    const checkVTBank = () => {
        setVietinbank(!vietinbank)
    }
    return (
        <div className="Contact" data-aos="fade-up">
            {check ? (
            <>
            <div className="loader">
                <div className="tars">
                    <div className="container 1">
                        <div className="shape">
                            <div className="f"></div>
                            <div className="b"></div>
                            <div className="l"></div>
                            <div className="r"></div>
                            <div className="t"></div>
                            <div className="bot"></div>
                        </div>
                    </div>
                    <div className="container 2">
                        <div className="shape">
                            <div className="f"></div>
                            <div className="b"></div>
                            <div className="l"></div>
                            <div className="r"></div>
                            <div className="t"></div>
                            <div className="bot"></div>
                        </div>
                    </div>
                    <div className="container 3">
                        <div className="shape">
                            <div className="f"></div>
                            <div className="b"></div>
                            <div className="l"></div>
                            <div className="r"></div>
                            <div className="t"></div>
                            <div className="bot"></div>
                        </div>
                    </div>
                    <div className="container 4">
                        <div className="shape">
                            <div className="f"></div>
                            <div className="b"></div>
                            <div className="l"></div>
                            <div className="r"></div>
                            <div className="t"></div>
                            <div className="bot"></div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="title-loading" data-aos="fade-up">Starting up, please wait a moment!...</h3>
            </>
            ):
            (
                <div className='Contact-body'>
                    {!zalo && !vietinbank && !pin && !phone && !email && !fb && !instagram && !titok && !git &&
                    <div className="card">
                        <span className="card__hover">Hover Here (⁠≧⁠▽⁠≦⁠)</span>
                        <figure className="card__figure">
                            <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly", marginBottom: "10px"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 128 128" style={{fill: "rgba(255, 255, 255, 1)"}} onClick={() => {router.push("/")}}>
                                    <path d="M 70 18.074219 C 69.225 18.074219 68.450391 18.350391 67.900391 18.900391 L 14.099609 72.599609 C 12.899609 73.799609 12.899609 75.700781 14.099609 76.800781 L 22.599609 85.300781 C 23.199609 85.900781 23.899219 86.199219 24.699219 86.199219 C 25.499219 86.199219 26.300781 85.900781 26.800781 85.300781 L 70 42.199219 L 102 74.199219 L 102 114.5 C 99.1 115.5 96.899219 118 96.199219 121 L 84 121 L 84 80 C 84 78.3 82.7 77 81 77 L 59 77 C 57.3 77 56 78.3 56 80 L 56 121 L 38 121 L 38 94 C 38 92.3 36.7 91 35 91 C 33.3 91 32 92.3 32 94 L 32 101.40039 C 27.1 102.60039 23.300781 106.40078 22.300781 111.30078 C 17.400781 112.30078 13.500391 116.2 12.400391 121 L 4 121 C 2.3 121 1 122.3 1 124 C 1 125.7 2.3 127 4 127 L 99 127 C 100.7 127 102 125.7 102 124 L 102 123 C 102 121.3 103.3 120 105 120 C 106.7 120 108 121.3 108 123 L 108 124 C 108 125.7 109.3 127 111 127 L 114 127 C 115.7 127 117 125.7 117 124 C 117 122.3 115.7 121 114 121 L 113.80078 121 C 113.10078 118 110.9 115.5 108 114.5 L 108 80.199219 L 113.09961 85.300781 C 113.69961 85.900781 114.39922 86.199219 115.19922 86.199219 C 115.99922 86.199219 116.80078 85.900781 117.30078 85.300781 L 125.80078 76.800781 C 127.00078 75.600781 127.00078 73.699609 125.80078 72.599609 L 72.099609 18.900391 C 71.549609 18.350391 70.775 18.074219 70 18.074219 z M 70 25.300781 L 119.5 74.800781 L 115.30078 79 L 72.099609 35.900391 C 71.499609 35.300391 70.8 35 70 35 C 69.2 35 68.500391 35.300391 67.900391 35.900391 L 24.699219 79 L 20.5 74.800781 L 70 25.300781 z M 64 101 C 65.7 101 67 102.3 67 104 C 67 105.7 65.7 107 64 107 C 62.3 107 61 105.7 61 104 C 61 102.3 62.3 101 64 101 z M 32 107.69922 L 32 121 L 18.699219 121 C 19.799219 118.6 22.2 117 25 117 C 26.7 117 28 115.7 28 114 C 28 111.2 29.6 108.79922 32 107.69922 z M 124 121 A 3 3 0 0 0 121 124 A 3 3 0 0 0 124 127 A 3 3 0 0 0 127 124 A 3 3 0 0 0 124 121 z"></path>
                                </svg>
                                <button title='About' onClick={() => {router.push("/about")}}><FaAddressCard /></button>
                                <button title='Blog' onClick={() => {router.push("/blog")}}><FaBlogger /></button>
                                <button title='Project' onClick={() => {router.push("/project")}}><FaBible /></button>
                                <button title='Connect QR' onClick={() => checkNavbar()}><FaQrcode />
                                    <ul className='Qr-navbar' style={{
                                        display: !navbar ? "none" : "flex"
                                    }}>
                                        <li onClick={() => {setPin(!pin)}}><FaPinterest /></li>
                                        <li onClick={() => {setPhone(!phone)}}><FaPhone /></li>
                                        <li onClick={() => {setEmail(!email)}}><FaEnvelope /></li>
                                        <li onClick={() => {setFb(!fb)}}><FaFacebook /></li>
                                        <li onClick={() => {setInstagram(!instagram)}}><FaInstagram /></li>
                                        <li onClick={() => {setTitok(!titok)}}><FaTiktok /></li>
                                        <li onClick={() => {setGit(!git)}}><FaGit /></li>

                                    </ul>
                                </button>
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.676993776745!2d106.61073737483206!3d10.836012189316431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bcce986a785%3A0x6538604bf47e8288!2zMTIgVMOibiBUaOG7m2kgTmjhuqV0IDUsIFTDom4gVGjhu5tpIE5o4bqldCwgUXXhuq1uIDEyLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1700558984358!5m2!1svi!2s" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </figure>
                        <div className="card__info">
                            <span className="card__name">
                                Truong Hoai Linh
                                <a href='mailto:truonghoailinh3103@gmail.com'><span className="card__ocupation">  truonghoailinh3103@gmail.com </span></a>
                                <a href='tel:0356381315'><span className="card__ocupation">  0356381315 </span></a>
                                <div className='card__banks'>
                                    <span className="card__ocupation" onClick={() => checkVTBank()}>  Vietinbank </span>
                                </div>
                                <div className="card__links">
                                    <button><a href='https://www.facebook.com/Anikey3103'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(255, 255, 255, 1)"}}>
                                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                    </svg></a></button>
                                    <button onClick={() => checkZalo()}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50" style={{fill: "rgba(255, 255, 255, 1)"}}>
                                        <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 15.580078 6 C 12.00899 9.7156859 10 14.518083 10 19.5 C 10 24.66 12.110156 29.599844 15.910156 33.339844 C 16.030156 33.549844 16.129922 34.579531 15.669922 35.769531 C 15.379922 36.519531 14.799687 37.499141 13.679688 37.869141 C 13.249688 38.009141 12.97 38.430859 13 38.880859 C 13.03 39.330859 13.360781 39.710781 13.800781 39.800781 C 16.670781 40.370781 18.529297 39.510078 20.029297 38.830078 C 21.379297 38.210078 22.270625 37.789609 23.640625 38.349609 C 26.440625 39.439609 29.42 40 32.5 40 C 36.593685 40 40.531459 39.000731 44 37.113281 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 33 15 C 33.55 15 34 15.45 34 16 L 34 25 C 34 25.55 33.55 26 33 26 C 32.45 26 32 25.55 32 25 L 32 16 C 32 15.45 32.45 15 33 15 z M 18 16 L 23 16 C 23.36 16 23.700859 16.199531 23.880859 16.519531 C 24.050859 16.829531 24.039609 17.219297 23.849609 17.529297 L 19.800781 24 L 23 24 C 23.55 24 24 24.45 24 25 C 24 25.55 23.55 26 23 26 L 18 26 C 17.64 26 17.299141 25.800469 17.119141 25.480469 C 16.949141 25.170469 16.960391 24.780703 17.150391 24.470703 L 21.199219 18 L 18 18 C 17.45 18 17 17.55 17 17 C 17 16.45 17.45 16 18 16 z M 27.5 19 C 28.11 19 28.679453 19.169219 29.189453 19.449219 C 29.369453 19.189219 29.65 19 30 19 C 30.55 19 31 19.45 31 20 L 31 25 C 31 25.55 30.55 26 30 26 C 29.65 26 29.369453 25.810781 29.189453 25.550781 C 28.679453 25.830781 28.11 26 27.5 26 C 25.57 26 24 24.43 24 22.5 C 24 20.57 25.57 19 27.5 19 z M 38.5 19 C 40.43 19 42 20.57 42 22.5 C 42 24.43 40.43 26 38.5 26 C 36.57 26 35 24.43 35 22.5 C 35 20.57 36.57 19 38.5 19 z M 27.5 21 C 27.39625 21 27.29502 21.011309 27.197266 21.03125 C 27.001758 21.071133 26.819727 21.148164 26.660156 21.255859 C 26.500586 21.363555 26.363555 21.500586 26.255859 21.660156 C 26.148164 21.819727 26.071133 22.001758 26.03125 22.197266 C 26.011309 22.29502 26 22.39625 26 22.5 C 26 22.60375 26.011309 22.70498 26.03125 22.802734 C 26.051191 22.900488 26.079297 22.994219 26.117188 23.083984 C 26.155078 23.17375 26.202012 23.260059 26.255859 23.339844 C 26.309707 23.419629 26.371641 23.492734 26.439453 23.560547 C 26.507266 23.628359 26.580371 23.690293 26.660156 23.744141 C 26.819727 23.851836 27.001758 23.928867 27.197266 23.96875 C 27.29502 23.988691 27.39625 24 27.5 24 C 27.60375 24 27.70498 23.988691 27.802734 23.96875 C 28.487012 23.82916 29 23.22625 29 22.5 C 29 21.67 28.33 21 27.5 21 z M 38.5 21 C 38.39625 21 38.29502 21.011309 38.197266 21.03125 C 38.099512 21.051191 38.005781 21.079297 37.916016 21.117188 C 37.82625 21.155078 37.739941 21.202012 37.660156 21.255859 C 37.580371 21.309707 37.507266 21.371641 37.439453 21.439453 C 37.303828 21.575078 37.192969 21.736484 37.117188 21.916016 C 37.079297 22.005781 37.051191 22.099512 37.03125 22.197266 C 37.011309 22.29502 37 22.39625 37 22.5 C 37 22.60375 37.011309 22.70498 37.03125 22.802734 C 37.051191 22.900488 37.079297 22.994219 37.117188 23.083984 C 37.155078 23.17375 37.202012 23.260059 37.255859 23.339844 C 37.309707 23.419629 37.371641 23.492734 37.439453 23.560547 C 37.507266 23.628359 37.580371 23.690293 37.660156 23.744141 C 37.739941 23.797988 37.82625 23.844922 37.916016 23.882812 C 38.005781 23.920703 38.099512 23.948809 38.197266 23.96875 C 38.29502 23.988691 38.39625 24 38.5 24 C 38.60375 24 38.70498 23.988691 38.802734 23.96875 C 39.487012 23.82916 40 23.22625 40 22.5 C 40 21.67 39.33 21 38.5 21 z"></path>
                                    </svg></button>

                                    <button><a href='https://github.com/TruongHoaiLinh3103'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 64 64" style={{fill: "rgba(255, 255, 255, 1)"}}>
                                        <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                                    </svg></a></button>

                                    <button onClick={() => alerAdress()}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50" style={{fill: "rgba(255, 255, 255, 1)"}}>
                                        <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
                                    </svg></button>
                                </div>
                            </span>
                        </div>
                    </div>}
                    {QR.map((item) => {
                        return(
                            <div key={item.id}>
                                {fb && item.id === 1 &&
                                <img src={item.img.src} alt='QR Facebook' data-aos="fade-up" onClick={() => {setFb(!fb)}} />}
                                {phone && item.id === 2 &&
                                <img src={item.img.src} alt='QR Phone' data-aos="fade-up" onClick={() => {setPhone(!phone)}} />}
                                {email && item.id === 3 &&
                                <img src={item.img.src} alt='QR Email' data-aos="fade-up" onClick={() => {setEmail(!email)}} />}
                                {titok && item.id === 4 &&
                                <img src={item.img.src} alt='QR Tiktok' data-aos="fade-up" onClick={() => {setTitok(!titok)}} />}
                                {git && item.id === 5 &&
                                <img src={item.img.src} alt='QR Git' data-aos="fade-up" onClick={() => {setGit(!git)}} />}
                                {instagram && item.id === 6 &&
                                <img src={item.img.src} alt='QR Instagram' data-aos="fade-up" onClick={() => {setInstagram(!instagram)}} />}
                                {zalo && item.id === 7 &&
                                <img src={item.img.src} alt='QR Zalo' data-aos="fade-up" onClick={() => checkZalo()} />}
                                {vietinbank && item.id === 8 &&
                                <img src={item.img.src} alt='QR Vietinbank' data-aos="fade-up" onClick={() => checkVTBank()} />}
                                {pin && item.id === 9 &&
                                <img src={item.img.src} alt='QR Pinterest' data-aos="fade-up" onClick={() => {setPin(!pin)}} />}
                            </div>
                        )
                    })}
                </div>
            )
            }
        </div>
    );
};

export default Page;