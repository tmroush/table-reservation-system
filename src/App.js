
import './App.css';
import Header from "./Header";
import Main from './Main';
import Footer from './Footer';
import Reservations from './Reservations'
import AboutUs from './AboutUs'
import NotAvailable from './NotAvailable'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <Header />
    <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/About' element={<AboutUs />} />
        <Route path='/Menu' element={<NotAvailable />} />
        <Route path='/Reservations' element={<Reservations />} />
        <Route path='/Order' element={<NotAvailable />} />
        <Route path='/Login' element={<NotAvailable />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
