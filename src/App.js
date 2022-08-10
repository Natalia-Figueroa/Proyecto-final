import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { pokemon } from "./Database/Pokemon";
import { Home } from "./Pages/Home";
import { Skills } from "./Pages/Skills";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path={"/card"} element={<Skills />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
