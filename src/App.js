import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Digit from "./components/Digit/Digit";
import "./App.css";
import Colon from "./components/Colon/Colon";

function App() {
  const date = new Date();
  const [minutes, setMinutes] = useState(date.getMinutes());
  const [hours, setHours] = useState(date.getHours());
  const [seconds, setSeconds] = useState( date.getSeconds());
  const [colon,setColon] = useState(true)

  const tick = ({ hours, minutes, seconds,colon}) => {
    setTimeout(() => {
      let newSecond = seconds + 1;
      let newMinutes = minutes;
      let newHours = hours;
      let newColon = !colon
      if (newSecond > 59) {
        newSecond = 0;
        newMinutes = newMinutes + 1;
      }
      if (newMinutes > 59) {
        newMinutes = 0;
        newHours = newHours + 1;
      }
      if (newHours > 23) {
        newHours = 0;
      }

      setSeconds(newSecond);
      setMinutes(newMinutes);
      setHours(newHours);
      setColon(newColon)
      tick({ hours: newHours, minutes: newMinutes, seconds: newSecond ,colon:newColon});
    }, 1000);
  };

  useEffect(() => {
    tick({ hours, minutes, seconds,colon });
  }, []);
  return (
    <div className="App">
      <div className="clock">
        <Digit>{hours}</Digit>
        <Colon active={colon}/>
        <Digit>{minutes}</Digit>
        <Colon active={colon} />
        <Digit>{seconds}</Digit>
        
      </div>
    </div>
  );
}

export default App;
