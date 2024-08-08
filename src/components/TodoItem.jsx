import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem = ({ item, index, deleteHandler, completedHandler }) => {
  return (
    <>
      <li key={item.name}>
        <span className={item.completed ? styles.completed : ""}>
          {item.name}
        </span>
        <button
          className={styles.smartButton}
          onClick={() => deleteHandler(index)}
        >
          X
        </button>
        <button
          className={styles.smartButton}
          onClick={(e) => completedHandler(index)}
        >
          {item.completed ? "UnDone" : "Done"}
        </button>
      </li>
    </>
  );
};

export default TodoItem;
