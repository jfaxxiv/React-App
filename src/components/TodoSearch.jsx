import React from "react";
import "../assets/css/TodoSearch.css";
import { TodoContext } from '../context/TodoContext'

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext)
  return (
    <input
      placeholder="busca una tarea"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
