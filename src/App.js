import './App.css';
import { Route, Routes } from "react-router-dom"
import Nav from './components/nav';
import Main from './components/main';
import Footer from './components/footer';
import Rights from './components/rights';
import Menu from './components/menu';
import Order from './components/order';
import Login from './components/login';
import ConfirmedBooking from './components/Bookings/ConfirmedBooking';
import Bookings from './components/Bookings';


function App() {
  return (
    <>
      <Nav />
      <div className='main-container'>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/booking' element={<Bookings />}></Route>
          <Route path='/confirmedbooking' element={<ConfirmedBooking />}></Route>
          <Route path='/order' element={<Order />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
      <Footer />
      <Rights />
    </>
  );
}

export default App;
