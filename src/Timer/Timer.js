import React, { useState } from "react";

function Timer() {
  let interval;
  let [seconds, setSeconds] = useState(60);

  function countdown() {
    interval = setInterval(() => {
      setSeconds(seconds--);
      if (!seconds) {
        clearInterval(interval);
        alert("Countdown finished");
      }
    }, 1000);
  }

  return (
    <div>
      <h3>This is the Short Timer: 25 Minutes</h3>
      <p>Press the button below to start the timer.</p>
      <button onClick={() => countdown()}>Start the Timer</button>
      <br />
      {seconds}
    </div>
  );
}

export default Timer;
