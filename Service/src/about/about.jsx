import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function About() {
  return (
      <main>
        <h1>How to Play</h1>
        <p>
          Vocab Battle is a game that challenges your vocab skills. 
          In 30 seconds, you must come up with as many words as you can that relate to or are synonyms for the category displayed on the home page. 
          The more words you come up with, the higher your score!
        </p>

        <p>
          On the home page, select "Begin" to see the theme for the day and start the game. Once the time has started, enter your words in the entry spaces, as shown in the picture below. 
        </p>

        <div>
          <img width="600px" src="howtoscreenshot.png" alt="the play page" />
        </div>
        
        <p>Once the time has run out, your answers will be automatically submitted and checked for validity! 
          If you are unable to think of more words and want to submit early, you may select the submit button.
        </p>
      </main>
  );
}
