import React from 'react'
import { useNavigate , useLocation } from 'react-router-dom';

export default function Auth( {Component , isLoggedIn} ) {

  let navigate = useNavigate()

    React.useEffect(()=>{
      console.log(!isLoggedIn)
        if ( !isLoggedIn )
            navigate("/login")
    },[])

  return (
        <Component/>
  )
}
