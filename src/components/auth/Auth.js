import React from 'react'
import Intro from '../../pages/intro/Intro';
import { useNavigate } from 'react-router-dom';

export default function Auth( {Component} ) {

    const navigate = useNavigate()
    let isLoggedIn = false 

    React.useEffect(()=>{
        if ( !isLoggedIn )
            navigate("login")
    },[])

  return (
        <Component/>
  )
}
