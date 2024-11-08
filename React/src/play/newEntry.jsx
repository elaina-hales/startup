import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function NewEntry(){
    const [entries, setEntries] = useState('');

    let c_entries = [<p>1</p>, <p>2</p>, <p>3</p>, <p>4</p>, <p>5</p>];

    const keydown = () => {
        c_entries.append(<input className='entry' onClick={keydown}/>);
    };

    useEffect(() =>{
        setEntries(c_entries);
    }, []);

    return (<div><input className='entry' onKeyDown={keydown}/>{entries}</div>);
}