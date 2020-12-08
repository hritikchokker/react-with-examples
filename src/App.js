import React from "react";
import StartRating from "./components/StarRating";

export default function App() {
  return (
    <StartRating
      // totalStars={120}
      style={{ backgroundColor: "lightblue" }}
      onDoubleClick={e => alert("double click")}
    />
  );
}
