export const TODO_ACTIONS = {
  FETCH: "todo/fetch",
  LOADING: "todo/loading",
  SUCCESS: "todo/success",
  ERROR: "todo/error",
  ADD: "todo/addNewTodo",
  ADD_TODO_REQUEST: "todo/addTodoRequest",
  DELETE_TODO_REQUEST: "todo/deleteTodoRequest",
  COMPLETE_TODO_REQUEST: "todo/completeTodoRequest",
  UPDATE_TODO_REQUEST: "todo/updateTodoRequest",
};

export const todoLoading = {
  type: TODO_ACTIONS.LOADING,
};

export const todoError = {
  type: TODO_ACTIONS.ERROR,
};

export const todoFetch = (list) => ({
  type: TODO_ACTIONS.FETCH,
  payload: list,
});

export const todoSuccess = (todoList) => ({
  type: TODO_ACTIONS.SUCCESS,
  payload: todoList,
});

export const addNewTodo = (newTodo) => ({
  type: TODO_ACTIONS.ADD,
  payload: newTodo,
});

export const addTodoRequest = (todo) => ({
  type: TODO_ACTIONS.ADD_TODO_REQUEST,
  payload: todo,
});

export const deleteTodoRequest = (id) => ({
  type: TODO_ACTIONS.DELETE_TODO_REQUEST,
  payload: id,
});

export const completeTodoRequest = (todo) => ({
  type: TODO_ACTIONS.COMPLETE_TODO_REQUEST,
  payload: todo,
});

export const updateTodoRequest = (options) => ({
  type: TODO_ACTIONS.UPDATE_TODO_REQUEST,
  payload: options,
});
