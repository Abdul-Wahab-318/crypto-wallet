import React from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import Main from '../../components/main/Main'

export default function Home() {
  return (
    <div className='home-page'>
        <div className="container">
            <Header/>
            <Main/>
        </div>
    </div>
  )
}
