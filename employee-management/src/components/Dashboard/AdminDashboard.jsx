import React from 'react';
import Header from '../Other/Header.jsx'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-screen p-10'>
        <Header/>
        <div>
            <div>
                <h2>Create Task</h2>
                <h3>Task For</h3>
                <input type="text" placeholder='Employee Name'/>
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard