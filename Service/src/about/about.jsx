import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function About() {
  return (
      <main>
        <h1>How to Play</h1>
        <p>
          Vocab Battle is a game that challenges your vocab skills. 
          In 30 seconds, you must come up with as many words as you can that are synonyms of the category displayed on the top of the page. 
          The more words you come up with, the higher your score!
        </p>

        <p>
          On the home page, sign and select "begin" to see the theme and start the game. Once the time has started, enter your words in the entry spaces, as shown in the picture below.
        </p>

        <div>
          <img width="600px" src="howtoscreenshot.png" alt="the play page" />
        </div>
        
        <p>Once the time has run out, your answers will be automatically submitted and checked for validity. You can see your score on the scores page.
          To play with another category, refresh the page! Good luck!</p>
      </main>
  );
}
