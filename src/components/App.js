import React, { Component } from "react";
import { Provider } from "react-redux";
import M from "materialize-css";
import store from "../core/store";
import Header from "./dom/Header";
import Main from "./dom/Main";
import "material-design-icons/iconfont/material-icons.css";
import "../styles/css/global.css";

class App extends Component {
  componentDidMount() {
    M.Sidenav.init(document.querySelector(".sidenav"));
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
