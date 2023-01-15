import React , { useState } from 'react'
import "./ConfirmRecoveryPhrase.css"
import IntroHeader from '../../components/intro-header/IntroHeader'

export default function ConfirmRecoveryPhrase() {

    let [ words , setWords ] = useState(
        [ "air" , "university" , "is" , "a" , "terrible" , "place" , "why" 
        , "does" , "my" , "attendance" , "need" , "to" , "be" , "seventy" 
        , "five" , "percent" ].sort())

    let [selectedWords , setSelectedWords] = useState([])
    
    let handleClick = ( word ) => {
        setWords( state => state.filter( el => el !== word ))
        setSelectedWords( state => [ ...state , word ])
    }

  return (
    <div className='confirm-recovery-phrase' >
        <div className="custom-container">
            <IntroHeader/>

            <div className="recovery-phrase-content">
                <h1 className="mt-2 mb-4 pb-2"> Confirm your Secret Recovery Phrase </h1>
                <p> Please select each phrase in order to make sure it is correct. </p>

                <div className="phrase-container">
                    <div className="phrase-grid">
                        {selectedWords.map( (el,ind) => <div key={ind+"se"} className="phrase-pill text-center" > {el} </div> )}
                    </div>
                </div>

                <div className="words-container mt-5">
                <div className="phrase-grid">
                        {words.map( (el,ind) =>
                        
                         <div key={ind} className="phrase-pill text-center" onClick={() => handleClick(el)}>
                             {el} 
                        </div> 

                        )}
                </div>
                </div>
                
                {
                    words.length == 0 ? <a href="#/home" className="btn-2" > Confirm </a> : <span className='btn-2 disable-link'>Confirm</span>
                }
                
                

            </div>

        </div>
    </div>
  )
}
