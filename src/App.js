import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Card } from "./Components/Cards/Card";
import { pokemon } from "./Database/Pokemon";
import { Home } from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path={"/card/:nombre"}
            element={<Card pokemon={pokemon} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
