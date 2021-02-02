import "./App.css";
import Timer from "./Timer/Timer";

function App() {
  let currentDate = new Date();

  return (
    <div className="App">
      <h1>Welcome to the Pomodoro Timer App</h1>
      <h3>The current date and time:</h3>
      <div>{currentDate.toDateString()}</div>
      <Timer />
    </div>
  );
}

export default App;
