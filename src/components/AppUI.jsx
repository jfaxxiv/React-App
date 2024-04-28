import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoForm } from './TodoForm'
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodosLoading } from "./TodosLoading";
import { TodosError } from "./TodosError";
import { EmptyTodos } from "./EmptyTodos";
import { CreateTodoButton } from "./CreateTodoButton";
import { Modal } from "./Modal";
import { TodoContext } from '../context/TodoContext'

function AppUI() {
const {
  loading,
  error,
  seartedTodo,
  completeTodo,
  deleteTodo,
  openModal
} = React.useContext(TodoContext)

  return (
    <>
      <TodoCounter />
      <TodoSearch  />
          <TodoList>
            {loading && <TodosLoading/>}
            {error && <TodosError/>}
            {!loading && seartedTodo.length === 0 && <EmptyTodos/>}

            {seartedTodo.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
        </TodoList>
        
      <CreateTodoButton />
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };

//  <TodoContext.Consumer>
//         {({
//           loading,
//           error,
//           seartedTodo,
//           completeTodo,
//           deleteTodo,
//         }) => ( )}
//       </TodoContext.Consumer> 