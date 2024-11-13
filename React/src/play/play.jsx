import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './play.css';

export function Play(props) {
  const [isDisabled, setIsDisabled] = useState(false);
  const childRef = useRef();
  const userName = props.userName;
  const [timerValue, setTimerValue] = useState('');
  let totalTime = 5;
  let finished = false;
  let c_score = 0;

  const computeTimerValue = () => {
    if(totalTime >= 11) {
        totalTime = totalTime - 1;
        return "00:" + totalTime;
    } else if (totalTime != 0){
        totalTime = totalTime - 1;
        return "00:0" + totalTime;
    } else if (totalTime === 0 && finished === false){
        finished = true;
        setIsDisabled(true);
        // for(let i = 0; i < 5; i++){
        //   let text = document.getElementById(`${i}`);
        //   if(text.value() != null){
        //     c_score++;
        //   }
        // }
        saveScore(c_score);
        return "00:00";
    }
  };

  const incScore = () => {
    c_score++;
  }

  async function saveScore(score) {
    const newScore = { name: userName, score: score};
    updateScoresLocal(newScore);
  }

  function updateScoresLocal(newScore) {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (newScore.score > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }

    if (!found) {
      scores.push(newScore);
    }

    if (scores.length > 10) {
      scores.length = 10;
    }

    localStorage.setItem('scores', JSON.stringify(scores));
  }


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
            <input className='entry' id='1' disabled={isDisabled} onChange={incScore()}/><input className='entry' id='2' onChange={incScore()} disabled={isDisabled}/><input className='entry' onChange={incScore()} id='3' disabled={isDisabled}/><input className='entry' onChange={incScore()} id='4'disabled={isDisabled}/>
            <input className='entry' id='5' onChange={incScore()} disabled={isDisabled}/>
            </div>
            <p id='message'></p>
          </div>
      </main>
    </div>
  );
}