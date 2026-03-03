import { useState } from "react";
import { ThemeContext } from "./Global";
import "./App.css";
import A from "./Components/A";

function App() {
  const [theme, setTheme] = useState("lgiht");

  let ToggleTheme = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <ThemeContext.Provider value={{theme,setTheme}}>
        <div className={theme} style={{ height: "100vh" }}>
          <button onClick={ToggleTheme}>Toggle Theme</button>
             <A/>
        </div>
     

      </ThemeContext.Provider>
    </>
  );
}

export default App;
