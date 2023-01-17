import React , { useState } from 'react'
import "./Main.css"
import copy from "../../images/copy.png"
import WalletActions from '../wallet-actions/WalletActions'
import ethLogo from "../../images/eth_logo.svg"
//import "webextension-polyfill"
export default function Main() {

    let [address , setAddress] = React.useState("0xF223Acba34e4Ba121db82250348C102bb7BC710A")
    let [copyMessage , setCopyMessage] = React.useState("Copy to Clipboard")
    let [activeTab , setActiveTab] = useState(0)
    let [balance , setBalance] = useState(0.399)
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

    let expandView = () => {
        //chrome.tabs.create({url: 'https://www.google.com'});
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
                        <></>
                    }

                    <div className="tab-footer text-center py-4">
                        <span>Need help ? Contact <a href="https://support.metamask.io/" className='text-blue'>MetaMask Support</a></span>
                    </div>
                </div>
                
        </div>
    </div>
  )
}
