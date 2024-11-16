import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './play.css';
import getWord from './getCategory.jsx';
import key from './key.jsx';

export function Play(props) {
  
  const userName = props.userName;
  const [inputValues, setInputValues] = useState(['', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '']);
  const [totalTime, setTotalTime] = useState(10);
  const [finished, setFinished] = useState(false);
  const [timerValue, setTimerValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [category, setCategory] = useState('');
  let newTotalTime = totalTime;

  let correct = [];
  let incorrect = [];

// -----------------------------------------------------FETCH REQUESTS----------------------------------------------------

  const getSyn = () => {
    fetch(`https://dictionaryapi.com/api/v3/references/ithesaurus/json/${category}?key=${key()}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].meta.syns)
        const synonyms = data[0].meta.syns;
          inputValues.forEach((i) => {
            synonyms.forEach((lst) => {
              if (i !== '') {
                const itemExists = lst.includes(i);
                console.log(i, itemExists);
                if (itemExists === true && !correct.includes(i) && !incorrect.includes(i)){
                  correct.push(i);
                }
                else if (itemExists === false && !incorrect.includes(i) && !correct.includes(i)){
                  incorrect.push(i);
                }
              }
          });
        });
        console.log(correct);
        console.log(incorrect);
        let correct_num = document.createElement('div');
        if (correct.length == 0){
          correct_num.textContent = `You got no answers right. Refresh the page to try again!`;
        }
        else {
          correct_num.textContent = `You got ${correct.length} answers right! Your correct answers were: ${correct}.`;
        }
        let random = document.getElementById('response');
        random.appendChild(correct_num);

        let incorrect_num = document.createElement('div');
        if (incorrect.length == 0){
          correct_num.textContent = `You got no answers incorrect. Congrats!`;
        }
        else {
          incorrect_num.textContent = `You got ${incorrect.length} answers incorrect. Your incorrect answers were: ${incorrect}.`;
        }
        random.appendChild(incorrect_num);

        let score_text = document.createElement('div');
        score_text.textContent = `Your total score is: ${correct.length}`;
        let random2 = document.getElementById('score');
        random2.appendChild(score_text);

        saveScore(correct.length, category);
      })
      .catch((error) => {
        console.error('Error fetching synonyms:', error);
      });
  };

// -----------------------------------------------------UPDATE STATE----------------------------------------------------
  const handleInputChange = (e, index) => {
    const { value } = e.target;
    setInputValues((prevValues) => {
      const newValues = prevValues.map((val, i) => (i === index ? value : val));
      return newValues;
    });
  };

  const computeTimerValue = () => {
    if (totalTime > 0){
      newTotalTime = totalTime - 1;
    }
    if (newTotalTime === 0 && finished === false){
      setFinished(true);
      setIsDisabled(true);
      getSyn();
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
  async function saveScore(score, category) {
    const newScore = { name: userName, score: score, category: category };

    await fetch('/api/score', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newScore),
    });
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
          </div>
          <div id='response'></div>
          <div id='score'></div>
            <img src="MWLogo_LightBG_120x120_2x.pngg" alt="Merriam-Webster logo"/>
          <p>Answers are checked using Merriam-Webster's Intermediate Thesaurus (Grades 6-8)</p>
      </main>
    </div>
  );
}