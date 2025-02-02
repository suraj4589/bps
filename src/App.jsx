import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Home from '../src/pages/home/Home';
import About from '../src/pages/about/About';
import Navbar from './components/navbar/Navbar.jsx';
import Service from './pages/service/Service';
import Userlogin from './components/login/user/Userlogin';
import Empylogin from './components/login/employee/Empylogin';
import Busilogin from './components/login/business/MsmeLogin.jsx';
import Contact from './pages/contact/Contact';
import UserProfile from './components/UserProfile/UserProfile';

function App() {
  const Layout = () => {
    const location = useLocation();

    const hideNavbarPaths = ['/user-profile'];

    return (
      <div>
        {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/userlogin" element={<Userlogin />} />
          <Route path="/empylogin" element={<Empylogin />} />
          <Route path="/busilogin" element={<Busilogin />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
