import './App.css';


import React, {useState} from 'react';

import Welcome from './components/Welcome';



function App() {

  
  const [text, settext] = useState("");

  const handleOnChange = (event) => {
    settext(event.target.value);
  }

  const [mode,setMode] = useState('light');

  const toggleModle = () => {
    if(mode ==='light'){
      setMode("dark");
      document.body.style.backgroundColor = 'yellow';
      document.body.style.backgroundColor = 'white';
     }
     else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.backgroundColor = 'black';
     }
  }
  return(
    <>
    <div className='septs'>
    <p>Enter your Name
      <input type="text" className='max-2' value={text} onChange={handleOnChange}/>
    </p>
    <Welcome name = {text}/>
    </div>

    </>
  );
}

export default App;
