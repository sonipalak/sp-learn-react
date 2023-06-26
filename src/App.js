import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Contact from './components/Contact';
import About from './components/About';
import Navigation from './components/Navigation';
import Notification from './components/Notification';
import Home from './components/Home';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (Massage, type) => {
    setAlert({
      msg: Massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212121';
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
      <Navigation mode={mode} toggleMode={toggleMode} />
      <Notification alert={alert} />
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About showAlert={showAlert} title="This is the About Page" mode={mode} />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
