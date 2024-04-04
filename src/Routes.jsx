// Routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';

const AppRoutes = () => {
  return (
    <Router>
        <Header/>
      <Routes>
        {/* <Route path="/signup" element={<SignupPage />} /> */}
        <Route path="/login" element={<Login />} />


        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default AppRoutes;
