import React from "react";
import ListItem from "./ListItem";

import "./list.css";

const List = () => {
  return (
    <ul className="list">
      <ListItem color="blue" />
      <ListItem color="green" />
      <ListItem color="orange" />
    </ul>
  );
};

export default List;
