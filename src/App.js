import React from "react";
import StartRating from "./components/StarRating";

export default function App() {
  return (
    <StartRating
      style={{ backgroundColor: "lightblue" }}
      onDoubleClick={e => alert("you just double clicked")}
    />
  );
}
