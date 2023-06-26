import { useState } from 'react';
//import Contact from './components/Contact';
import About from './components/About';
import Navigation from './components/Navigation';
import Notification from './components/Notification';


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
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212121';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <div className="App">
      <Navigation mode={mode} toggleMode={toggleMode} />
      <Notification alert={alert}/>
      <About title="This is the About Page" mode={mode} />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
