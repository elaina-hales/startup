import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from './timer.jsx';
import Submit from './Submit.jsx';


export default function Playing() {
  if (Timer() === "00:00"){
    return(
      <main>
          <div className='subheader'>
            <div className='timer'>Timer: 00:00</div>
            <div className="category-block">
              <p>Today's Category:</p>
              <h2 id="category">Fast Food Places</h2>
            </div>
            <p>Thank you for your submission. Your answers will now be graded and checked by a third party service. </p>
            <div style={{ height: '200px', overflow: 'auto' }}> 
              <Submit/>
            </div>
          </div>
      </main>
    );
  } else {
    return(
      <main>
        <div>
          <div className='subheader'>
            <p className='timer'>Timer: <Timer/></p>            
            <div className="category-block">
              <p>Today's Category:</p>
              <h2 id="category">Fast Food Places</h2>
            </div>
          </div>
          <Submit/>
        </div>
      </main>
    )
  }
}