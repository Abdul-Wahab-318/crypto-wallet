import logo from './logo.svg';
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

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>

              <Route exact path = "/" element = { <Intro/> } />

              <Route exact path = "/import-wallet" element = { <ImportWallet/> } />

              <Route exact path = "/create-wallet" element = { <NewWallet/> } />

              <Route exact path = "/register" element= { <Register/> }  />

              <Route exact path = "/login"  element= { <Auth Component={Login} />} />

            </Routes>
      </Router>
    </div>
  );
}

export default App;
