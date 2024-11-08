import React, { useState, useEffect, useRef } from 'react';

export default function Timer(){
    const Ref = useRef(null);

    const [timerValue, setTimerValue] = useState('00:00');

    const computeTimerValue = () => {
        return '00:00';
    };

    useEffect(() => {
        const value = computeTimerValue();
        setTimerValue(value);
    }, []);

    return (<p className='timer'>Timer: {timerValue}</p>);
}

