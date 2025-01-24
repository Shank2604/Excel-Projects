import React from 'react'

const TaskList = () => {
  return (
    <div className='flex mt-10 justify-between screen gap-5'>
        <div className='bg-red-400 w-[45%] px-9 py-6 rounded-xl'>
            <h1 className='text-3xl font-semibold'>0</h1>
            <h2 className='text-xl font-medium'>New task</h2>
        </div>
        <div className='bg-blue-400 w-[45%] px-9 py-6 rounded-xl'>
            <h1 className='text-3xl font-semibold'>0</h1>
            <h2 className='text-xl font-medium'>New task</h2>
        </div>
        <div className='bg-yellow-400 w-[45%] px-9 py-6 rounded-xl'>
            <h1 className='text-3xl font-semibold'>0</h1>
            <h2 className='text-xl font-medium'>New task</h2>
        </div>
        <div className='bg-green-400 w-[45%] px-9 py-6 rounded-xl'>
            <h1 className='text-3xl font-semibold'>0</h1>
            <h2 className='text-xl font-medium'>New task</h2>
        </div>
    </div>
  )
}

export default TaskList;