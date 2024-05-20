import Header from "./tariel/header/Header";
import './app.css'
import Main from "./tariel/main_section/Main";
import Kitchen from "./tariel/kitchen/Kitchen";
import AfishaMain from "./edil/afisha/afishMain";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Kitchen/>
      <AfishaMain/>
    </div>
  );
}

export default App;
