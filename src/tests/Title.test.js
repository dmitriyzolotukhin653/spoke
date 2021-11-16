import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Title from "../components/Title";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("render with or without title", () => {
  act(() => {
    render(<Title />, container);
  });

  expect(container.textContent).toBe("");

  act(() => {
    render(<Title title="Hello" />, container);
  });

  expect(container.textContent).toBe("Hello");

  act(() => {
    render(<Title title="World" />, container);
  });

  expect(container.textContent).toBe("World");
});
