import React, { useState, useEffect, useRef } from 'react';

export default function Timer(){
    const [timerValue, setTimerValue] = useState('');
    const formRef = useRef(null);

    let totalTime = 5;

    const computeTimerValue = () => {
        if(totalTime >= 11) {
            totalTime = totalTime - 1;
            return "00:" + totalTime;
        } else if (totalTime != 0){
            totalTime = totalTime - 1;
            return "00:0" + totalTime;
        } else {
            formRef.current.requestSubmit(); 
            return "00:00";
        }
    };

    useEffect(() => {
        setInterval(() => {
            setTimerValue(computeTimerValue());
        }, 1000);

    }, []);

    return timerValue;
}
