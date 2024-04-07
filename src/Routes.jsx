// Routes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import CreateTask from "./components/CreateTask";
import DisplayTask from "./components/DisplayTask";
import UpdateTask from "./components/UpdateTask";
import Logout from "./components/Logout";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createTask" element={<CreateTask />} />
        <Route path="/displayTask" element={<DisplayTask />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/updateTask/:id" element={<UpdateTask />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
