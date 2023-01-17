import React , {useState} from 'react'
import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Auth from './components/auth/Auth';
import Logo from './components/Logo';
import Intro from './pages/intro/Intro';
import ImportWallet from './pages/import-wallet/ImportWallet';
import NewWallet from './pages/new-wallet/NewWallet';
import RecoveryPhrase from './pages/recovery-phrase/RecoveryPhrase';
import ConfirmRecoveryPhrase from './pages/confirm-recovery-phrase/ConfirmRecoveryPhrase';
import Home from './pages/home/Home';
import CreateAccount from './pages/create-account/CreateAccount';
import ImportAccount from './pages/import-account/ImportAccount';
import Send from './pages/send/Send';
import SendCheckOut from './pages/send-checkout/SendCheckOut';

function App() {

  let [ isLoggedIn , setIsLoggedIn ] = useState(false)

  return (
    <div className="App">
        <Router>
            <Routes>

              {/* <Route exact path = "/" element = { <Intro/> } /> */}
              <Route exact path = "/intro" element = { <Intro/> } />

              <Route exact path = "/" element = { <Auth isLoggedIn = {isLoggedIn} Component={Home} /> } />

              <Route exact path = "/home" element = { <Auth isLoggedIn = {isLoggedIn} Component={Home} /> } />

              <Route exact path = "/import-wallet" element = { <ImportWallet/> } />

              <Route exact path = "/create-wallet" element = { <NewWallet/> } />

              <Route exact path = "/recovery-phrase" element = { <RecoveryPhrase/> } />

              <Route exact path = "/confirm-recovery-phrase"  element = { <ConfirmRecoveryPhrase setIsLoggedIn={setIsLoggedIn} /> } />

              <Route exact path = "/home" element = { <Home/> } />

              <Route exact path = "/create-account" element = { <CreateAccount/> } />

              <Route exact path = "/import-account" element = { <ImportAccount/> } />

              <Route exact path = "/send" element = { <Send/> } />

              <Route exact path = "/send-checkout" element = { <SendCheckOut/> } />

              <Route exact path = "/register" element= { <Register/> }  />

              <Route exact path = "/login"  element= { <Login setIsLoggedIn={setIsLoggedIn} /> }  />

            </Routes>
      </Router>
    </div>
  );
}

export default App;
