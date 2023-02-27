import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import RestaurantsData from "./components/Restaurantspage/RestaurantsData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodItems from "./components/FoodItems/FoodItems";
import Homepage from "./components/Homepage/Homepage";
import InputState from "./context/InputState";
function App() {
  return (
    <>
      {/* <Image/> */}
      <InputState>
        <BrowserRouter>
          <NavBar />
          <div className="App"></div>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/food" element={<FoodItems />}></Route>
            <Route path="/restaurants" element={<RestaurantsData />}></Route>
          </Routes>
        </BrowserRouter>
      </InputState>
    </>
  );
}

export default App;
