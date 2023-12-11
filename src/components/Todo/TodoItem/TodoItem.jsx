import React, { useState } from "react";
import styles from './TodoItem.module.css'
import MyModal from "../Modal/Modal";
import { useDispatch } from "react-redux";
import { CompletedTodo } from '../../../slices/todoSlice'

const TodoItem = ({ keyIndex, todo, accordionExample, handleDeleteBtn }) => {
  const collapseId = `collapse${keyIndex}`;
  const [completed, setCompleted] = useState(todo.completed);
  const dispatch = useDispatch();

  
  const handleInput = (e) => {
    setCompleted(e.target.checked)
    dispatch(CompletedTodo({...todo, id: todo.id,completed: e.target.checked}))
  }

  return (
    <div className={`accordion-item ${styles.todoItem}`} style={{ backgroundColor: `${todo.completed ? '#90EE90' : ''}`}}>
      <h2 className="accordion-header" id={`heading${keyIndex}`}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          aria-expanded="true"
          aria-controls={collapseId}
          style={{textDecoration : `${todo.completed ? "line-through" : ""}`}}
        >
          {todo.name}
        </button>
      </h2>
      <div
        id={collapseId}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${keyIndex}`}
        data-bs-parent={`#${accordionExample}`}
      >
        <div className={`accordion-body ${styles.acc_body}`}>
          <p><input type="checkbox" value={completed} onChange={handleInput}/></p>
          <p>{todo.id}</p> 
          {todo.completed ? <p><strike>{todo.name}</strike></p> :<p>{todo.name}</p>}
          <p className={styles.dltbtn}>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm btn-block"
              onClick={() => handleDeleteBtn(todo.id)}
            >
              DELETE
            </button>
          </p>
          <div><MyModal todo={todo}/></div>
            
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
