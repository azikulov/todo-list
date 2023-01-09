import { createContext, useContext } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const Context = createContext();

function useTodoContext() {
  return useContext(Context);
}

function TodoListProvider(props) {
  const [todos, setTodos] = useState([
    {
      id: 1,
      value: "Сделать бутерброд",
    },
    {
      id: 2,
      value: "Сделать домашку",
    },
  ]);

  function updateTodos(value) {
    setTodos((prevState) => [...prevState, value]);
  }

  function addTodo(event) {
    event.preventDefault();

    const id = todos.length + 1;
    const value = event.target[0].value;

    if (value) {
      updateTodos({ id, value });
      event.target[0].value = "";
    }
  }

  function deleteTodo(id) {
    return () => {
      const filtered = todos.filter((todo) => todo.id !== id);
      setTodos(filtered);
    };
  }

  return <Context.Provider value={{ deleteTodo, todos, addTodo }}>{props.children}</Context.Provider>;
}

TodoListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useTodoContext };
export default TodoListProvider;
