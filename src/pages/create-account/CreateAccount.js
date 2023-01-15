import React from 'react'
import Header from '../../components/header/Header'
import "./CreateAccount.css"

export default function CreateAccount() {
    
    let [ name , setName ] = React.useState("")

  return (
    <div className='create-account-page'>
        <div className="container">
            <Header/>
            <div className="new-account">
                <div className="new-account-form">
                <h6 className='mb-3'>Account Name</h6>
                    <input type="text" placeholder='Account 2' value={name} onChange={(e) => setName(e.target.value)} />
                    <div className='d-flex align-items-center justify-content-evenly mt-5'>
                        <a href="#/home" className="btn-4-inverted">Cancel</a>
                        <a href="#/home" className="btn-4">Create</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
