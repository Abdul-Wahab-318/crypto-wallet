import React , {useState , useRef} from 'react'
import "./Send.css"
import Header from "../../components/header/Header"
import search from "../../images/search.png"
import avatar from "../../images/avatar.jpg"
import correct from "../../images/correct.png"
import { Link , useNavigate } from "react-router-dom"

export default function Send() {

    const myAddress = '0xF227aCba34e4Ba311db81252343C1w2bb7BC780A'
    let navigate = useNavigate()
    let [errorMessage , setErrorMessage] = useState("")
    let [ currentBalance , setCurrentBalance ] = useState(0.399)
    let [ address , setAddress ] = useState("")
    let [amount , setAmount] = useState(0)
    let [ foundAddress , setFoundAddress ] = useState(false)

    let handleAddressChange = ( text ) => {
        setAddress( text )

        if ( text >= 10 || address.length >= 10 )
            setFoundAddress( true )
        else
            setFoundAddress( false )
    }

    let handleAmountChange = ( num ) => {
        console.log(num)
        if ( num >= currentBalance )
        {
            setErrorMessage("Insufficient funds for gas")
            setAmount(0)
        }
        else
        {
            setAmount(num)
            setErrorMessage("")
        }
    }

    let toCheckOut = () => {
        navigate(
            '/send-checkout', 
            {
                state:{ fromAddress :myAddress , toAddress : address , fromAccount : "Account 1" , toAccount : "Account 2" , amount }
            })
    }    

    function InputAmount()
    {
        return (
            <div className="input-amount-wrapper px-3 pt-3">
                {
                    errorMessage ? 
                    <span className="error-message border border-danger d-block fs-12 rounded p-3 mb-3">{errorMessage} </span> :
                    <></>
                }
                <div className=' align-items-center justify-content-between gap-5'>
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
                <div className='align-items-center justify-content-between gap-5 mt-3'>
                    <span className='text-muted'>Amount:</span>
                    <div className='border-dark-subtle p-2 rounded border d-flex align-items-center flex-grow-1'>
                        <div className="enter-amount ms-2 ">
                            <input className='mb-0 fs-14 border-0 '
                            type = "number"
                            value={amount}
                            min={0}
                            autoFocus={true}
                            onChange={(e)=>handleAmountChange(e.target.value)}
                             style={{"width" : "9ch"}} placeholder='0' /> ETH
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function SelectedAccount()
    {
        return (
            <div className="selected-account-wrapper p-3">
                <img src={correct} width={20} alt="" />
                <div className='d-block ms-4'>
                    <h6 className="fs-14 mb-0 text-blue">Account 1 </h6>
                    <p className='mb-0 fs-12'>{address}</p>
                </div> 
            </div>
        )
    }

  return (
    <div className='send-page vh-100'>
        <div className="container">
            <Header/>

            <section className="send-page-content mt-3">
                <div className="search-contact d-flex justify-content-between flex-column ">
                    <div className="search-contact-main">
                        <div className="search-contact-top-bar">
                            <div>
                                <p></p>
                                <h6 className='mb-0'>Send to</h6>
                                <a href="#/home">Cancel</a>
                            </div>
                            <div className="search-field-wrapper mt-2">
                                <img src={search} width={18} alt="" />
                                {
                                    foundAddress ? 
                                    <SelectedAccount/>
                                    :
                                    <input type="text" value={address} onChange={(e)=> handleAddressChange(e.target.value)}
                                    placeholder='Search, public address (0x), or ENS' className='w-100' />
                                    
                                }
                            </div>
                        </div>
                        {
                            foundAddress ? 
                            <InputAmount/> :
                            <></>
                        }
                    </div>
                    <div className="search-contact-footer p-3 border-top border-dark-subtle">
                        {
                            foundAddress ? 
                            <div className="send-btns d-flex justify-content-center align-items-center gap-3">
                                <a href="#/home" className="btn-4-inverted mt-0">Cancel</a>
                                {
                                    errorMessage == "" ? 
                                    <a onClick={()=>toCheckOut()} className="btn-4 mt-0">Continue</a> :
                                    <a href="" className="btn-4 disable-link">Continue</a>
                                }
                            </div> : <></>
                        }
                    </div>
                </div>
            </section>

        </div>
    </div>
  )
}
