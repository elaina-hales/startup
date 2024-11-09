import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from './timer.jsx';
import GetEntry from './newEntry.jsx';


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
              <p><GetEntry/></p>
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
            <form ref={formRef} onSubmit={GetEntry()}>
              <div style={{ height: '200px', overflow: 'auto' }}> 
                <input className="entry"/><input className="entry"/><input className="entry"/><input className="entry"/>
                <input className="entry"/><input className="entry"/><input className="entry"/><input className="entry"/>
                <input className="entry"/><input className="entry"/><input className="entry"/><input className="entry"/>
                <input className="entry"/><input className="entry"/><input className="entry"/><input className="entry"/>
                <input className="entry"/><input className="entry"/><input className="entry"/><input className="entry"/>
                <input className="entry"/><input className="entry"/><input className="entry"/><input className="entry"/>
                <input className="entry"/><input className="entry"/><input className="entry"/><input className="entry"/>
                <input className="entry"/><input className="entry"/><input className="entry"/><input className="entry"/>
                <input className="entry"/><input className="entry"/><input className="entry"/><input className="entry"/>
                <input className="entry"/><input className="entry"/><input className="entry"/><input className="entry"/>
                <input className="entry"/><input className="entry"/><input className="entry"/><input className="entry"/>
                <input className="entry"/><input className="entry"/><input className="entry"/><input className="entry"/>
                <input className="entry"/><input className="entry"/><input className="entry"/><input className="entry"/>
                <input className="entry"/><input className="entry"/><input className="entry"/><input className="entry"/>
              </div>
            </form>
          </div>
          <button className="btn btn-primary">Submit</button>
        </div>
      </main>
    )
  }
}