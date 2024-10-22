import React from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {
  return (

    
    <div className='bg-white place-self-center w-11/12 max-w-[550px] flex flex-col py-7 min-h-[700px] rounded-xl'>
      <div className='flex items-center mt-5 gap-1 min-h-[100px] place-self-center'>
        <img className='w-10'src={todo_icon}/>
        <h1 className='text-4xl font-semibold'>TaskTracker</h1>
      </div>

      <div className='flex items-center my-7 mx-8 bg-gray-200 rounded-full'>
        <input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 text-2xl' type="text" placeholder='Add Your Task'/>
        <button className='border-none outline-none rounded-full bg-orange-400 h-14 w-32 text-lg font-medium cursor-pointer'>ADD +</button>
      </div>
      <TodoItems/>
    </div>

  )
}

export default Todo
