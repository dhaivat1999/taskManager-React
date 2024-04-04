import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateTask from "./components/CreateTask";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from "./Routes";

function App() {

  return (
    <>
      <React.StrictMode>
        <AppRoutes />
      </React.StrictMode>
    </>
  );
}

export default App;
