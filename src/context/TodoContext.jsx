import React from 'react'
import useLocalStorage from '../hooks/useLocalStorageHook'

const TodoContext = React.createContext()

function TodoProvider({children}){
    const {
        item:todo, 
        saveItem:saveTodo,
        error,
        loading,
      } = useLocalStorage("TODOS_V1", []);
    
      const [searchValue, setSearchValue] = React.useState("");

      const [openModal, setOpenModal] = React.useState(false)

      
      const completedTodos = todo.filter((todo) => todo.completed).length;
      
      const totalTodos = todo.length;
      
      const seartedTodo = todo.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      });
      
      const addTodo = (text) => {
        const newTodos = [...todo];
        newTodos.push({
          text,
          completed: false,
        })
        
        saveTodo(newTodos)
      }

      const completeTodo = (text) => {
        const newTodos = [...todo];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos[todoIndex].completed = true;
        saveTodo(newTodos);
      };
    
      const deleteTodo = (text) => {
        const newTodos = [...todo];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos.splice(todoIndex, 1);
        saveTodo(newTodos);
      };


      return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            seartedTodo,
            completeTodo,
            deleteTodo,
            openModal, 
            setOpenModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
      )
}

export {TodoContext,TodoProvider}

// const defaultTodos = [
//   { text: "cortar cebolla", completed: false },
//   { text: "aprender react", completed: false },
//   { text: "aprender python", completed: true },
//   { text: "hacer el trabajo de grado", completed: false },
//   { text: "conseguir trabajo", completed: false },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1')

// function useLocalStorage(itemName,initialValue) {

//   const localStorageItem = localStorage.getItem(itemName)
//   let parsedItem;

//   if(!localStorageItem){
//     localStorage.setItem(itemName, JSON.stringify(initialValue))
//     parsedItem = [];
//   }else{
//     parsedItem = JSON.parse(localStorageItem)
//   }

//   const [item, setItem] = React.useState(parsedItem)

//   const saveItem = (newTodos) => {
//     localStorage.setItem(itemName, JSON.stringify(newTodos));
//     setItem(newTodos)
//   }
//   return [item, saveItem];
// }