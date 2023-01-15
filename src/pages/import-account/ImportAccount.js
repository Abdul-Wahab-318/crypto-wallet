import React from 'react'
import Header from '../../components/header/Header'
import "./ImportAccount.css"

export default function ImportAccount() {
  return (
    <div className='import-account-page bg-gray vh-100'>
        <div className="container">
            <Header/>
            <div className="import-account-form-parent">
                <h2>Import account</h2>
                <p className='fs-14 text-muted mt-3'>Imported accounts will not be associated with your originally created MetaMask account Secret Recovery Phrase. Learn more about imported accounts <a href="">here</a> </p>
                <hr />

                <div className="import-account-form px-4">
                  <p className='fs-14'>Enter your private key string here:</p>
                  <input type="password" autoFocus={true} className="p-2 w-100 rounded-1 border-dark mb-4" />
                </div>
                  <div className='d-flex align-items-center justify-content-evenly'>
                    <a href="#/home" className="btn-4-inverted">Cancel</a>
                    <a href="#/home" className="btn-4">Import</a>
                  </div>

            </div>
        </div>
    </div>
  )
}
