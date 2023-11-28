import React from "react";
import { RiDeleteBin3Fill } from "react-icons/ri";

const TodoItem = ({name, date,id, handleDeletebutton}) => {
  return (
    <div className="container">
      <div className="row item-row">
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button className="btn btn-danger row-button" title="Delete" onClick={() => handleDeletebutton(id)}><RiDeleteBin3Fill /></button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
