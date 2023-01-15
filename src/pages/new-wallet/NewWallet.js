import React , {useState} from 'react'
import IntroHeader from '../../components/intro-header/IntroHeader'
export default function NewWallet() {
  
  //const navigate = useNavigate()
  let [ password , setPassword ] = useState( "" )
  let [ confirmPassword , setConfirmPassword ] = useState("")

  return (
    <div className='new-wallet-page'>
        <div className="custom-container">
            <IntroHeader/>

            <div className="new-wallet-content">
                <h1 className="mt-2 mb-4 pb-2">
                Create password
                </h1>
                <div className="password-form mt-4">
                    <p className='mb-1'>New password (8 characters min)</p>
                    <input type="password" className='w-50 p-2  recovery-field' value={password} onChange={(e)=> setPassword(e.target.value)} />

                    <p className='mt-4 mb-1'>Confirm password</p>
                    <input type="password" className='w-50 p-2 recovery-field' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} />
                </div>
                {
                  password.length >= 8 && password === confirmPassword ? 
                  <a href="#/recovery-phrase" className="btn-2">Create</a>
                  :
                  <button className="btn-2 border-0 disable-link" >Create</button>
                }
            </div>
    </div>
    </div>
  )
}
