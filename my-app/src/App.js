import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Card';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState("");


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert("");
    }, 1000);
  }

  const removeBodyClasses = () =>{
   document.body.classList.remove('bg-light')
   document.body.classList.remove('bg-dark')
   document.body.classList.remove('bg-success')
   document.body.classList.remove('bg-primary')
   document.body.classList.remove('bg-warning')
   document.body.classList.remove('bg-danger')

  }
  const toggleUp = (cls) => {
    removeBodyClasses();
     document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#232121';
      showAlert("Dark mode enable", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enable", "success");
    }
  }


  return (
    <Router>
      <div className="App">
        <NavBar title="React" about="About us" mode={mode} togglemode={toggleUp} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Card heading='Enter text here' showAlert={showAlert} mode={mode}/>} />

          {/* <div className="container">
            <div className="row">
              <div className="col mx-4 my-4">
                <Card heading='Enter text here' showAlert={showAlert} mode={mode} />
              </div>
                
            </div>
          </div> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
