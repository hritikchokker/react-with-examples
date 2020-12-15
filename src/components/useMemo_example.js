import React, { useState, useMemo, useEffect } from "react";

const words = useMemo(() => {
  const words = children.split(" ");
  return words;
}, []);
useEffect(() => {
  console.log("fresh render");
}, [words]);

function WordCount({ children = "" }) {
useAnyKeyToRender();
const words = useMemo(() => children.split(" "), [children]);
useEffect(() => {
console.log("fresh render");
}, [words]);
return (...);
}


const useJazzyNews = () => {
const [_posts, setPosts] = useState([]);
const addPost = post => setPosts(allPosts => [post, ...allPosts]);
const posts = useMemo(() => _posts, [_posts]);
useEffect(() => {
newPostChime.play();
}, [posts]);
useEffect(() => {
newsFeed.subscribe(addPost);
return () => newsFeed.unsubscribe(addPost);
}, []);
useEffect(() => {
welcomeChime.play();
return () => goodbyeChime.play();
}, []);
return posts;
};