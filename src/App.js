import { Route, Router, Routes } from "react-router-dom";
import Header from "./tariel/header/Header";
import Sections from "./Sections/Sections";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Sections />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
