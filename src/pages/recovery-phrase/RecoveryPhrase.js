import React , {useState} from 'react'
import "./RecoveryPhrase.css"
import IntroHeader from '../../components/intro-header/IntroHeader'

export default function RecoveryPhrase() {

    let [ hidden , setHidden ] = useState( true )
    const phrase = "air university is a terrible place why does my attendance need to be seventy-five percent"


    let toggleHidden = () => {
        setHidden( state => !state )
    }

  return (
    <div className='recovery-phrase-page'>
        <div className="custom-container">
            <IntroHeader/>

            <div className="recovery-phrase-content">
                <div className="row">
                    <div className="col-8">
                        <h1 className="mt-2 mb-4 pb-2"> Secret Recovery <br /> Phrase </h1>
                        <p>Your Secret Recovery Phrase makes it easy to back up and restore your account. <br /><br />
                        WARNING: Never disclose your Secret Recovery Phrase. Anyone with this phrase can take your Ether forever.</p>

                        <section className= {`phrase-container`} onClick={toggleHidden} >
                            <span className= { ` ${hidden? `blur-effect` : `` } ` }> {phrase} </span>
                            { hidden ? <p className='hidden-placeholder fw-bold fs-5'>Click to Reveal </p> : <></>}
                        </section>

                        <a href="#/home" className="btn-3-inverted d-inline-block me-2">Remind me later</a>
                        <a href="#/confirm-recovery-phrase" className="btn-3">Next</a>

                    </div>
                    <div className="col-4 fs-14">
                        Tips:
                        <br /><br />
                        Store this phrase in a password manager like 1Password. <br /><br />
                        Write this phrase on a piece of paper and store in a secure location. If you want even more security, write it down on multiple pieces of paper and store each in 2 - 3 different locations. <br /> <br />
                        Memorize this phrase.
                        <br /><br />
                        Download this Secret Recovery Phrase and keep it stored safely on an external encrypted hard drive or storage medium.
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
