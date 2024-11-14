import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './play.css';

export function Play(props) {
  const [isDisabled, setIsDisabled] = useState(false);
  const userName = props.userName;
  const [timerValue, setTimerValue] = useState('');
  let totalTime = 10;
  let finished = false;
  let score = 0;

  const [inputValues, setInputValues] = useState(['', '', '', '']);
  const [filledFieldsCount, setFilledFieldsCount] = useState(0);
  const [filledFieldsData, setFilledFieldsData] = useState([]);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    setInputValues((prevValues) =>
      prevValues.map((val, i) => (i === index ? value : val))
    );
    countFilledFields();
  };

  const countFilledFields = () => {
    const filled = Object.entries(inputValues).filter(([_, value]) => value);
    setFilledFieldsCount(filled.length);
    setFilledFieldsData(filled);
  };

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
        saveScore(10);
        return "00:00";
    }
  };

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
              {inputValues.map(( value, index ) => (<input key={index} type="text" value={value} onChange={(e) => handleInputChange(e, index)}/>))}
            </div>
            <p>{filledFieldsCount}</p>
            <p>{filledFieldsData}</p>
            <p>{inputValues}</p>
          </div>
      </main>
    </div>
  );
}