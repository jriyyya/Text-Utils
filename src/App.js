import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextFrom'

function App() {
  return (
    <>
    < Navbar />
    <div className='container my-4'>
    < TextForm heading="Enter the text below to Analyze" />
    {/* < About /> */}
    </div>
    </>
  );
}

export default App;
