import React , { useState } from 'react'
import "./Login.css"
import Logo from "../../components/Logo"
import fox from "../../images/logo-sm.svg"

export default function Login() {

  let [ password , setPassword ] = useState("")

  return (
    <div className='login-page'>
        <header className='login-header'>
          <div className="custom-container d-flex justify-content-between align-items-center">
            <Logo/>
            <div className="network-pill">
              <div className="circle"></div>
              <span>Ethereum Mainnet</span>
            </div>
          </div>
        </header>

        <section className="login-content d-flex flex-column justify-content-center align-items-center mt-5 pt-3">
          <img src={fox} width={100} alt="" />
          <h2 className='fw-bold mt-3'>Welcome Back !</h2>
          <p className="fs-14">The decentralized web awaits</p>

          <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" className='login-password-field' placeholder='Password' />
          {
            password.length < 8 ?
             <button className="disable-link btn-2 border-0 w-100">Unlock</button> : 
             <a href="#/home" className="btn-2 w-100 text-center py-3">Unlock</a>
          }
        </section>

    </div>
  )
}
