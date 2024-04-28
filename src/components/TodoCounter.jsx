import React from "react";
import '../assets/css/TodoCounter.css';
import { TodoContext } from '../context/TodoContext'

function TodoCounter() {
  const {
    totalTodos,
    completedTodos,
  } = React.useContext(TodoContext)



  let content;
  if(totalTodos === 0){
    content = <h1 className="TodoCounter">Crea tu primera Tarea</h1>
  }else if (completedTodos === totalTodos){
    content = <h1 className="TodoCounter">Has completado todas las Tareas, ☆ felicitaciones ☆</h1>
  }else{
    content = <h1 className="TodoCounter">Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> Tareas</h1>
  }

  return (
    content
  );
}
 
export { TodoCounter }; 
