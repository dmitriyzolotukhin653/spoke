import { useCallback } from "react";
import { useDispatch } from "react-redux";

import {
  completeTodoRequest,
  deleteTodoRequest,
} from "../../../../store/reducers/todoReducer/actions";
import { useEdit } from "./useEdit";

export const useTodo = (todo) => {
  const dispatch = useDispatch();
  const { editable, title, setTitle, toggleEdit } = useEdit(todo);

  const toggleCompleteHandler = useCallback(async () => {
    dispatch(completeTodoRequest(todo));
  }, [todo, dispatch]);

  const updateTodoHandler = useCallback(
    (ev) => {
      ev.preventDefault();
      toggleEdit(ev);
    },
    [toggleEdit]
  );

  const deleteTodoHandler = useCallback(
    async (ev) => {
      ev.stopPropagation();
      dispatch(deleteTodoRequest(todo.id));
    },
    [dispatch, todo]
  );

  return {
    editable,
    title,
    setTitle,
    toggleEdit: toggleEdit,
    toggleComplete: toggleCompleteHandler,
    updateTodo: updateTodoHandler,
    deleteTodo: deleteTodoHandler,
  };
};
