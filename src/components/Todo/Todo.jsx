import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "../Todo/TodoItem/TodoItem";
import { addTodo, deleteTodo } from "../../slices/todoSlice";
import styles from "./Todo.module.css";

const Todo = () => {
  const todos = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState("");
  

  const handleAddBtn = () => {
    dispatch(addTodo(inputVal));
    setInputVal("");
  };

  const dltTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={styles.todo}>
      <p className="read-the-docs">Include your todos in this list.</p>
      <h1>
        <span className="badge rounded-pill bg-secondary">Todo</span>
      </h1>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <input
              placeholder="Enter Todo Name"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-info btn-sm"
              onClick={handleAddBtn}
              disabled={inputVal.trim().length === 0}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
      {todos.map((todo, index) => {
        return (
          <div className="accordion" id="accordionExample" key={index} title={todo.name} >
            <TodoItem
              key={index}
              keyIndex={index}
              todo={todo}
              handleDeleteBtn={dltTodo}
              accordionExample="accordionExample"
              
            />
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
