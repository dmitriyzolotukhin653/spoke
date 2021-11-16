import createSagaMiddleware from "@redux-saga/core";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootSaga from "./sagas";
import { todoReducer } from "./reducers/todoReducer";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  todo: todoReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
