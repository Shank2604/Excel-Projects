import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log("Email is :",email);
        console.log("Password is :",password);

        setEmail('');
        setPassword('');
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-400 rounded-xl p-20'>
            <form
                onSubmit={(e)=>{
                    submitHandler(e)
                }}
                className='flex flex-col items-center justify-center'>
                <input
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    required className='outline-none border-2 bg-transparent border-emerald-400 rounded-full text-xl py-3 px-5' type="email" placeholder='Enter your email'/>
                <input
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }} 
                    required className='outline-none border-2 bg-transparent border-emerald-400 rounded-full text-xl py-3 px-5 mt-3' type="password" placeholder='Enter password' />
                <button className='text-xl mt-7 rounded-full bg-emerald-400 px-5 py-3'>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login;