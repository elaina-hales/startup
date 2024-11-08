import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Timer(){
    const navigate = useNavigate();
    const [timerValue, setTimerValue] = useState('');

    let totalTime = 5;

    const computeTimerValue = () => {
        if(totalTime >= 11) {
            totalTime = totalTime - 1;
            return "00:" + totalTime;
        } else if (totalTime != 0){
            totalTime = totalTime - 1;
            return "00:0" + totalTime;
        } else {
            navigate('/about');
        }
    };

    useEffect(() => {
        setInterval(() => {
            setTimerValue(computeTimerValue());
        }, 1000);

    }, []);

    return (<p className='timer'>Timer: {timerValue}</p>);
}
