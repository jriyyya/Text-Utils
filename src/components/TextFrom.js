import React, { useState } from 'react'



export default function TextFrom(props) {
    const handleUpClick = () => {
       let newText = text.toUpperCase();
       setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
     }

    const [text , setText] = useState('');
  return (
    <>
    <div className='container'>
        <h3>{props.heading}</h3>
        <div className='mb-3'>
            <textarea className='form-control' onChange={handleOnChange} value={text} id="myBox" rows="10"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-1' onClick={handleLowerClick}>Convert to LowerCase</button>
      
    </div>
    <div className='container my-4'>
        <h4>Your text Summary</h4>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h5>Preview</h5>
        <p>{text}</p>
    </div>
    </>
  )
}



