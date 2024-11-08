import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './play.css';
import Timer from './timer.jsx';

export function Play() {
  return (
    <div className='body'>
      <main>
        <div>
          <div className='subheader'>
            <div className='timer'><Timer/></div>
            <div className="category-block">
              <p>Today's Category:</p>
              <h2 id="category">Fast Food Places</h2>
            </div>
            <form method="get">
                <input className="entry" placeholder="Entry 1" />
                <input className="entry" placeholder="Entry 2" />
                <input className="entry" placeholder="Entry 3" />
                <input className="entry" placeholder="Entry 4" />
                <input className="entry" placeholder="Entry 5" />
                <input className="entry" placeholder="Entry 6" />
                <input className="entry" placeholder="Entry 7" />
                <input className="entry" placeholder="Entry 8" />
                <input className="entry" placeholder="Entry 9" />
                <input className="entry" placeholder="Entry 10"/>
              <div className="container-fluid text-center">
                <button type="button" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
      </div>
        <p>Thank you for your submission. Your answers will now be graded and checked by a third party service. </p>
    </main>
    </div>
  );
}
