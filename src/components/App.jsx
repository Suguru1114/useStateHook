import React, { useEffect, useState } from "react";
function App() {

  const [time, setTime] = useState("");
  const getTime = () => {
    let currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  };

  useEffect(function() {
    const intervalId = setInterval(getTime, 1000);
    return function() {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures that useEffect runs only once after initial render

  return (
    <div className="container">
      <h1>Time</h1>
      <p>{time}</p>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;