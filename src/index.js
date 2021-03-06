import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from "store/index.jsx";
// import "assets/css/style.css";
import App from "./App.jsx";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
