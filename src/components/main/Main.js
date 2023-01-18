import React , { useState } from 'react'
import "./Main.css"
import copy from "../../images/copy.png"
import WalletActions from '../wallet-actions/WalletActions'
import ethLogo from "../../images/eth_logo.svg"
import download from "../../images/download-blue.png"
import arrow from "../../images/arrow-right-blue.png"
import { runtime , tabs } from 'chrome-extension-async';

//import "webextension-polyfill"
export default function Main() {

    let months = [ "Jan" , "Feb" , "Mar" , "Apr" , "Jun" , "Jul" , "Aug" , "Sept" , "Oct" , "Nov" , "Dec" ]
    let [address , setAddress] = React.useState("0xF223Acba34e4Ba121db82250348C102bb7BC710A")
    let [copyMessage , setCopyMessage] = React.useState("Copy to Clipboard")
    let [activeTab , setActiveTab] = useState(0)
    let [balance , setBalance] = useState(0.399)
    let [allTransactions , setAllTransactions ] = useState( [
        {
            transactionType : "Send" , 
            from : "0xF427aCba34e4Ba111Db82250348C102bb7BC780A" ,
            to : "0xF427aCba34e4Ba111Db82250348C102bb7BC780A" , 
            date : new Date( 2023 , 0 , 1) , 
            amount : 0.00122 
        } ,
        {
            transactionType : "Recieve" , 
            from : "0xF427aCba34e4Ba111Db82250348C102bb7BC780A" ,
            to : "0xF427aCba34e4Ba111Db82250348C102bb7BC780A" , 
            date : new Date( 2023 , 0 , 17) , 
            amount : 0.2 
        }
    ] )

    function AssetTab()
    {
        return(
            <div className="asset-tab py-4  my-5  ">
                <div className="currency-item py-4 px-3 d-flex align-items-center border-top border-bottom border-dark-subtle">
                    <div className="currency-logo profile-pic-container border-dark-subtle" style={{"width":"34px","height":"34px"}}>
                        <img src={ethLogo} width={"100%"} alt="" />
                    </div>
                    <p className='mb-0 ms-3'>{balance} ETH</p>
                </div>
                <span className="text-muted fs-14 text-center d-block mt-3">Don't see your token ? </span>
                <a href="#/home" className='text-blue fs-14 d-block text-center mb-4'>Import Tokens</a>
            </div>
        )
    }

    function ActivityTab( props )
    {
        let { allTransactions } = props 
        let { transactionType , date , from , to , amount } = allTransactions 
        return (
            <div className="activity-tab-wrapper py-4  my-5">
                {
                    allTransactions.map( ( trans , ind ) => 
                    
                    <div className='activity-item py-4 px-3 border-top border-bottom border-dark-subtle' key={ind * 105}>
                        <div className='d-flex justify-content-between align-items-center gap-3 '>
                            <div className='d-flex justify-content-start align-items-center gap-3 '>
                                <div className='icon-wrapper-rounded'>
                                    {
                                        trans.transactionType.toLowerCase() === "recieve" ? 
                                        <img src = {download} width={"60%"} alt="" />
                                        :
                                        <img src = {arrow} style={{"transform":"rotate(-45deg)"}} width={"60%"} alt="" />
                                    }
                                </div>
                                <div>
                                    <h6 className='mb-0'>{ trans.transactionType }</h6>
                                    <span className='fs-12 text-success'>{ months[ new Date( trans.date ).getMonth() ] + " " + new Date( trans.date ).getDate()}</span>
                                    <span className='fs-12 ms-3'> 
                                        { 
                                            trans.transactionType.toLowerCase() === "recieve" ? 
                                            `From: ${shortenAddress(trans.from)}` 
                                            : 
                                            `To: ${ shortenAddress( trans.to )}` 
                                        } 
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p className='mb-0'>{trans.amount} ETH</p>
                            </div>
                        </div>
                    </div>

                    )
                }
            </div>
        )
    }

    let expandView = () => {
        //tabs.create({url:"google.com"})
    }

    let shortenAddress = ( text ) => {
        return text.substring(0 , 5) + "..." + text.slice(-5)
    }

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
            <section className="main-tabs">
                <button 
                onClick={()=>setActiveTab(0)}
                className={` ${activeTab ? "" : "active-tab"} main-tab asset-tab border-0 bg-white `}>
                    Assets
                </button>
                <button onClick={()=>setActiveTab(1)} 
                className={` ${activeTab ? "active-tab": ""} main-tab activity-tab border-0 bg-white `}>Activity</button>
            </section>
                <div className="tab-content">
                    {
                        activeTab === 0 ? 
                        <AssetTab/> :
                        <ActivityTab allTransactions = {allTransactions} />
                    }

                    <div className="tab-footer text-center py-4">
                        <span>Need help ? Contact <a href="https://support.metamask.io/" className='text-blue'>MetaMask Support</a></span>
                    </div>
                </div>
                
        </div>
    </div>
  )
}
