import React, { useState } from "react";

function Timer() {
  let interval;
  let [seconds, setSeconds] = useState(0);
  let [shortPomo, setShortPomo] = useState(1500);

  function countdown() {
    interval = setInterval(() => {
      setSeconds(shortPomo % 60);
      Math.floor(setShortPomo(shortPomo--));
      if (!shortPomo) {
        clearInterval(interval);
        alert("Countdown finished");
      }
    }, 1000);
  }

  return (
    <div>
      <h3>This is the Short Timer: 25 Minutes</h3>
      <p>Press the button below to start the timer.</p>
      <button onClick={countdown}>Start the Timer</button>
      <br />
      <p>
        {(shortPomo / 60).toFixed(0)}:{seconds >= 10 ? seconds : "0" + seconds}{" "}
        left!
      </p>
    </div>
  );
}

export default Timer;
