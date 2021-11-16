import React from "react";
import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ListItem from "../components/List/ListItem";

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

const todo = [{ title: "html", completed: true }];

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
}));

describe("ListItem component", () => {
  it("List item render", () => {
    act(() => {
      render(<ListItem todo={todo} />);
    });

    expect(screen.getByTestId("item")).toBeInTheDocument();
  });

  it("List item render without form", () => {
    act(() => {
      render(<ListItem todo={todo} />);
    });

    expect(screen.queryByRole("form")).toBeNull();
  });
});
