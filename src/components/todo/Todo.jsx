import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./todosSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();

  const [inputvalue, setInputvalue] = useState('');

  const handleInputChange = (e) => {
    // console.log(e.target.value)
    setInputvalue(e.target.value)
  }

  const handleCompleted = (id) => {
    dispatch(toggleTodo(id))
  }
  
  return (
    <div>
      <h1>Todo Lists</h1>
      <table>
        <thead>
          <tr>
            <th>
              <input value={inputvalue} onChange={handleInputChange} placeholder="Enter Todo Name" />
            </th>
            <th>
              <button disabled={inputvalue.trim().length == 0} onClick={() => dispatch(addTodo(inputvalue))}>ADD</button>
            </th>
          </tr>
          <tr>
            <th>Completed?</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <td><input type="checkbox" value={todo.completed} onChange={() => handleCompleted(todo.id)} /></td>
                {todo.completed ? <td><strike>{todo.name}</strike></td> : <td>{todo.name}</td>}
                <td>
                  <button onClick={() => dispatch(deleteTodo(todo.id))}>DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
