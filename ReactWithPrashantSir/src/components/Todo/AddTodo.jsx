import React, { useEffect, useState } from "react";
import styles from "./AddTodo.module.css";
import { IoAddCircleSharp } from "react-icons/io5";

const AddTodo = ({handleSubmit}) => {
  const [inputVal, setInputval] = useState("");
  const [dt, setDt] = useState("");
  

  const handleNameChange = (e) => {
    setInputval(e.target.value)
  }

  const handleDateChange = (e) => {
    setDt(e.target.value)
  }

  const handlebtn = (e) => {
    e.preventDefault();
    handleSubmit(inputVal, dt)
    setInputval("");
    setDt("");
    

  };

   return (
    <div className="container">
      <form className="row" onSubmit={(e) => handlebtn(e)}>
        <div className="col-6">
          <input
            className={styles.inputbox}
            type="text"
            placeholder="Input todo here"
            value={inputVal}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            className="inputbox"
            type="date"
            value={dt}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button type="submit" title="Add" className="btn btn-success row-button" >
          <IoAddCircleSharp />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
