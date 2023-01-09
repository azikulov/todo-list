import PropTypes from "prop-types";
import "./styles.scss"

function TodoList(props) {
  return <div className="todo-list">{props.children}</div>;
}

TodoList.propTypes = {
  children: PropTypes.node,
};

export default TodoList;
