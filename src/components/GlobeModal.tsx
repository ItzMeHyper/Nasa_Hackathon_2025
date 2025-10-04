import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, X, RotateCw } from 'lucide-react';
import { mockGlobalMarkers } from '../utils/mockData';

export default function GlobeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
        }}
      >
        <Globe className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-gray-950/95 backdrop-blur-sm"
          >
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={() => setSelectedMarker(null)}
                className="glass p-3 rounded-lg hover:bg-gray-800/50 transition-colors"
              >
                <RotateCw className="w-5 h-5 text-cyan-400" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="glass p-3 rounded-lg hover:bg-gray-800/50 transition-colors"
              >
                <X className="w-5 h-5 text-cyan-400" />
              </button>
            </div>

            <div className="h-full flex items-center justify-center p-8">
              <div className="relative w-full max-w-4xl h-[600px] glass rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Global Environmental Data
                </h2>

                <div className="relative w-full h-[400px] bg-gradient-to-br from-blue-950/50 to-purple-950/50 rounded-2xl border border-cyan-500/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-80 h-80 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-4 border-cyan-500/30 relative"
                      style={{
                        boxShadow: '0 0 60px rgba(59, 130, 246, 0.4), inset 0 0 60px rgba(59, 130, 246, 0.2)'
                      }}
                    >
                      {mockGlobalMarkers.map((marker, idx) => {
                        const angle = (idx / mockGlobalMarkers.length) * 2 * Math.PI;
                        const radius = 140;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;

                        return (
                          <motion.button
                            key={marker.country}
                            onClick={() => setSelectedMarker(marker.country)}
                            className="absolute w-4 h-4 rounded-full bg-cyan-400 cursor-pointer"
                            style={{
                              left: `calc(50% + ${x}px)`,
                              top: `calc(50% + ${y}px)`,
                              transform: 'translate(-50%, -50%)',
                              boxShadow: '0 0 12px rgba(6, 182, 212, 0.8)'
                            }}
                            whileHover={{ scale: 1.5 }}
                            animate={{
                              scale: selectedMarker === marker.country ? 1.8 : 1,
                            }}
                          />
                        );
                      })}

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <Globe className="w-16 h-16 text-cyan-400/50 mx-auto mb-2" />
                          <p className="text-sm text-gray-400">Click markers for data</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {selectedMarker && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 grid grid-cols-4 gap-4"
                  >
                    {mockGlobalMarkers
                      .filter(m => m.country === selectedMarker)
                      .map(marker => (
                        <>
                          <div className="glass rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-cyan-400">{marker.aqi}</div>
                            <div className="text-xs text-gray-400 mt-1">AQI</div>
                          </div>
                          <div className="glass rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-green-400">{marker.co2Level}</div>
                            <div className="text-xs text-gray-400 mt-1">CO₂ (ppm)</div>
                          </div>
                          <div className="glass rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-orange-400">{marker.temperature}°C</div>
                            <div className="text-xs text-gray-400 mt-1">Temperature</div>
                          </div>
                          <div className="glass rounded-lg p-4 text-center">
                            <div className="text-sm font-bold text-violet-400">{marker.dataQuality}</div>
                            <div className="text-xs text-gray-400 mt-1">Data Quality</div>
                          </div>
                        </>
                      ))
                    }
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
