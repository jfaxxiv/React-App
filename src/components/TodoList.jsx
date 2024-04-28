import React from 'react'
import '../assets/css/TodoList.css'

function TodoList(props) {


  return (
    <ul className='TodoList'>
        {props.children}
    </ul>
  )
}
 
export  { TodoList }