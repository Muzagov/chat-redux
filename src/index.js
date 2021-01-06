import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import { Provider } from "react-redux";
import "material-design-icons/iconfont/material-icons.css";
import { store } from "./redux/configureStore";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
