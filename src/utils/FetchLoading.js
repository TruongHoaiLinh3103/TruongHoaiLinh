"use client";

import { useEffect } from 'react';
import { useState } from 'react';
const FetchLoading = () => {
    const [looding, setloading] = useState(3);
    const [check, setCheck] = useState(true)
    useEffect(() => {
        if(looding === 0){
            setCheck(false)
            return;
        }else{
            var timer = setInterval(() => {
                setloading(looding - 1)
            },1000)
        }
        return() => {
            clearInterval(timer);
        }
    })
    return { looding, check };
};

export default FetchLoading;