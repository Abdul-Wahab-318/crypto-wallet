import React , {useState , useEffect , useRef} from 'react'
import Logo from '../Logo'
import './Header.css'
import avatar from "../../images/avatar.jpg"
import plus from "../../images/plus.png"
import download from "../../images/download.png"
export default function Header() {

  let [showDropDown , setShowDropDown ] = useState(false)
  let [accounts , setAccounts] = useState([{ name : "Account 1" , amount : "0.2 ETH" }])

  let toggleDropDown = () => {
    setShowDropDown( state => !state )
  }

  const ref = useRef(null);

  //hides drop down when mouse is clicked outside of drop down
  const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
          setShowDropDown(false);
      }
  };

  useEffect(() => {
      document.addEventListener('click', handleClickOutside, true);
      return () => {
          document.removeEventListener('click', handleClickOutside, true);
      };
  }, []);


  return (
    <div className='header-component'>
        <div className="header-inner">
            <header className="d-flex justify-content-between align-items-center">
                <Logo/>
                <div className="avatar d-flex justify-content-center align-items-center">
                  <div className="network-pill">
                    <div className="circle"></div>
                    <span>Ethereum Mainnet</span>
                  </div>
                  <div className="profile-dropdown-parent ms-4">
                    <div className="profile-pic-container " onClick={()=>toggleDropDown()}>
                      <img src={avatar} width={"100%"} alt="" />
                    </div>
                    {
                      showDropDown ?
                      <section className="profile-dropdown" ref={ref}>
                        <div className='accounts'>
                          <p className='px-3'>My Accounts</p>
                          <hr />
                          {
                          accounts.map( (account,ind) =>
                          <div className='account-item d-flex' key={ind}>
                            <div className="profile-pic-container" style={{"width" : "30px" , "height" : "30px"}}><img src={avatar} width={"100%"} alt="" /></div>
                            <div className='account-details ms-3'>
                              <p className='mb-0 fs-14'>{account.name}</p>
                              <p className='fs-14 mb-0'>{account.amount}</p>
                            </div>
                          </div>
                          )}

                        </div>
                        <a className=' p-3 d-flex align-items-center ' href=''  > 
                          <img src={plus} className="me-2" width={20} alt="" />
                          <a href='#/create-account'>Create Account</a>
                        </a>
                        <a className='p-3 d-flex align-items-center' href=''>
                          <img src={download} className="me-2" width={24} alt="" />
                          <a href='#/import-account'>Import Account</a>
                        </a>
                      </section>
                    :
                    <></>
                    }

                  </div>
                </div>
            </header>
        </div>
    </div>
  )
}
