import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  let count = 0;

  if (name) {
    count++;
  }
  if (email) {
    count++;
  }
  if (password) {
    count++;
  }

  let progressBar = (count / 3) * 100;

  return (
    <>
      <div style={{width:"500px"}}>
        <div
          style={{ widht: "300px", height: "20px", border: "1px solid Black" }}
        >
          <div
            style={{
              background: "green",
              height: "100%",
              width: progressBar + "%",
            }}
          ></div>
        </div>
      </div>

      <br />
      <br />

      <input
        type="text"
        placeholder="enter a name "
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="enter a email "
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="enter a password "
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </>
  );
}

export default App;
