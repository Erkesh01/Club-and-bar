import { Route, Routes } from "react-router-dom";
import Header from "./tariel/header/Header";
import Sections from "./Sections/Sections";
import Footer from "./components/footer/footer";
import Corparatif from "./edil/corparatif/corparatif";
import AfishaMain from "./edil/afisha/afishMain";
import Gallery from "./edil/gallery/gallery";
import Section3 from "./components/section3/section3";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Sections />} />
        <Route path="/Сотрудничества" element={<Corparatif/>}/>
        <Route path="/Афиша" element={<AfishaMain/>}/>
        <Route path="/Галерея" element={<Gallery/>}/>
      </Routes>
      <Section3/>
      <Footer/>
    </div>
  );
}

export default App;
