import { useState } from 'react';
//import Contact from './components/Contact';
import About from './components/About';
import Navigation from './components/Navigation';


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212121'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#ffffff'
    }
  }
  return (
    <div className="App">
      <Navigation mode={mode} toggleMode={toggleMode} />
      <About title="This is the About Page" mode={mode} />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
