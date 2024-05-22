import { Route, Routes } from "react-router-dom";
import Header from "./tariel/header/Header";
import Sections from "./Sections/Sections";
import Footer from "./components/footer/footer";
import Corparatif from "./edil/corparatif/corparatif";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Sections />} />
        <Route path="/Сотрудничества" element={<Corparatif/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
