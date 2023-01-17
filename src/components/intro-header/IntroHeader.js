import React from 'react'
import left from '../../images/chevron-left.png'
import Logo from '../Logo'

export default function IntroHeader() {
  return (
    <>
        <header className="intro-header d-flex justify-content-start">
            <Logo/>                    
        </header>
        <a href="#/intro" className='back-btn text-black d-flex align-items-center gap-1 mt-2'> <img src={left} width={10} alt="" /> Back</a>
    </>
  )
}
