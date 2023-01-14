import React from 'react'
import Logo from '../../components/Logo'
import left from '../../images/chevron-left.png'
import "./ImportWallet.css"

export default function ImportWallet() {
  return (
    <div className='import-wallet-page'>
        <div className="custom-container">
            <header className="intro-header d-flex justify-content-start">
                    <Logo/>                    
            </header>
            <a href="#/" className='back-btn text-black d-flex align-items-center gap-1 mt-2'> <img src={left} width={10} alt="" /> Back</a>

            <div className="import-wallet-content">
                <div className="content-heading">
                    <h1 className="mt-2 mb-4 pb-2">
                    Import a wallet with Secret Recovery Phrase
                    </h1>
                    <p className='fs-14'>Only the first account on this wallet will auto load. After completing this process, to add additional accounts, click the drop down menu, then select Create Account.</p>
                </div>
                <div className="recovery-form mt-4 pt-1">
                    <h5 className='fw-bold '>Secret Recovery Phrase</h5>
                    <input type="password" className='   p-2 w-50 d-block mt-3 recovery-field' />
                </div>
                <div className="password-form mt-4">
                    <p className='mb-1'>New password (8 characters min)</p>
                    <input type="password" className='w-50 p-2  recovery-field' />

                    <p className='mt-4 mb-1'>Confirm password</p>
                    <input type="password" className='w-50 p-2 recovery-field' />
                </div>
                <a href="" className="btn-2">Import</a>
            </div>

        </div>
    </div>
  )
}
