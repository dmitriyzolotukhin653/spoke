import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { db } from "../../firebase";
import { todoSelector } from "../../store/reducers/todoReducer";
import {
  completeTodoRequest,
  deleteTodoRequest,
  todoFetch,
  todoLoading,
} from "../../store/reducers/todoReducer/actions";

import ListItem from "./ListItem";
import Spinner from "../Spinner";

import "./list.css";

const List = () => {
  const dispatch = useDispatch();
  const { todoList, loading, error } = useSelector(todoSelector);

  const toggleCompleteHandler = React.useCallback(
    async (todo) => dispatch(completeTodoRequest(todo)),
    [dispatch]
  );

  const deleteTodoHandler = React.useCallback(
    async (id, ev) => {
      ev.stopPropagation();
      dispatch(deleteTodoRequest(id));
    },
    [dispatch]
  );

  React.useEffect(() => {
    const q = query(collection(db, "todoList"), orderBy("createdAt", "desc"));

    dispatch(todoLoading);

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todoArr = [];
      querySnapshot.forEach((doc) => todoArr.push({ ...doc.data(), id: doc.id }));

      dispatch(todoFetch(todoArr));
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {loading && <Spinner />}
      {error && <p className="list__text">Something went wrong!</p>}
      {!loading && !!(todoList.length === 0) && <p className="list__text">The list is empty.</p>}

      <TransitionGroup component="ul" className="list">
        {!!todoList.length &&
          todoList.map((todo) => (
            <CSSTransition key={todo.id} timeout={500} classNames="item">
              <ListItem
                key={todo.createdAt}
                completedHandler={toggleCompleteHandler}
                deleteHandler={deleteTodoHandler}
                todo={todo}
              />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </>
  );
};

export default List;
