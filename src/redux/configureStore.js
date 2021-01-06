// Создание логгера

import { createLogger } from "redux-logger/src";
import { applyMiddleware, combineReducers, createStore } from "redux";
import contacts from "./reducers/contacts";
import application from "./reducers/application";
import profile from "./reducers/profile";
import chat from "./reducers/chat";
import thunk from "redux-thunk";

const logger = createLogger({
  collapsed: true,
  diff: true,
});

// Комбинирование редюсеров

const rootReducer = combineReducers({ contacts, application, profile, chat });

// Создание и настройка стор

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
