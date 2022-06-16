import React from 'react'
import { useSelector } from 'react-redux';
import TodoCard from './todoCard';



export default function TodoList() {
    const Todos = useSelector((state) => state.TodoReducer.todo);
    console.log(Todos)
  return (
    <div>
        <h1>YOUR TO DO LIST</h1>
        {Todos.map((todo)=><TodoCard todo={todo}  />)}
    </div>
  )
}
