import React from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";

import { updateTodoRequest } from "../../../store/reducers/todoReducer/actions";

import EditIcon from "../../Icons/EditIcon";
import DeleteIcon from "../../Icons/DeleteIcon";
import Input from "../../Input";

import "./listItem.css";

const ListItem = ({ todo, completedHandler, deleteHandler }) => {
  const dispatch = useDispatch();

  const [editable, setEditable] = React.useState(false);
  const [value, setValue] = React.useState(todo.title);

  const toggleEditHandler = React.useCallback(
    (ev) => {
      ev.stopPropagation();
      setEditable(!editable);
      !!value && editable && dispatch(updateTodoRequest({ todo, value }));
    },
    [editable, dispatch, todo, value]
  );

  const changeTodoTitleHandler = React.useCallback((ev) => {
    setValue(ev.target.value);
  }, []);

  const updateTodoHandler = React.useCallback(
    (ev) => {
      ev.preventDefault();
      setEditable(false);
      !!value && dispatch(updateTodoRequest({ todo, value }));
    },
    [dispatch, todo, value]
  );

  return (
    <li
      className={classNames("listItem", {
        listItem_completed: todo.completed,
      })}
      onClick={() => !editable && completedHandler(todo)}
    >
      {editable ? (
        <form onSubmit={updateTodoHandler}>
          <Input edit={editable} value={value} onChange={changeTodoTitleHandler} />
        </form>
      ) : (
        <p
          className={classNames("listItem__text", {
            listItem__text_completed: todo.completed,
          })}
        >
          {todo.title}
        </p>
      )}

      <div className="listItem__iconWrapper">
        <span className="listItem__icon" onClick={toggleEditHandler}>
          <EditIcon fill="#fff" width={24} height={24} />
        </span>
        <span className="listItem__icon" onClick={(ev) => deleteHandler(todo.id, ev)}>
          <DeleteIcon fill="#fff" />
        </span>
      </div>
    </li>
  );
};

export default ListItem;
