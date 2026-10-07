import React from 'react'
import { useState } from 'react'
const Header = (props) => {

  // const [username, setusername] = useState('')
  // if(!data){
  //   setusername('Admin')
  // }
  // else{
  //   setusername(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='font-medium text-2xl'>Hello <br /> <span className='text-3xl font-semibold'>username</span> </h1>
        <button onClick={
          ()=>{
            logOutUser()
          }
        } className='text-white py-2 px-5 rounded-sm font-medium text-lg  bg-red-600'>Log Out</button>
    </div>
  )
}

export default Header