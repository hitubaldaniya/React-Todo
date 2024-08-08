import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState({ name: "", completed: false });
  function submitHandler(e) {
    e.preventDefault();
    if (todo.name != "") setTodos([...todos, todo]);
    setTodo({ name: "", completed: false });
    // https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/
  }

  return (
    <form className={styles.todoForm} onSubmit={submitHandler}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          type="text"
          value={todo.name}
          placeholder="Enter a todo..."
          onChange={(e) =>
            setTodo({ name: e.target.value.trim(), completed: false })
          }
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
