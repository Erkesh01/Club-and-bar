import Footer from "./components/footer/footer";
import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
import Section3 from "./components/section3/section3";
import Header from "./tariel/header/Header";
import Kitchen from "./tariel/kitchen/Kitchen";
import Main from "./tariel/main_section/Main";

import { Route, Routes } from "react-router-dom";
import Header from "./tariel/header/Header";
import Sections from "./Sections/Sections";
import Footer from "./components/footer/footer";
import Corparatif from "./edil/corparatif/corparatif";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Kitchen/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Footer/>
    </div>
  );
}

export default App;
