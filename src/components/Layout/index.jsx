import React from "react";

import Title from "../Title";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Title title="Todo list" />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
