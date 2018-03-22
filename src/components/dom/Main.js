import React from "react";
import Posts from "./../Posts";
import PostForm from "./../Postform";
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <main>
    <div className="container">
      <Switch>
        <Route exact path="/" component={PostForm} />
        <Route exact path="/about" component={Posts} />
      </Switch>
    </div>
  </main>
);

export default Main;
