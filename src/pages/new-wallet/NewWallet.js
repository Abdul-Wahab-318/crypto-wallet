import React from 'react'
import Logo from '../../components/Logo'
import left from '../../images/chevron-left.png'

export default function NewWallet() {
  return (
    <div className='new-wallet-page'>
        <div className="custom-container">
            <header className="intro-header d-flex justify-content-start">
                    <Logo/>                    
            </header>
            <a href="#/" className='back-btn text-black d-flex align-items-center gap-1 mt-2'> <img src={left} width={10} alt="" /> Back</a>

            <div className="new-wallet-content">
                <h1 className="mt-2 mb-4 pb-2">
                Create password
                </h1>
                <div className="password-form mt-4">
                    <p className='mb-1'>New password (8 characters min)</p>
                    <input type="password" className='w-50 p-2  recovery-field' />

                    <p className='mt-4 mb-1'>Confirm password</p>
                    <input type="password" className='w-50 p-2 recovery-field' />
                </div>
                <a href="" className="btn-2">Create</a>
            </div>
    </div>
    </div>
  )
}
