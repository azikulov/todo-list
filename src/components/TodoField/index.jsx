import PropTypes from "prop-types";
import "./styles.scss";

function TodoField(props) {
  return (
    <form onSubmit={props.submitHandler} className="todo-field">
      <input type="text" placeholder="Ваше задание" className="todo-field__input" />
      <button type="submit" className="todo-field__button">
        Добавить
      </button>
    </form>
  );
}

TodoField.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default TodoField;
