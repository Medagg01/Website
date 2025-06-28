import { Routes, Route } from 'react-router-dom';

import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Chatbot from './components/internal_components/chatbot';

function App() {

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col">
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
