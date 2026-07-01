import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './components/menubar/Home';
import About from './components/menubar/About';
import Services from './components/menubar/Services';
import Contact from './components/menubar/Contact';
import Login from './components/menubar/Login';
import Register from './components/menubar/Register';
import Profile from "./components/menubar/Profile";
import ProtectedRoute from "./components/menubar/ProtectedRoute";

function App() {
  return (
    <div className="container">

      <header>
        <h1>AP Company</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>
      </Routes>

    </div>
  );
}

export default App;