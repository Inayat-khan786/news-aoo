import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import BTN from './Components/BTN';
import About from './Components/About';
import './Components/BTN.css';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import { BrowserRouter,Route,Routes, } from "react-router-dom";




function App() {
  const [mode, setmode] = useState('info')
  const [text, settext] = useState('dark')
  const [alert, setAlert] = useState(null)

  let showAlert = (massage,type)=>{

setAlert({
msg : massage,
type :type
})


setTimeout(() => {
  setAlert(null)

}, 1500);

  }


let togglemode = ()=>{
if(mode=='info' && text=='dark'){
setmode('dark')
settext('light')
document.body.style.backgroundColor='rgb(59 67 88)'
showAlert("Dark mode has been enable","success");


}
else{

setmode('info')
settext('dark')
document.body.style.backgroundColor='white'
showAlert("Light mode has been enable","success");

}




}


  return (
 <BrowserRouter>
<Navbar title='prop' 
home ='Home'  mode={mode} togglemode={togglemode} text={text} />
<Alert alert={alert}/>
{/* 
<About/> 

<BTN showAlert={showAlert} heading ="Enter the text to analyze  below"  text={text} mode={mode} /> 
*/}

<Routes>
<Route exact path="/" element={<BTN showAlert={showAlert} heading ="Enter the text to analyze  below"  text={text} mode={mode} />}/>
<Route exact path="/About" element={<About/> }/>





      </Routes>



</BrowserRouter>

  );
  
}

export default App;
