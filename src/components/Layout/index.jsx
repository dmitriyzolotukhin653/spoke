import React from "react";
import Title from "../Title";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Title type="h1" title="Todo list" />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
