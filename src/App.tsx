import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ChatBot from './components/ChatBot';
import GlobeModal from './components/GlobeModal';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Forecast from './pages/Forecast';
import Ocean from './pages/Ocean';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 relative overflow-x-hidden">
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950 pointer-events-none" />

        <Navigation />

        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/ocean" element={<Ocean />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        <ChatBot />
        <GlobeModal />

        <footer className="relative z-10 border-t border-gray-800 mt-20">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 NASA SpaceApps Challenge. Powered by NASA TEMPO Data.
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="/about" className="hover:text-cyan-400 transition-colors">About</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Data Sources</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
