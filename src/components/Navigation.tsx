import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart3, Waves, Globe as Globe2, Info, Satellite } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/dashboard', label: 'Dashboard', icon: BarChart3 },
    { to: '/forecast', label: 'Forecast', icon: BarChart3 },
    { to: '/ocean', label: 'Ocean', icon: Waves },
    { to: '/about', label: 'About', icon: Info }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-cyan-500/30 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                className="relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Satellite className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <motion.div
                  className="absolute inset-0 w-8 h-8 rounded-full border border-cyan-400/30"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0.3, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent neon-text-cyan">
                  CleanSky
                </span>
                <span className="text-xs text-gray-400 -mt-1">NASA TEMPO</span>
              </div>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="flex space-x-1">
            {links.map(({ to, label, icon: Icon }, index) => {
              const isActive = location.pathname === to;
              
              return (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={to}
                    className={`relative flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 group ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 neon-glow-subtle'
                        : 'text-gray-400 hover:text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10'
                    }`}
                  >
                    {/* Background Glow Effect */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-xl"
                        animate={{
                          boxShadow: [
                            "0 0 10px rgba(6, 182, 212, 0.2)",
                            "0 0 15px rgba(6, 182, 212, 0.25)",
                            "0 0 10px rgba(6, 182, 212, 0.2)"
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    )}
                    
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className={`w-4 h-4 relative z-10 ${
                        isActive ? 'text-cyan-400' : 'group-hover:text-cyan-400'
                      }`} />
                    </motion.div>
                    
                    {/* Label */}
                    <span className={`hidden sm:inline relative z-10 font-medium ${
                      isActive ? 'text-cyan-400' : 'group-hover:text-cyan-400'
                    }`}>
                      {label}
                    </span>

                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}

                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{
                        background: [
                          "linear-gradient(90deg, rgba(6,182,212,0.05), rgba(59,130,246,0.05))",
                          "linear-gradient(90deg, rgba(59,130,246,0.05), rgba(6,182,212,0.05))",
                          "linear-gradient(90deg, rgba(6,182,212,0.05), rgba(59,130,246,0.05))"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Status Indicator */}
          <motion.div
            className="hidden lg:flex items-center space-x-2 text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-gray-400">Live Data</span>
          </motion.div>
        </div>
      </div>

      {/* Subtle Border Animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.nav>
  );
}
