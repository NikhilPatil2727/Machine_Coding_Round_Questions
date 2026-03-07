import { useState, useRef } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const ref = useRef(null);
  let Start = () => {
    if (ref.current != null) {
      return;
    }
    ref.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };
  let Stop = () => {
      clearInterval(ref.current)
      ref.current=null;
  };
  let Reset = () => {
   clearInterval(ref.current)
      ref.current=null;

      setTime(0);
  };
  return (
    <div className="App">
      {time}
      <br />
      <br />
      <button onClick={Start}>Start</button>
      <br />
      <br />
      <button onClick={Stop}>Stop</button>
      <br />
      <br />
      <button onClick={Reset}>Reset</button>
      <br />
      <br />
    </div>
  );
};

export default App;
