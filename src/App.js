import './App.css';
import Login from './Pages/Authentication/Login/Login';
// import Register from './Pages/Authentication/Register/Register';
import Header from './Pages/Header/Header';
// import AboutUs from './Pages/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      {/* <AboutUs></AboutUs> */}
      <Header></Header>
      {/* <Register></Register> */}
      <Login></Login>
    </div>
  );
}

export default App;
