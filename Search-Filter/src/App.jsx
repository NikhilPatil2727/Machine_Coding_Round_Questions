import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const [debounce, setDebounce] = useState("");

  let item = ["apple", "banana", "watermilleon", "orange", "Milk"];

  useEffect(() => {
    let time = setTimeout(() => {
      setDebounce(search);
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  }, [search]);

  const filteredlist=item.filter((data)=>data.toLowerCase().includes(debounce.toLowerCase()))

  return (
    <>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {
        filteredlist.map((item)=>(
          <div>
            {item}
          </div>
        ))
      }
    </>
  );
}

export default App;
