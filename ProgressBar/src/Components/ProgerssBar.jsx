import { useState, useEffect } from "react";
const ProgressBar = () => {
  const [progress, setProgress] = useState(10);


  useEffect(() => {
    let id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(id);
          return 100;
        }
        return p + 10;
      });
    }, 500);
  }, []);

  console.log(progress)
  return (
    <div>
      <div
        style={{ width: "400px", height: "30px", border: "4px solid black" }}
      >
        <div
          style={{ height: "100%", background: "green", width: progress + "%" }}
        ></div>
      </div>

      {progress}
    </div>
  );
};

export default ProgressBar;
