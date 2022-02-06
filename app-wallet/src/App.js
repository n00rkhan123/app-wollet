import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Nft from './components/nft/Nft'
import Energize from './components/energize/Energize'
import Wrap from './components/wrap/Wrap'
import Stake from './components/stake/Stake'
import Home from './components/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Teleport from './components/teleport/Teleport';
import Mining from './components/mining/Mining';
import Routes from "./routes";
function App() {
  return (
    <div className="App">
    <Routes />
  </div>
  );
}

export default App;
