import PropTypes from "prop-types";
import { useTodoContext } from "@/context";
import "./styles.scss";

function TodoItem(props) {
  const { deleteTodo } = useTodoContext();

  return (
    <div className="todo-item">
      <span className="todo-item__count">{props.id}</span>
      <span className="todo-item__value">{props.value}</span>
      <button onClick={deleteTodo(props.id)} type="button" className="todo-item__button">
        Удалить
      </button>
    </div>
  );
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
};

export default TodoItem;
