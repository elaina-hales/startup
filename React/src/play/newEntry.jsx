import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function GetEntry(){
    const [name, setName] = useState("");

    let initialValues = {}
    // let elements = document.getElementsByClassName("entry")
    // let arr = [].slice.call(elements);
    return (
      <div className="App">
        <div class="inputfield">
          <label>Campaign Name</label>
          <input type='text' required maxLength='20' onChange={setName()} className="input"/>
        </div>
      </div>
    );
}

    // let c_entries = [];

    // const keydown = () => {
    // };

    // console.log(document.getElementsByClassName("entry"));
    //convert the above to an array then run the for each on it ^
    //     if (e.key === 'Enter' || e.keyCode === 13) {
    //         c_entries.append(<input className='entry'/>);
    //     }
    // };

    // useEffect(() =>{
    //     setEntries(c_entries);
    // }, []);

{/* <div><input className='entry'/>{entries}</div> */}

// forEach(element => element.on('keyup', function (e) {