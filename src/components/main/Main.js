import React , { useState } from 'react'
import "./Main.css"
import copy from "../../images/copy.png"
import WalletActions from '../wallet-actions/WalletActions'


export default function Main() {

    let [address , setAddress] = React.useState("0xF223Acba34e4Ba121db82250348C102bb7BC710A")
    let [copyMessage , setCopyMessage] = React.useState("Copy to Clipboard")

  return (
    <div className='main-component'>
        <div className="main-inner w-100 bg-white">
            <section className="main-top-bar">
                <div className='top-bar-info' onClick={() => {navigator.clipboard.writeText(address) ; setCopyMessage("Copied !")}}>
                    <h6 className='fw-bold mb-0'>Account 1</h6>
                    <div className="fs-12 d-flex align-items-center justify-content-center ">
                         <span>{address.substring(0 , 5) + "..." + address.slice(-5)}</span> 
                         <img src={copy} width={16} alt="" /> 
                    </div>
                    <div className="copy-hover-message">{copyMessage}</div>
                </div>
            </section>
            <WalletActions/>
        </div>
    </div>
  )
}
