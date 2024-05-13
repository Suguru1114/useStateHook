import React, { useState } from "react";
function App() {

  const [time, setTime] = useState("");
  const getTime = () => {
    let currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  };

  return (
    <div className="container">
      <h1>TIME</h1>
      <p>{time}</p>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;