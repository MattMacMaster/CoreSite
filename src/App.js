import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

function Home() {
  return <h2 style={{ padding: "1rem" }}>Home Page</h2>;
}

function About() {
  return <h2 style={{ padding: "1rem" }}>About Page</h2>;
}

function Contact() {
  return <h2 style={{ padding: "1rem" }}>Contact Page</h2>;
}

function App() {
  return (
    <div className="App">
      <Router>
        {/* NavBar */}
        <nav className="navbar">
          <div className="nav-logo">Fumple</div>
          <div className="nav-links">
            <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
              Projects/Work
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
              Contact
            </NavLink>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      {/* Default CRA Header */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Main Page - Todo</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

