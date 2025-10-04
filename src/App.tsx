import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
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
        {/* Enhanced Background Layers */}
        <div className="fixed inset-0 bg-gradient-to-br from-blue-950/50 via-gray-950 to-purple-950/50 pointer-events-none" />
        <div className="fixed inset-0 bg-cosmic pointer-events-none" />
        
        {/* Animated Background Grid */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>

        {/* Floating Particles */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Ambient Light Effects */}
        <div className="fixed inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <Navigation />

        <motion.div 
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/ocean" element={<Ocean />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </motion.div>

        <ChatBot />
        <GlobeModal />

        {/* Enhanced Footer */}
        <motion.footer 
          className="relative z-10 border-t border-cyan-500/20 mt-20 glass-strong"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Brand Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  CleanSky
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Empowering communities with real-time atmospheric data and AI-powered insights for a cleaner, safer future.
                </p>
                <div className="flex space-x-2">
                  <motion.div
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs text-gray-400">Live NASA TEMPO Data</span>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-200">Quick Links</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'Dashboard', href: '/dashboard' },
                    { label: 'Forecast', href: '/forecast' },
                    { label: 'Ocean Data', href: '/ocean' },
                    { label: 'About', href: '/about' }
                  ].map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Data Sources */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-200">Data Sources</h4>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-400">NASA TEMPO Satellite</div>
                  <div className="text-gray-400">Cloud Computing Platform</div>
                  <div className="text-gray-400">AI/ML Processing</div>
                  <div className="text-gray-400">Real-time Monitoring</div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-gray-400 text-sm mb-4 md:mb-0">
                  © 2025 NASA SpaceApps Challenge. Powered by NASA TEMPO Data.
                </div>
                <div className="flex space-x-6 text-sm text-gray-400">
                  <motion.a 
                    href="/about" 
                    className="hover:text-cyan-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    About
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="hover:text-cyan-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Data Sources
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="hover:text-cyan-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Contact
                  </motion.a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Glow Effect */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.footer>
      </div>
    </Router>
  );
}

export default App;
