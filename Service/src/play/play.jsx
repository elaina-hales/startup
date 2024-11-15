import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './play.css';
import getWord from './getCategory.jsx';

export function Play(props) {
  
  const userName = props.userName;
  const [inputValues, setInputValues] = useState(['', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '','', '', '', '','', '', '', '','', '', '','', '', '', '','', '', '', '']);
  const [totalTime, setTotalTime] = useState(5);
  const [filledFieldsData, setFilledFieldsData] = useState([]);
  const [finished, setFinished] = useState(false);
  const [timerValue, setTimerValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('');
  let newTotalTime = totalTime;
  let randomWord = '';

// -----------------------------------------------------FETCH REQUESTS----------------------------------------------------

  const getSyn = () => {
    console.log(category)
    fetch(`https://api.api-ninjas.com/v1/thesaurus?word=${category}`, {method: 'GET', 
      headers: {
        'x-api-key': 'S3GJvoBwOqtOpm+vxO/xNA==dSnhCQpzwX7LQBW0'
      }})
      .then((response) => response.json())
      .then((data) => {
        const synonyms = data.synonyms;
        console.log(synonyms);
        setCategory(randomWord);
        return synonyms;
      })
      .catch();
  };

// -----------------------------------------------------UPDATE STATE----------------------------------------------------
  const handleInputChange = (e, index) => {
    const { value } = e.target;
    setInputValues((prevValues) => {
      const newValues = prevValues.map((val, i) => (i === index ? value : val));
      return newValues;
    });
  };

  const countFilledFields = () => {
    let filled = inputValues.filter(value => value.trim() !== '');
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
      saveScore(countFilledFields());
      setMessage("Your answers have been submitted.")
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

  useEffect(() => {
      setCategory(getWord);
  }, []);
  
// -----------------------------------------------------SAVE SCORE----------------------------------------------------
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
              <p>Category:</p>
              <h2 id="category">{category}</h2>
            </div>
            <div style={{ height: '200px', overflow: 'auto' }}> 
              {inputValues.map(( value, index ) => (<input key={index} type="text" className='entry' value={value} disabled={isDisabled} onChange={(e) => handleInputChange(e, index)}/>))}
            </div>
            <p>{message}</p>
          </div>
      </main>
    </div>
  );
}