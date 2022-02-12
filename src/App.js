import React from "react";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Intro from "./Component/Intro";
import ProductList from "./Component/ProductList";
import Slider from "./Component/Slider";
// import '../node_modules/'

const App = () => {
  return(
    <>
    <Intro/>
    <About/>
    <Slider/>
    <ProductList/>
    <Contact/>
    </>
  )
}

export default App;