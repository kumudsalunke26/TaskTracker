import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = () => {
  return (
    <div className='h-14 w-32 flex items-center my-3 gap-2 pl-9'>
      <img src={tick}/>
      <p className="">Learn Coding</p>
    </div>
  )
}

export default TodoItems
