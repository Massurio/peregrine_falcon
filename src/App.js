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
import { useEffect, useState } from 'react';
import { tokenFetch } from './utils';
import { getLocationData } from "./utils/getContent";

function App() {
  const [user, setUser] = useState();
  const [locationData, setLocationData] = useState();

useEffect(()=>{
  tokenFetch(setUser);
  getLocationData(setLocationData);
},[])

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/logout" element={<LogOut />} /> */}

          <Route path="/userPage" element={<UserPage user={user} />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route
           path="/locationPage"
           element={<LocationPage user={user} locationData={locationData} />}
          />
          <Route path="/stagepage" element={<StagePage user={user}/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
