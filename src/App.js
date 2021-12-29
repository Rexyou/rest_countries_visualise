import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Regions from './Pages/Regions';
import RegionDetails from './Pages/RegionDetails';
import CountryDetails from './Pages/CountryDetails';
import Errors from './Pages/Error'

function App() {

  return (
    <div className="container">
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          All Countries
        </NavLink>
        <NavLink to="/regions" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          Regions
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          About
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regions" element={<Regions />} />
        <Route path="/region/:ccn" element={<RegionDetails />} />
        <Route path="/country/:name" element={<CountryDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Errors/>}/>
      </Routes>
    </div>
  );
}

export default App;
