import React, { useEffect, useState } from "react";
import style from "./Todo.module.css";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const completed = todos.filter((todo) => todo.completed).length;
  return (
    <div className={style.todo}>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completed={completed} total={todos.length} />
    </div>
  );
};

export default Todo;
