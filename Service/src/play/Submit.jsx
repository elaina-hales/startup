import React, { useState, forwardRef, useImperativeHandle } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './play.css';

const Submit = forwardRef((props, ref) => {
    const [isDisabled, setIsDisabled] = useState(false);

    const disable = () =>{
        setIsDisabled(true)
    }

    useImperativeHandle(ref, () => {
        return {
            disable,
        }
    });

    return (
        <form className='entry'>
            <input className='entry' id='1' disabled={isDisabled}/><input className='entry' id='2' disabled={isDisabled}/><input className='entry' id='3' disabled={isDisabled}/><input className='entry' id='4'disabled={isDisabled}/>
            <input className='entry' id='5' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/>
            <input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/>
            <input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/>
            <input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/>
            <input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/>
            <input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/>
            <input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/>
            <input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/>
            <input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/>
            <input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/>
            <input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/>
            <input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/>
            <input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/>
            <input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/>
            <input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/>
            <input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/>
            <input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/><input className='entry' disabled={isDisabled}/>
        </form>
      );
});

export default Submit;