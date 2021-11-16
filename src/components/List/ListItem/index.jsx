import React from "react";
import classNames from "classnames";

import "./listItem.css";
import EditIcon from "../../Icons/EditIcon";
import DeleteIcon from "../../Icons/DeleteIcon";

const ListItem = ({ color }) => {
  return (
    <li
      className={classNames("listItem", {
        listItem_blue: color === "blue",
        listItem_green: color === "green",
        listItem_orange: color === "orange",
      })}
    >
      <span>Some text todo</span>
      <div className="listItem__iconWrapper">
        <span className="listItem__icon">
          <EditIcon fill="#fff" width={24} height={24} />
        </span>
        <span className="listItem__icon">
          <DeleteIcon fill="#fff" />
        </span>
      </div>
    </li>
  );
};

export default ListItem;
