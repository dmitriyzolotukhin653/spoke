import React from "react";
import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Form from "../components/Form";

let container;

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
}));

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Form component", () => {
  it("should render Form", function () {
    act(() => {
      render(<Form />, container);
    });

    expect(screen.getByTestId("form")).toBeInTheDocument();
    expect(screen.getByTestId("input")).toBeInTheDocument();
  });
});
