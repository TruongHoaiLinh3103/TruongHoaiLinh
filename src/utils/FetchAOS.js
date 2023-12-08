"use client";

import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FetchAOS = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing : "ease-in"
        })
    }, [])
};

export default FetchAOS;