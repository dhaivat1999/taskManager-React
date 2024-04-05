// Routes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Callback from "./components/Callback";
import CreateTask from "./components/CreateTask";
import DisplayTask from "./components/DisplayTask";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/createTask" element={<CreateTask />} />
        <Route path="/displayTask" element={<DisplayTask />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
