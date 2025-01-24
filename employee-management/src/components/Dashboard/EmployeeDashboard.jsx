import React from 'react'
import Header from '../Other/Header'
import TaskList from '../Other/TaskList'
import Task from '../TaskList/Task'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen '>
      <Header/>
      <TaskList/>
      <Task/>
    </div>
  )
}

export default EmployeeDashboard