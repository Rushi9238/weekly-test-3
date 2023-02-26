import './App.css';
import Heading from './Componets/Heading';
import MobileView from './Componets/MobileView';
import Navbar from './Componets/Navbar';
import MoreOften from './Componets/MoreOften';
import Brands from './Componets/Brands';
import PayBill from './Componets/PayBill';
import Security from './Componets/Security';


function App() {
  return (
    <div className="App">
      <Navbar/>
    <Heading/>
    <MobileView/>
    <MoreOften/>
    <Brands/>
    <PayBill/>
    <Security/>
    
    </div>
  );
}

export default App;
