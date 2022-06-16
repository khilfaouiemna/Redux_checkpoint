import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../JS/Actions/TodoAction';
import "./components.css";

export default function AddTodo() {
    const [TODO, setTODO] = useState({})
    const handleChange = ( e ) =>{ 
        setTODO ({...TODO,[e.target.name]: e.target.value})
    }
    const dispatch = useDispatch();
  return (
    <div >
      <h2> Add Here</h2>
        <input type="text" name="content" id="" onChange={handleChange} placeholder='ENTER YOUR TODO' style={{  }} />
        <button type='submit'  onClick={()=>dispatch(addTodo({...TODO,id:Math.random(),doneornot:false}))} className="addButton">add </button>
    </div>
  )
}
