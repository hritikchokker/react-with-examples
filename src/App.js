import React from "react";
import StartRating from "./components/StarRating";

export default function App() {
  return (
    <div>
      <h1> React app explaining basic and advanced concepts</h1>
      <div>
        <StartRating
          style={{ backgroundColor: "lightblue" }}
          onDoubleClick={e => alert("you just double clicked")}
        />
      </div>
    </div>
  );
}
