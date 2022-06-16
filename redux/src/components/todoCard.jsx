import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../JS/Actions/TodoAction'
// import './components.css'


export default function TodoCard({todo}) {
    const dispatch = useDispatch()
  return (
   
    <div className='cadre'>
        <div contentEditable="true" className='cardTodo'>
            {todo.content}
        </div>
        <div>
            <button onClick={()=>dispatch(removeTodo(todo.id))} className='Deletebutton'>
                    Delete
            </button>
        </div>

        
    </div>
    
  )
}
