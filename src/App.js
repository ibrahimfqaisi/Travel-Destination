
import { Routes, Route } from "react-router-dom";

import './App.css';
import Home from './Components/home/Home';
import TourDetails from './Components/TourDetails/TourDetails';
import Navbar from './Components/Navbar/Navbar';

const memesData = require("./data/db.json")

function App() {


  return (
    <>
    <Navbar />
    <div className="main">
      
      <Routes>
        <Route path="/" element={<Home data={memesData} />} />
        <Route path={"/:city/:id"} element={<TourDetails data={memesData} />} />
      </Routes>
    </div></>
  );
}

export default App;
