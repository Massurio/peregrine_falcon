import Navbar from './components/Navbar';
import Home from './Pages/HomePage/Home';
import About from './Pages/About';
import Login from './Pages/Login/';
import Signup from './Pages/Signup';
// import LogOut from './Pages/LogOut';
import UserPage from './Pages/UserPage';
import ContactUs from './Pages/ContactUs';
import LocationPage from './Pages/LocationPage';
import StagePage from './Pages/StagePage';
import Footer from './Pages/Footer/footer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/logout" element={<LogOut />} /> */}

          <Route path="/userPage" element={<UserPage />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/locationPage" element={<LocationPage />} />
          <Route path="/stagepage" element={<StagePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
