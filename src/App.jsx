import TodoField from "@/components/TodoField";
import TodoList from "@/components/TodoList";
import TodoItem from "@/components/TodoItem";
import { useTodoContext } from "@/context";

function App() {
  const { addTodo, todos } = useTodoContext();

  return (
    <div className="container">
      <TodoField submitHandler={addTodo} />

      <TodoList>
        {todos.map((todo, index) => (
          <TodoItem {...todo} key={index} />
        ))}
      </TodoList>
    </div>
  );
}

export default App;
