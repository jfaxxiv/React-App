import React from "react";
import { BsCheckLg,BsXLg  } from "react-icons/bs";
import '../assets/css/TodoItem.css'

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <BsCheckLg
      className={`Icon Icon-check ${props.completed && "Icon-check--activate"}`}
      onClick={props.onComplete}
      size={5}
      />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
      <BsXLg 
      className="Icon Icon-delete"
      onClick={props.onDelete} 
      />
    </li>
  );
}

export { TodoItem };
