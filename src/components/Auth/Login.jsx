import React from 'react'
import { useState } from 'react'
const login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [pw, setpw] = useState('')
    const submitHandler = (e) =>{
        e.preventDefault()
        handleLogin(email,pw)
        setEmail('')
        setpw('')
                
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='p-20 rounded-xl border-2 border-emerald-300'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)  
            }}
            className='flex flex-col items-center justify-center'>
                <input value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required className=' text-white outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 py-3 px-5 text-xl rounded-full' type="email" placeholder='Enter your email' />
                <input 
                value={pw}
                onChange={(e)=>{
                    setpw(e.target.value)
                }}
                required className='text-white mt-3 outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 py-3 px-5 text-xl rounded-full' type="password" placeholder="Enter password" />
                <button className= 'w-full mt-8 text-white border-none outline-none placeholder:text-white border-2 hover:bg-emerald-600 bg-emerald-700 py-3 px-5 text-xl rounded-full'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default login