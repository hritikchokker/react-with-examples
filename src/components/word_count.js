import React, { useState, useEffect } from "react";

function WordCount({ children = "" }) {
  useAnyKeyToRender();
  const words = children.split(" ");
  useEffect(() => {
    console.log("fresh render");
  }, [words]);
  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  );
}

function App() {
  return <WordCount>You are not going to believe this but...</WordCount>;
}
