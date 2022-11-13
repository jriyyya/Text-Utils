import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextFrom'
import React, { useState } from 'react';
import Alert from './components/Alert';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';




function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=> {
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }


  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black'
      document.body.style.color='white'
      showAlert('Dark mode has been enabled','success')
      
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showAlert('Light mode has been enabled','success')
      
    }

  }
  return (
    <>
    < Navbar mode={mode} toggleMode={toggleMode}/>
    <div className="container">
    <Alert alert={alert}/>
    </div>
    <Router>
    <Routes>
          <Route path="/" element={< TextForm showAlert={showAlert} heading="Enter the text below to Analyze" />} />
          <Route path="/About" element={<About />} />
    </Routes>
    </Router>
    

    </>
  );
}



export default App;
