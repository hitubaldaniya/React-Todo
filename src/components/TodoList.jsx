import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = ({ todos, setTodos }) => {
  function deleteItem(item) {
    setTodos(
      todos.filter((todo, index) => {
        return index != item;
      })
    );
  }
  function completedHandler(item) {
    const completed = todos.map((todo, index) => {
      return index === parseInt(item)
        ? { ...todo, completed: !todo.completed }
        : todo;
      // if (index === parseInt(item)) todo.completed = !todo.completed;
      // return todo;
    });
    const sorted = completed
      .slice()
      .sort((a, b) => Number(a.completed) - Number(b.completed));
    setTodos(sorted);
    console.log(sorted);
    // setTodos(completed);
  }

  const filteredTodos = Object.keys(todos).map((item) => (
    <TodoItem
      key={item}
      item={todos[item]}
      index={item}
      deleteHandler={deleteItem}
      completedHandler={completedHandler}
    />
  ));
  return (
    <div className={filteredTodos.length && styles.list}>
      <ul>{filteredTodos}</ul>
    </div>
  );
};

export default TodoList;
