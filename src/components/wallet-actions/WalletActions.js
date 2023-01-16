import React , {useState} from 'react'
import "./WalletActions.css"
import eth from "../../images/eth_logo.svg"
import recieve from "../../images/recieve.png"
import send from "../../images/arrow-right.png"
import moonBase from "../../images/moonbase.svg"
import transak from "../../images/transak.png"
import coinbase from "../../images/coinbase.png"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function WalletActions() {

    let [ethAmount , setEthAmount] = useState(0)
    const [modalShow, setModalShow] = React.useState(false);

    function BuyModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton className='border-0'>
              <Modal.Title id="contained-modal-title-vcenter">
                <h5 className='fw-bold'>Deposit Eth</h5>
                <p className='fs-12'>To interact with decentralized applications using MetaMask, you’ll need ETH in your wallet.</p>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="deposit-options px-3">
                    <div className="deposit-option-item">
                        <img src={coinbase} width={"90%"} alt="" />
                        <div className="deposit-option-item-desc">
                            <h6 className="fw-bold">Buy ETH with Coinbase Pay</h6>
                            <p className='mb-0 d-none d-sm-block'>You can easily buy or transfer crypto with your Coinbase account.</p>
                        </div>
                        <a href="https://www.coinbase.com/" rel="noreferrer noopener" target={"_blank"} className='deposit-link'>Continue to Coinbase Pay</a>
                    </div>
                    <div className="deposit-option-item pt-4">
                        <img src={transak} width={"95%"} alt="" />
                        <div className="deposit-option-item-desc">
                            <h6 className="fw-bold">Buy ETH with Transak</h6>
                            <p className='mb-0 d-none d-sm-block' >Transak supports credit & debit cards, Apple Pay, MobiKwik, and bank transfers (depending on location) in 100+ countries. ETH deposits directly into your MetaMask account.</p>
                        </div>
                        <a href="https://global.transak.com/" rel="noreferrer noopener" target={"_blank"} className='deposit-link'>Continue to Transak</a>
                    </div>
                    <div className="deposit-option-item pt-4">
                        <img src={moonBase} width={"90%"} alt="" />
                        <div className="deposit-option-item-desc">
                            <h6 className="fw-bold">Buy ETH with MoonPay</h6>
                            <p className='mb-0 d-none d-sm-block'>MoonPay supports popular payment methods, including Visa, Mastercard, Apple / Google / Samsung Pay, and bank transfers in 145+ countries.</p>
                        </div>
                        <a href="https://buy.moonpay.com/" rel="noreferrer noopener" target={"_blank"} className='deposit-link'>Continue to Moonbuy</a>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

  return (
    <div className='wallet-actions-component'>
        <section className="wallet-balance-parent bg-white p-3">
            <div className="balance-overview d-flex flex-column align-items-center">
                <div className="logo-wrapper">
                    <img src={eth} width={30} alt="" />
                </div>
                <h2 className="eht-amount mt-3"> {ethAmount} ETH </h2>
                <h6 className="dollar-amount text-muted">$0.00 USD</h6>
                <div className="wallet-action-btns mt-2 pt-2  d-flex justify-content-center align-items-center gap-4 ">
                    <button className="wallet-action-btn-parent d-flex justify-content-center align-items-center flex-column"
                     onClick={() => setModalShow(true)}>
                        <div className="wallet-action-btn">
                            <img src={recieve} width={"60%"} alt="" />
                        </div>
                        <span>Buy</span>
                    </button>

                    <a href='#/send' className="wallet-action-btn-parent d-flex justify-content-center align-items-center flex-column">
                        <div className="wallet-action-btn send-btn">
                            <img src={send} width={"55%"} alt="" />
                        </div>
                        <span>Send</span>
                    </a>
                    
                </div>
            </div>
    </section>
    <BuyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </div>
  )
}
