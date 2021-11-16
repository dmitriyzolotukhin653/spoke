import React from "react";
import { useDispatch } from "react-redux";

import { addTodoRequest } from "../../store/reducers/todoReducer/actions";

import Input from "../Input";

import "./form.css";

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTile] = React.useState("");

  const setTodoHandler = React.useCallback(
    async (ev) => {
      ev.preventDefault();

      setTile("");
      dispatch(addTodoRequest(title));
    },
    [dispatch, title]
  );

  return (
    <form className="form" onSubmit={setTodoHandler}>
      <Input
        placeholder="Write something..."
        value={title}
        onChange={({ target }) => setTile(target.value)}
      />
    </form>
  );
};

export default Form;
