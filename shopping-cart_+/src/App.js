// import logo from './logo.svg';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Cart from "./pages/cart.jsx";
import Header from "./components/header/index.jsx";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/cart" element={<Cart />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
