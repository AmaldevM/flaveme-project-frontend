import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const AuthUser = () => {
    const {isUserExist} = useSelector((state) => state.user) // Redux state managemnt fuction
    console.log(isUserExist)
    const navigate = useNavigate() // navigation function from react router

    if (!isUserExist) {
        navigate('/login-page')
    }

  return (
    isUserExist ? <Outlet/> : null
  )
}

export default AuthUser