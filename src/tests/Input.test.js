import React from "react";
import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

import Input from "../components/Input";

let container;

const onChange = jest.fn();

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Input component", () => {
  it("Input render", () => {
    act(() => {
      render(<Input />);
    });

    expect(screen.getByTestId("input")).toBeInTheDocument();
  });

  it("Input render without placeholder", () => {
    act(() => {
      render(<Input value="" onChange={onChange} />);
    });

    expect(screen.getByPlaceholderText("add todo")).toBeInTheDocument();
  });

  it("Input render with placeholder", () => {
    act(() => {
      render(<Input value="" onChange={onChange} placeholder="some placeholder" />);
    });

    expect(screen.getByPlaceholderText("some placeholder")).toBeInTheDocument();
  });

  it("Input render with value", () => {
    act(() => {
      render(<Input value="123" onChange={onChange} />);
    });

    expect(screen.getByDisplayValue("123")).toBeInTheDocument();
  });

  it("Input render without value", () => {
    act(() => {
      render(<Input value="" onChange={onChange} />);
    });

    expect(screen.getByDisplayValue("")).toBeInTheDocument();
  });

  it("OnChange work", () => {
    act(() => {
      render(<Input value="" onChange={onChange} />);
    });
    userEvent.type(screen.getByRole("textbox"), "React");
    expect(onChange).toBeCalledTimes(5);
  });
});
