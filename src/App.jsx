import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './homepage';
import Footer from './footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Redirect from root path to /home */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* Route for the Home component */}
          <Route path="/home" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
