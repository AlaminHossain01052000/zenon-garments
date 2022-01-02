import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header'
import ContactUs from './Pages/Contact/ContactUs/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/contact_us' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
