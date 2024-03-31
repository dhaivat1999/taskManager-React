import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import CreateTask from "./CreateTask";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div>
        <Home></Home>
      </div>
     
        <CreateTask></CreateTask>
      
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
