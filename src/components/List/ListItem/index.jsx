import React from "react";
import classNames from "classnames";

import { useTodo } from "./utils/useTodo";

import EditIcon from "../../Icons/EditIcon";
import DeleteIcon from "../../Icons/DeleteIcon";
import Input from "../../Input";

import "./listItem.css";

const ListItem = ({ todo }) => {
  const { editable, title, setTitle, toggleEdit, toggleComplete, updateTodo, deleteTodo } =
    useTodo(todo);

  return (
    <li
      data-testid="item"
      className={classNames("listItem", {
        listItem_completed: todo.completed,
      })}
      onClick={() => !editable && toggleComplete()}
    >
      {editable ? (
        <form onSubmit={updateTodo}>
          <Input edit={editable} value={title} onChange={(ev) => setTitle(ev.target.value)} />
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
        <span className="listItem__icon" onClick={toggleEdit}>
          <EditIcon fill="#fff" width={24} height={24} />
        </span>
        <span className="listItem__icon" onClick={deleteTodo}>
          <DeleteIcon fill="#fff" />
        </span>
      </div>
    </li>
  );
};

export default ListItem;
