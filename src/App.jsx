import React, { useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useEffect } from 'react'
import { useState } from 'react'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'
const App = () => {

  const [user, setUser] = useState(null)
  const [userData,setuserData] = useContext(AuthContext)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  
  // }, [authData])

  useEffect(()=>{
       const loggedInUser = localStorage.getItem("loggedInUser")
       if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role);
        setloggedInUserData(userData.data)
        
       }
  },[])

  const handleLogin = (email,pw) => {
    if(email=='admin@me.com' && pw=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(userData){
      const employee = userData.employee.find((e) => email == e.email && e.password == pw)
      if(employee){
         setUser('employee')
         setloggedInUserData(employee)
         localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
    }
      else{
      alert("Invalid credentials")
    }
      }
  }
  
  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // }, [])
  
  
  return (
  <>
    {!user ? (
      <Login handleLogin={handleLogin} />
    ) : user === 'admin' ? (
      <AdminDashboard changeUser={setUser} />
    ) : (
      user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null
    )}
  </>
)
}

export default App