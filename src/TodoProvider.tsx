import { ReactNode, useReducer } from "react";
import TodoContext from "./context/todoContext";
import todoReducer from "./reducers/TodoReducer";

interface Props {
  children: ReactNode;
}

const TodoProvider = ({ children }: Props) => {
  const [todos, todoDispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{todos,todoDispatch}}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;