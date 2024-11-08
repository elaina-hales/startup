import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './play.css';
import Timer from './timer.jsx';
import NewEntry from './newEntry.jsx';


export function Play() {
  return (
    <div className='body'>
      <main>
        <div>
          <div className='subheader'>
            <div className='timer'>*****</div>
            <div className="category-block">
              <p>Today's Category:</p>
              <h2 id="category">Fast Food Places</h2>
            </div>
            <form>
                <NewEntry/>
                <button className="btn btn-primary">Submit</button>
            </form>
          </div>
      </div>
        <p>Thank you for your submission. Your answers will now be graded and checked by a third party service. </p>
    </main>
    </div>
  );
}


{/* <Timer/> */}