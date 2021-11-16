import React from "react";

import "./title.css";

const Title = ({ type, title }) => {
  switch (type) {
    case "h1":
    default: {
      return <h1 className="h1">{title}</h1>;
    }
    case "h2": {
      return <h2>{title}</h2>;
    }
    case "h3": {
      return <h3>{title}</h3>;
    }
  }
};

export default Title;
