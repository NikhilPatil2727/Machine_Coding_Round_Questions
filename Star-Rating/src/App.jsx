import { useState } from "react";

import "./App.css";
function App() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [RatingList, setRatingList] = useState([]);

  const handle = () => {
    setRatingList([...RatingList, rating]);
    setRating(0);
  };

  const avg =
    RatingList.length === 0
      ? 0
      : (RatingList.reduce((acc, curr) => acc + curr, 0) /
        RatingList.length).toFixed(1);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "80px",
        }}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            style={{
              fontSize: "50px",
              cursor: "pointer",
              color: (rating || hover) >= star ? "gold" : "gray",
            }}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            ★
          </span>
        ))}
      </div>
      <div>
        <button
          style={{ marginLeft: "230px", marginTop: "50px" }}
          onClick={handle}
        >
          Submit Rating
        </button>
        <span style={{ marginLeft: "20px" }}>Average Rating {avg}</span>
        <span style={{ marginLeft: "20px" }}>Rating {rating}</span>
      </div>
    </div>
  );
}

export default App;
