import React from "react";
import { Routes, Route} from "react-router-dom";
import home from "./home";
import about from "./about";
import detail from ;
import moviedetails from;
import './assets/item.css';

const App = () => {
  return(
    <Routes>
      <Routes path="/" element={<home/>}></Routes>
      <Routes path="/about" element={<about/>}></Routes>
      <Routes path="/details" element={<details/>}></Routes>
      <Routes path=":movieid" element={<moviedetails/>}></Routes>
    </Routes>
  )
}
export default App;