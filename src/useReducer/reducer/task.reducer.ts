import React from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

type TaskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

export const getTasksInitialState = (): TaskState => {
  return {
    todos: [],
    completed: 0,
    pending: 0,
    length: 0,
  };
};

export const taskReducer: React.Reducer<TaskState, TaskAction> = (
  state,
  action,
) => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
        length: state.todos.length + 1,
        pending: state.pending + 1,
      };
    }

    case "DELETE_TODO": {
      const currentTodos = state.todos.filter(
        (todo) => todo.id !== action.payload,
      );
      return {
        ...state,
        todos: currentTodos,
        length: currentTodos.length,
        completed: currentTodos.filter((todo) => todo.completed).length,
        pending: currentTodos.filter((todo) => !todo.completed).length,
      };
    }

    case "TOGGLE_TODO": {
      const currentTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });

      return {
        ...state,
        todos: currentTodos,
        completed: currentTodos.filter((todo) => todo.completed).length,
        pending: currentTodos.filter((todo) => !todo.completed).length,
      };
    }

    default:
      return state;
  }
};
