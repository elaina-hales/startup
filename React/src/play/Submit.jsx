import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
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
        <form>
            <input type="text" disabled={isDisabled}/>
        </form>
      );
});

export default Submit;

// <input className="entry" value={formData}/><input className="entry" value={formData}/><input className="entry" value={formData}/><input className="entry" value={formData}/>

// let initialValues = {}

// let elements = document.getElementsByClassName("entry")
    // let arr = [].slice.call(elements);

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

// const formRef = useRef(null);

    // const handleSubmit = (event) => {
    //     if (Timer() === "00:00") {
    //         // formRef.current.submit();
    //         console.log(formData); 
    //     }
    // };
    
    // const handleChange = (e) => {
    //     const val = e.target;
    //     setFormData(prevState => ({
    //         ...prevState,
    //         val,
    //       }));
    // };

    // useEffect(() => {
    //     // const timeoutId = setTimeout(() => {
    //     //   if (formRef.current) {
    //     //     formRef.current.submit();
    //     //   }
    //     // }, 5000); // 5 seconds timeout
    
    //     // return () => clearTimeout(timeoutId); // Clear timeout on unmount
    //   }, []);
    