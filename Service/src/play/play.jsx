import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './play.css';
import getWord from './getCategory.jsx';

export function Play(props) {
  
  const userName = props.userName;
  const [inputValues, setInputValues] = useState(['', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '', '', '', '', '']);
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
    const response = fetch('/api/fetch', {
        method: 'post',
        body: JSON.stringify({ category: category }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.synonyms);
        inputValues.forEach((i) => {
          let itemExists = false;
          data.synonyms.forEach((lst) => {
            if (i !== '' || i !== ' ') {
              if (lst.includes(i)){
                itemExists = true;
              }
            }
          });
          if (i !== '' || i !== ' ') {
            if (itemExists === true && !correct.includes(i) && !incorrect.includes(i)){
                correct.push(i);
            } else if (itemExists === false && !incorrect.includes(i) && !correct.includes(i)){
                incorrect.push(i);
            };
          }
        });
        let correct_num = document.createElement('div');
        let incorrect_num = document.createElement('div');
        let random = document.getElementById('response');

        if (correct.length === 0 && incorrect.length-1 === 0){
          correct_num.textContent = `You didn't enter anything. Refresh the page to try again!`
          random.appendChild(correct_num);
        }
        else if (correct.length === 0){
          correct_num.textContent = `You got no answers right. Refresh the page to try again!`;
          random.appendChild(correct_num);
        }
        else if (incorrect.length-1 === 0){
          incorrect_num.textContent = `All your answers are correct! Congrats!`;
          random.appendChild(incorrect_num);
        }
        else {
          correct_num.textContent = `You got ${correct.length} answers right! Your correct answers were: ${correct}.`;
          incorrect_num.textContent = `You got ${incorrect.length-1} answers wrong! Your incorrect answers were: ${incorrect}.`;
          random.appendChild(correct_num);
          random.appendChild(incorrect_num);
        }
        
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
            <div style={{ height: '200px', overflow: 'auto' }} id='entries'> 
              {inputValues.map(( value, index ) => (<input key={index} type="text" className='entry' value={value} disabled={isDisabled} onChange={(e) => handleInputChange(e, index)}/>))}
            </div>
          </div>
          <div id='response'></div>
          <div id='score'></div>
          <div>
            <p><em>Answers are checked using Merriam-Webster's Intermediate Thesaurus (Grades 6-8)</em></p>
          </div>
          <img src="MWLogo_LightBG_120x120_2x.png" alt="Merriam-Webster logo" height='50' width='50'/>
      </main>
    </div>
  );
}