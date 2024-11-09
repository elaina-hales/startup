import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './play.css';
import Submit from './Submit.jsx';
import Timer from './timer.jsx';


export function Play() {
  return (
    <div className='body'>
        <main>
          <div className='subheader'>
            <div className='timer'>Timer: <Timer/></div>
            <div className="category-block">
              <p>Today's Category:</p>
              <h2 id="category">Fast Food Places</h2>
            </div>
            <div style={{ height: '200px', overflow: 'auto' }}> 
              <Submit/>
            </div>
            <p>Thank you for your submission. Your answers will now be graded and checked by a third party service. </p>
          </div>
      </main>
    </div>
  );
}