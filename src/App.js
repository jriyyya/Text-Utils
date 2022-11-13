import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextFrom'
import React, { useState } from 'react';


function App() {
  const [mode,setMode] = useState('light');

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black'
      document.body.style.color='white'
      
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      
    }

  }
  return (
    <>
    < Navbar mode={mode} toggleMode={toggleMode}/>
    <div className='container my-4'>
    < TextForm heading="Enter the text below to Analyze" />
    {/* < About /> */}
    </div>
    </>
  );
}

export default App;
