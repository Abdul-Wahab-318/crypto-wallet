import React , {useState} from 'react'
import "./Send.css"
import Header from "../../components/header/Header"
import search from "../../images/search.png"
import avatar from "../../images/avatar.jpg"

export default function Send() {

    let [ currentBalance , setCurrentBalance ] = useState(0.399)
    let [ address , setAddress ] = useState("")
    let [amount , setAmount] = useState(0)
    let [ foundAddress , setFoundAddress ] = useState(true)

    function InputAmount()
    {
        return (
            <div className="input-amount-wrapper px-3 pt-3">
                <div className='d-flex align-items-center justify-content-between gap-5'>
                    <span className='text-muted'>Asset:</span>
                    <div className='border-dark-subtle p-2 rounded border d-flex align-items-center flex-grow-1'>
                        <div className="profile-pic-container">
                            <img src={avatar} width={"100%"} alt="" />
                        </div>
                        <div className="show-balance ms-2 ">
                            <h6 className='mb-0 fs-14'>ETH</h6>
                            <p className='fs-12 mb-0'>Balance: {currentBalance} ETH</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-between gap-5 mt-3'>
                    <span className='text-muted'>Amount:</span>
                    <div className='border-dark-subtle p-2 rounded border d-flex align-items-center flex-grow-1'>
                        <div className="enter-amount ms-2 ">
                            <input className='mb-0 fs-14 border-0 ' style={{"width" : "5ch"}} placeholder='0' /> ETH
                        </div>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <div className='send-page vh-100'>
        <div className="container">
            <Header/>

            <section className="send-page-content">
                <div className="search-contact">
                    <div className="search-contact-top-bar">
                        <div>
                            <p></p>
                            <h6 className='mb-0'>Send to</h6>
                            <a href="#/home">Cancel</a>
                        </div>
                        <div className="search-field-wrapper mt-2">
                            <img src={search} width={18} alt="" />
                            <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}
                             placeholder='Search, public address (0x), or ENS' className='w-100' />
                        </div>
                    </div>
                        {
                            foundAddress ? 
                            <InputAmount/> :
                            <></>
                        }
                </div>
            </section>

        </div>
    </div>
  )
}
