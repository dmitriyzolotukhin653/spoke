import { addDoc, collection, deleteDoc, doc, updateDoc } from "@firebase/firestore";
import { put, takeLatest, call } from "@redux-saga/core/effects";

import { db } from "../../firebase";
import { todoError, todoSuccess, TODO_ACTIONS } from "../reducers/todoReducer/actions";

function* getTodoSagaWorker(action) {
  try {
    const list = action.payload;

    yield put(todoSuccess(list));
  } catch (error) {
    yield put(todoError);
  }
}

function* addTodoSagaWorker(action) {
  try {
    const title = action.payload;
    const todoCol = yield call(collection, db, "todoList");
    const todo = {
      title,
      createdAt: Date.now(),
      completed: false,
    };

    yield call(addDoc, todoCol, todo);
  } catch (error) {
    yield put(todoError);
  }
}

function* deleteSagaWorker(action) {
  try {
    const id = action.payload;
    const todoDoc = yield call(doc, db, "todoList", id);

    yield call(deleteDoc, todoDoc);
  } catch (error) {
    yield put(todoError);
  }
}

function* toggleCompleteSagaWorker(action) {
  try {
    const todo = action.payload;
    const todoDoc = yield call(doc, db, "todoList", todo.id);

    yield call(updateDoc, todoDoc, {
      completed: !todo.completed,
    });
  } catch (error) {
    yield put(todoError);
  }
}

function* updateTodoSagaWorker(action) {
  try {
    const { todo, title } = action.payload;
    const todoDoc = yield call(doc, db, "todoList", todo.id);

    yield call(updateDoc, todoDoc, { title });
  } catch (error) {
    yield put(todoError);
    console.log(error);
  }
}

export default function* todoSagaWatcher() {
  yield takeLatest(TODO_ACTIONS.FETCH, getTodoSagaWorker);
  yield takeLatest(TODO_ACTIONS.ADD_TODO_REQUEST, addTodoSagaWorker);
  yield takeLatest(TODO_ACTIONS.DELETE_TODO_REQUEST, deleteSagaWorker);
  yield takeLatest(TODO_ACTIONS.UPDATE_TODO_REQUEST, updateTodoSagaWorker);
  yield takeLatest(TODO_ACTIONS.COMPLETE_TODO_REQUEST, toggleCompleteSagaWorker);
}
