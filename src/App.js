import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { action, originals } from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
    </div>
  );
}

export default App;
// 1.In V6, you can't use the 'component' prop anymore. It was replaced in favor of 'element'

// eg:   <Route path="/" element={<About />}></Route>

// 2.also, A <Route> is only ever to be used as the child of <Routes> element

// eg:
// import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//     <Router>
//        <Routes>
//           <Route element={<About />}  path="/about" />
//        </Routes>
//     </Router>
// ----------------------------
// In react-router-dom v6 useHistory() is replaced by useNavigate().
// You can use:

// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
// navigate('/home');