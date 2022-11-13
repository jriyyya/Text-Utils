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
     
    const handleClearClick = () => {
        setText("")
    }

    const handleSpeak = () =>{
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toggle = document.getElementById('toggle')
        if(toggle.textContent ==="Speak"){
            toggle.innerHTML = "Stop!!"
            toggle.classList.add("btn-danger")
        }
        else{
            toggle.innerHTML="Speak"
            if(toggle.innerHTML=== "Speak"){
                window.speechSynthesis.cancel()
            }
            toggle.classList.remove("btn-danger")
        }
    }

    const handleFindChange = (e) => {
        findWord(e.target.value)
    }
    const handleReplaceChange = (e) => {
        console.log(replaceWord(e.target.value))
    }
    const handleReplaceClick = () => {
        let newText = text.replaceAll(fWord,rWord);
        setText(newText);
    }

    const handleDownloadText = (e) => {
        const element = document.createElement('a');
        const file = new Blob([text],{
            type:"text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download ="myFile.txt";
        element.click();
    }

    const handleExtraSpaces = () => {
        let newText = text.replace(/\s+/g,' ')
        setText(newText)
    }

    const [fWord,findWord] = useState('');
    const [rWord,replaceWord] = useState('');
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
        <button className='btn btn-primary mx-1' onClick={handleDownloadText}>Download Text</button>
        <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove extra space</button>
        <button className='btn btn-primary mx-1 'id="toggle" onClick={handleSpeak}>Speak</button>
        <button className='btn btn-danger mx-1' onClick={handleClearClick}>Clear Text</button>
      
    </div>
    <div className='container mt-4'>
        <h5>Find and Replace Word</h5>
    <div className='container d-flex flex-column py-2 border-top border-bottom border-dark'>
    <textarea className='my-1 w-25' value={fWord} onChange={handleFindChange} rows='1'></textarea>
    <textarea className='my-1 w-25' value={rWord} onChange={handleReplaceChange} rows='1'></textarea>
    <button className='btn btn-primary w-25' onClick={handleReplaceClick}>Replace</button>
    </div>
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



