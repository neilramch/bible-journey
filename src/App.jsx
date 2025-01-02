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
          <div className='title-container'>
            <img src="data:image/png;base64,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" alt="map"></img>
            <h1>Biblical Journeys</h1>
          </div>

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
