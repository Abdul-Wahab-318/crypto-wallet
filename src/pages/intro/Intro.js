import React from 'react'
import "./Intro.css"
import download from "../../images/download.png"
import plus from "../../images/plus.png"
import Logo from '../../components/Logo'

export default function Intro() {
  return (
    <section className='intro-page'>
        <div className="custom-container">
            <header className="intro-header d-flex justify-content-start">
                <Logo/>
            </header>

            <div className="intro-content">
                <h4 className='text-center'>New to MetaMask?</h4>

                <div className="select-options d-flex gap-4 mt-5 pb-5">
                    <div className="option-card text-center">
                        <img src={download} alt="" width={40} />
                        <p className='my-2'>No, I already have a Secret Recovery Phrase</p>
                        <span className='fs-14'>Import your existing wallet using a Secret Recovery Phrase</span>
                        <a href="#/import-wallet" className="btn-1"> Import Wallet</a>
                    </div>
                    <div className="option-card text-center">
                        <img src={plus} alt="" width={40} />
                        <p className='my-2'>Yes, let’s get set up!</p>
                        <span className='fs-14'>This will create a new wallet and Secret Recovery Phrase</span>
                        <a href="#/create-wallet" className="btn-1"> Create a Wallet</a>
                    </div>
                </div>

            </div>



        </div>
    </section>
  )
}
