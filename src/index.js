import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";
import contacts from "./redux/reducers/contacts";
import "material-design-icons/iconfont/material-icons.css";
import application from "./redux/reducers/application";
import chat from "./redux/reducers/chat";
import profile from "./redux/reducers/profile";

// Создание логгера

const logger = createLogger({
  collapsed: true,
  diff: true,
});

// Комбинирование редюсеров

const rootReducer = combineReducers({ contacts, application, profile, chat });

// Создание и настройка стор

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
