import './App.css';
import Bottom from './Bottom';
// import {  Routes, Route } from "react-router-dom";
import Home from './Home';
import Nxtone from './Nxtsession';
import Session from './Session';
import Thirdsession from './Session3';


function App() {
  return (
   <div className='app'>
    <Home />
    <Session />
    <Bottom />
    <Nxtone />
    <Thirdsession />
   </div>
  
  );
}

export default App;
