import React, { useState } from "react";
import AppName from "./AppName";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import WelcomeMsg from "./WelcomeMsg";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const OnClickButton = (todoName, todoDate) => {
    if (todoName !== "" && todoDate !== "") {
      // console.log(todoName, todoDate);

      const newTodo = {
        name: todoName,
        date: todoDate,
        id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const handleDeletebutton = (todoId) => {
    // console.log("delete button clicked", index);
    const newTodos = todos.filter((item) => item.id !== todoId);
    setTodos(newTodos);
  };

  return (
    <center id="todo-container">
      <AppName />
      <div className="items-container">
        <AddTodo handleSubmit={OnClickButton} />
        {todos.length <= 0 && <WelcomeMsg></WelcomeMsg>}
        {todos.map((item, index) => (
          <TodoItem
            key={index}
            name={item.name}
            date={item.date}
            id={item.id}
            handleDeletebutton={handleDeletebutton}
          />
        ))}
      </div>
    </center>
  );
};

export default Todo;
