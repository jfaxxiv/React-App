import React from "react";
import '../assets/css/CreateTodoButton.css'
import { TodoContext } from '../context/TodoContext'

function CreateTodoButton() {
  const {
    setOpenModal,
    openModal,
  } = React.useContext(TodoContext);

  return (
    <button 
      className="CreateTodoButton"
      onClick={() => {
        setOpenModal( state => !state )
      }}
      
      >+</button>
    );
}

export { CreateTodoButton };
