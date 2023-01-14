import React from 'react'
import Register from '../../pages/register/Register'
import { useNavigate } from 'react-router-dom';

export default function Auth( {Component} ) {
    const navigate = useNavigate()
    let isLoggedIn = false 

    React.useEffect(()=>{
        if ( !isLoggedIn )
            navigate("/register")
    },[])

  return (
        <Component/>
  )
}
