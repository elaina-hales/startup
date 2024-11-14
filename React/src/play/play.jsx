import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './play.css';

export function Play(props) {
  const userName = props.userName;
  const [inputValues, setInputValues] = useState(['', '', '', '']);
  const [filledFieldsCount, setFilledFieldsCount] = useState(0);
  const [totalTime, setTotalTime] = useState(10);
  const [filledFieldsData, setFilledFieldsData] = useState([]);
  const [finished, setFinished] = useState(false);
  const [timerValue, setTimerValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  let newTotalTime = totalTime;


  const handleInputChange = (e, index) => {
    const { value } = e.target;
    setInputValues((prevValues) => {
      const newValues = prevValues.map((val, i) => (i === index ? value : val));
      return newValues;
    });
  };

  const countFilledFields = () => {
    let filled = inputValues.filter(value => value.trim() !== '');
    setFilledFieldsCount(filled.length);
    setFilledFieldsData(filled);
    return filled.length;
  };

  const computeTimerValue = () => {
    if (totalTime > 0){
      newTotalTime = totalTime - 1;
    }
    if (newTotalTime === 0 && finished === false) {
      setFinished(true);
      setIsDisabled(true);
      console.log(inputValues);
      saveScore(countFilledFields());
      return "00:00";
    }
    setTotalTime(newTotalTime);
    return newTotalTime >= 10 ? `00:${newTotalTime}` : `00:0${newTotalTime}`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimerValue(computeTimerValue());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [totalTime, finished]);


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
              {inputValues.map(( value, index ) => (<input key={index} type="text" value={value} disabled={isDisabled} onChange={(e) => handleInputChange(e, index)}/>))}
            </div>
            <p>{filledFieldsCount}</p>
            <p>{filledFieldsData}</p>
            <p>{inputValues}</p>
          </div>
      </main>
    </div>
  );
}