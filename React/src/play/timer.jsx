import React, { useState, useEffect, useRef } from 'react';

export default function Timer(){
    const [timerValue, setTimerValue] = useState('');

    let totalTime = 20;

    const computeTimerValue = () => {
        if(totalTime >= 11) {
            totalTime = totalTime - 1;
            return "00:" + totalTime;
        } else if (totalTime != 0){
            totalTime = totalTime - 1;
            return "00:0" + totalTime;
        } else {
            return "00:00";
        }
    };

    useEffect(() => {
        setInterval(() => {
            setTimerValue(computeTimerValue());
        }, 1000);

    }, []);

    return (<p className='timer'>Timer: {timerValue}</p>);
}
