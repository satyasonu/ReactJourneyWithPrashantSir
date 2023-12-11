import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { updateTodo } from "../../../slices/todoSlice";
import { useSelector, useDispatch } from "react-redux";

const MyModal = ({ todo }) => {
  const [show, setShow] = useState(false);
  const [inputVal, setInputVal] = useState(todo.name);
  const dispatch = useDispatch();
  const handleClose = () => {
    setShow(false);
    dispatch(updateTodo({
      name : inputVal,
      id : todo.id
    }))
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <p className="text-center">
        <Button variant="outline-primary" onClick={handleShow} size="sm" disabled={todo.completed} title={todo.completed ? "Disabled : Can not edit the completed todo" : "Edit the Todo"}>
          EDIT
        </Button>
      </p>

      <Modal show={show} onHide={handleClose} className="modal-dialog-centered">
        <Modal.Header closeButton>
          <Modal.Title>My Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter New Name"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
