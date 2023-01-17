import React from 'react'
import "./SendCheckOut.css"
import avatar from "../../images/avatar.jpg"
import arrow from "../../images/arrow-right.png"
import {useLocation} from 'react-router-dom';
import Header from '../../components/header/Header';
export default function SendCheckOut() {

    const transactionInfo = useLocation().state;
    const gasFee = 0.000032
    const total = (gasFee + Number(transactionInfo.amount)).toPrecision(7)
    
    let handleTransaction = () => {
        console.log("processing...")
    }

  return (
    <div className='send-checkout-page bg-gray vh-100'>
        <div className="container">
            <Header/>
            <div className="send-checkout-content mt-3 rounded d-flex flex-column justify-content-between">
                <section className="send-content-main">
                    <div className="send-content-top-bar">
                        <div className="back p-2 ps-3 text-blue  border-bottom border-dark-subtle">
                            <a href="#/send">{"< Edit"}</a>
                        </div>
                        <div className="account-to-from py-2 px-3 d-flex justify-content-between align-items-center  border-bottom border-dark-subtle">
                            <div className='from d-flex align-items-center gap-2'>
                                <div className='profile-pic-container' style={{"width":"30px","height":"30px"}}>
                                    <img src={avatar} width={"100%"} alt="" />
                                </div> 
                                <span className='fs-12'>{transactionInfo.fromAccount}</span>
                            </div>
                            <div className='from d-flex align-items-center gap-2'>
                                <div className='profile-pic-container' style={{"width":"30px","height":"30px"}}>
                                    <img src={avatar} width={"100%"} alt="" />
                                </div> 
                                <span className='fs-12'>{transactionInfo.toAccount}</span>
                            </div>
                        <div className="from-to-arrow " >
                            <img src={arrow} width={20} alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="amount-to-send py-4 px-3 bg-gray border-bottom border-dark-subtle">
                        <span className='py-1 px-2 text-muted border-dark-subtle border rounded fs-14'>Sending Ethereum</span>
                        <h4 className='mt-3'>{transactionInfo.amount}</h4>
                    </div>
                    <section className="price-estimate pt-5 px-4">
                        <div className="gas-estimate border-bottom border-dark-subtle pb-3">
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className="fw-bold fs-14">Estimated gas fee</h6>
                                <h6 className="fw-bold fs-14">{gasFee} ETH</h6>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className="text-success fs-12">Likely in {"<"} 30 seconds</h6>
                            </div>
                        </div>
                        <div className="total-estimate pb-3 pt-5">
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className="fw-bold fs-14">Total</h6>
                                <h6 className="fw-bold fs-14">{total} ETH</h6>
                            </div>
                        </div>
                    </section>
                </section>
                <div className="search-contact-footer p-3 border-top border-dark-subtle">
                    <div className="send-btns d-flex justify-content-center align-items-center gap-3">
                        <a href="#/home" className="btn-4-inverted mt-0">Reject</a>
                        <a href='#/home' onClick={()=> handleTransaction()}  className="btn-4 mt-0">Continue</a>
                     </div> 
                </div>
            </div>
        </div>
    </div>
  )
}
