import React from "react";
import movies from "../public/movie";
//import Navigasi from;
import header from "./header";
import movies from "../public/movie";
import footer from "./footer";

const home = () =>{
  return(
    <div>
    {/* <Navigasi/> */}
    <Header/>
    <Movies/>
    <Footer/>
    </div>
  );
}
export default home;