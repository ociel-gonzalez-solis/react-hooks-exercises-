const initialState = [
  {
    id: 1,
    todo: "Eat",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "addTodo") return [...state, action.payload];
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Sleep",
  done: true,
};

const addTodoAction = {
  type: "addTodo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
