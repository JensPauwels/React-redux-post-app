import React from "react";
import Posts from "./../Posts";
import PostForm from "./../Postform";

const Main = () => (
  <main>
    <div className="container">
      <PostForm />
      <Posts />
    </div>
  </main>
);

export default Main;
