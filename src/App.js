import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ContactUs from './Pages/Contact/ContactUs/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/Home/Home/Home';
import AllCarrerInfo from './Pages/CarrerPage/AllCarrerInfo/AllCarrerInfo';
import AboutUs from './Pages/AboutUs/AboutUs';
import Login from './Pages/Authentication/Login/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/all_career_info" element={<AllCarrerInfo />} />
          <Route path="/about_us" element={<AboutUs></AboutUs>} />
          <Route path="/login" element={<Login></Login>} />
        </Routes>
      </BrowserRouter>


    </div >
  );
}

export default App;
