import React, { createContext } from 'react'
import { useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [userData, setuserData] = useState(null)

    useEffect(() => {
        const existingData = getLocalStorage()

        if (!existingData.employee || !existingData.admin) {
            setLocalStorage()
        }

        const { employee, admin } = getLocalStorage()

        setuserData({ employee, admin })
    }, [])

    return (
        <AuthContext.Provider value={[userData, setuserData]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider