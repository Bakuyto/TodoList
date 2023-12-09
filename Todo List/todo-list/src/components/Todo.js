import React from 'react'
import {MdDeleteForever} from 'react-icons/md';
import { FaEdit } from "react-icons/fa";

const Todo= ({id,text, handleDeleteTodo}) => {
  return (
    <div className='todo'>
      <section className='detail' >{text}</section>
      <div className='todo-footer'>
        <FaEdit className='edit-icon'/>
        <MdDeleteForever onClick={()=> handleDeleteTodo(id)} className='delete-icon' />
      </div>
    </div>
  )
}

export default Todo;
