import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodoRequest } from "../../../../store/reducers/todoReducer/actions";

export const useEdit = (todo) => {
  const dispatch = useDispatch();

  const [editable, setEditable] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const toggleEditHandler = useCallback(
    (ev) => {
      ev.stopPropagation();
      setEditable(!editable);
      !!title && editable && dispatch(updateTodoRequest({ todo, title }));
    },
    [editable, dispatch, todo, title]
  );

  return {
    editable,
    setEditable,
    title,
    setTitle,
    toggleEdit: toggleEditHandler,
  };
};
