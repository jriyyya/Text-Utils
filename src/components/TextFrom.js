import React, { useState } from "react";

export default function TextFrom(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case","success")

  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case","success")

  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Cleared Text","danger")

  };

  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toggle = document.getElementById("toggle");
    if (toggle.textContent === "Speak") {
      toggle.innerHTML = "Stop!!";
      toggle.classList.add("btn-danger");
    } else {
      toggle.innerHTML = "Speak";
      if (toggle.innerHTML === "Speak") {
        window.speechSynthesis.cancel();
      }
      toggle.classList.remove("btn-danger");
    }
  };

  const handleFindChange = (e) => {
    findWord(e.target.value);
  };
  const handleReplaceChange = (e) => {
    console.log(replaceWord(e.target.value));
  };
  const handleReplaceClick = () => {
    let newText = text.replaceAll(fWord, rWord);
    setText(newText);
  };

  const handleDownloadText = (e) => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
  };

  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ");
    setText(newText);
    props.showAlert("Removed Extra Spaces","success")
  };

  const [fWord, findWord] = useState("");
  const [rWord, replaceWord] = useState("");
  const [text, setText] = useState("");
  return (
    <>
      {/* <div className='bg-dark text-light'> */}
      <div className="container py-2">
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="8"
            style={{ backgroundColor: props.mode === "dark" ? "grey" : "white" }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDownloadText}>
          Download Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove extra space
        </button>
        <button
          className="btn btn-primary mx-1 "
          id="toggle"
          onClick={handleSpeak}
        >
          Speak
        </button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container py-2 mt-4">
        <h5>Find and Replace Word</h5>
        <div className={`container d-flex flex-column py-2 border-top border-bottom border-${props.mode}`}>
          <textarea
            className="my-1 w-25"
            value={fWord}
            onChange={handleFindChange}
            rows="1"
          ></textarea>
          <textarea
            className="my-1 w-25"
            value={rWord}
            onChange={handleReplaceChange}
            rows="1"
          ></textarea>
          <button className="btn btn-primary w-25" onClick={handleReplaceClick}>
            Replace
          </button>
        </div>
      </div>

      <div className="container py-2 my-4">
        <h4>Your text Summary</h4>
        <p className={`border-${props.mode} border-top`}>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p className={`border-bottom border-${props.mode}`}>{0.008 * text.split(" ").length} Minutes Read</p>
        <h5>Preview</h5>
        <p className={`border-bottom border-${props.mode} border-top py-2`}>{text.length>0?text:"Enter Something to preview here"}</p>
      </div>
      {/* </div> */}
    </>
  );
}
