import './App.css';
import './csss.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />}/>
        <Route index element={<Home />} />
        <Route path="Pokedex" element={<Pokedex />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

