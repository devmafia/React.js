//import logo from './logo.svg';
import {Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/header";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import Details from "./pages/details";
import GlobalState from "./context";

function App() {
  return (
    <div className="App">
      <div className=' '>
        <Navbar>
        </Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>}>
            </Route>
            <Route path="/favorites" element={<Favorites></Favorites>}>
            </Route>
            <Route path="/recipe-item/:id" element={<Details></Details>}>
            </Route>
          </Routes>
      </div>
    </div>
  );
}

export default App;
