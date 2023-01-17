import React from 'react'
import logoSm from "../../src/images/logo-sm.png"

export default function Logo() {
  return (
    <div>
        <div className='d-flex justify-content-center align-items-center'>
          <img src={logoSm} width={50} alt="" />
          <h5 className='mb-0 ms-2 d-none d-sm-block'>QUANTA NETWORKS</h5>
        </div>
        {/* <img src={logoSm} className="d-block d-sm-none" width={40} alt="" /> */}

    </div>
  )
}
