import { Outlet } from 'react-router-dom';
import { CountdownContext } from './context/CountdownContext';
import { useContext } from 'react';

import './App.css';

import back from "./assets/countdown_back.jpg";

function App() {

  const {event} = useContext(CountdownContext);

  let eventImage = null;

  if(event) eventImage= event.image;

  return (
    <div className="app" style={eventImage ? {backgroundImage: `url(${eventImage})`} : {backgroundImage: `url(${back})`}}>
      <div className="container">
        
        <Outlet />
      </div>
    </div>
  )
}

export default App
