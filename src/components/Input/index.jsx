import React from "react";
import classNames from "classnames";

import "./input.css";

const Input = ({ placeholder, value, onChange, edit, ...props }) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    edit && ref.current.focus();
  }, [edit]);

  return (
    <input
      className={classNames("input", {
        input_edit: edit,
      })}
      ref={ref}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
