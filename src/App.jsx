// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';  // Import Header component from components folder
import Footer from './components/Footer';  // Import Footer component from components folder
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Header Component */}
        <Header />

        <Routes>
        <Route path="/" element={<Home />} />
        
        </Routes>

      
        <Footer />
      </div>
    </Router>
  );
}

export default App;
