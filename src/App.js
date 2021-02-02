import "./App.css";

function App() {
  let currentDate = new Date();

  return (
    <div className="App">
      <h1>Welcome to the Pomodoro Timer App</h1>
      <h3>The current date and time:</h3>
      <div>{currentDate.toDateString()}</div>
    </div>
  );
}

export default App;
