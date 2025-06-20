import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Chatbot from './components/internal_components/chatbot';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SecNavbar from './components/layout/SecNavbar';
import Home from './pages/Home';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col">
      <Navbar />
      {isHomePage && <SecNavbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
