import { TODO_ACTIONS } from "./actions";

const initialState = {
  todoList: [],
  loading: false,
  error: false,
};

export const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TODO_ACTIONS.LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case TODO_ACTIONS.SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        todoList: payload,
      };
    }
    case TODO_ACTIONS.ADD: {
      return {
        ...state,
        todoList: [payload, ...state.todoList],
      };
    }
    case TODO_ACTIONS.ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default:
      return state;
  }
};

export const todoSelector = (state) => state.todo;
