import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextFrom'
import React, { useState } from 'react';
import Alert from './components/Alert';


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
    <div className='container my-4'>
    <Alert alert={alert}/>
    < TextForm showAlert={showAlert} heading="Enter the text below to Analyze" />
    {/* < About /> */}
    </div>
    </>
  );
}

export default App;
