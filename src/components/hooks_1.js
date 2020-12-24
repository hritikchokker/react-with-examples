import React, { useState, useEffect } from "react";

export default function Hooks_one() {
  const [posts, setPosts] = useState([]);
  const addPost = post => setPosts(allPosts => [post, ...allPosts]);
  useEffect(() => {
    // newsFeed.subscribe(addPost);
    // welcomeChime.play();
    // alert("component created");
    return () => {
      // alert("component destroyed");
      // newsFeed.unsubscribe(addPost);
      // goodbyeChime.play();
    };
  }, []);

  // useEffect(() => {
  //   newsFeed.subscribe(addPost);
  //   return () => newsFeed.unsubscribe(addPost);
  // }, []);
  // useEffect(() => {
  //   welcomeChime.play();
  //   return () => goodbyeChime.play();
  // }, []);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
