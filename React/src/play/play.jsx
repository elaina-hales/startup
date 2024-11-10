import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './play.css';
import Submit from './Submit.jsx';
import SendScore from './sendScores.jsx';

export function Play(props) {
  const childRef = useRef();

  const disableInputs = () => {
    childRef.current.disable();
  };

  const [timerValue, setTimerValue] = useState('');

  let totalTime = 30;

  const computeTimerValue = () => {
        if(totalTime >= 11) {
            totalTime = totalTime - 1;
            return "00:" + totalTime;
        } else if (totalTime != 0){
            totalTime = totalTime - 1;
            return "00:0" + totalTime;
        } else {
            disableInputs();
            SendScore(10);
            return "00:00";
        }
    };

    useEffect(() => {
        setInterval(() => {
            setTimerValue(computeTimerValue());
        }, 1000);
    }, []); 

  return (
    <div className='body'>
        <main>
          <div className='subheader'>
            <div className='timer'>Timer: {timerValue}</div>
            <div className="category-block">
              <p>Today's Category:</p>
              <h2 id="category">Fast Food Places</h2>
            </div>
            <div style={{ height: '200px', overflow: 'auto' }}> 
              <Submit ref={childRef}/>
            </div>
            <p id='message'></p>
          </div>
      </main>
    </div>
  );
}