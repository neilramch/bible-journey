import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Study from './pages/Study';
import Sources from './pages/Sources';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Main Application Header */}
        <header>
          <h1>Biblical Journeys</h1>
          <p>Exploring Geography and Theology in Scripture</p>
          <nav>
            <Link to="/">Interactive Map</Link>
            <Link to="/study">Research Study</Link>
            <Link to="/sources">Resources</Link>
            <Link to="/about">About/Contact</Link>
          </nav>
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/study" element={<Study />} />
            <Route path="/sources" element={<Sources />} />
            {/* Add additional routes as needed */}
          </Routes>
        </main>

        {/* Footer */}
        <footer className="App-footer">
          <p>
            &copy; {new Date().getFullYear()} Biblical Journeys. All rights reserved.
          </p>
          <p>
            <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Use</a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
