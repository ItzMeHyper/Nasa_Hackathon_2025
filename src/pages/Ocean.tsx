import { motion } from 'framer-motion';
import { Waves, Droplet, Activity, Wind, Thermometer } from 'lucide-react';
import { mockOceanData } from '../utils/mockData';

export default function Ocean() {
  const getPollutionColor = (level: string) => {
    switch (level) {
      case 'Low': return '#10b981';
      case 'Medium': return '#f59e0b';
      case 'High': return '#ef4444';
      default: return '#6b7280';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
            Ocean Monitoring System
          </h1>
          <p className="text-gray-400">Real-time marine environmental data from NASA satellites</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-6 mb-8"
        >
          <div className="aspect-video bg-gradient-to-br from-cyan-950/50 to-blue-950/50 rounded-xl border border-cyan-500/20 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-32 h-32 rounded-full border-2 border-cyan-500/20"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
            <div className="relative text-center z-10">
              <Waves className="w-20 h-20 text-cyan-400/50 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">Interactive Ocean Monitoring Map</p>
              <p className="text-sm text-gray-500 mt-2">Real-time data from buoys and satellites</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {mockOceanData.map((ocean, idx) => (
            <motion.div
              key={ocean.location}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="glass rounded-2xl p-6 gradient-border"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-100">{ocean.location}</h3>
                <Waves className="w-6 h-6 text-cyan-400" />
              </div>

              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Thermometer className="w-4 h-4 text-orange-400" />
                    <span className="text-sm text-gray-400">Temperature</span>
                  </div>
                  <div className="text-3xl font-bold text-orange-400">{ocean.temperature}°C</div>
                  <div className="mt-2 bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(ocean.temperature / 35) * 100}%` }}
                      transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                      className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                    />
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Droplet className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-400">Salinity</span>
                  </div>
                  <div className="text-3xl font-bold text-blue-400">{ocean.salinity}</div>
                  <div className="text-xs text-gray-500 mt-1">parts per thousand</div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Activity className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-gray-400">pH Level</span>
                  </div>
                  <div className="text-3xl font-bold text-purple-400">{ocean.phLevel}</div>
                  <div className="text-xs text-gray-500 mt-1">Ocean acidification metric</div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Wind className="w-4 h-4 text-teal-400" />
                    <span className="text-sm text-gray-400">Wave Height</span>
                  </div>
                  <div className="text-3xl font-bold text-teal-400">{ocean.waveHeight}m</div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Pollution Level</span>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: `${getPollutionColor(ocean.pollutionLevel)}20`,
                        color: getPollutionColor(ocean.pollutionLevel)
                      }}
                    >
                      {ocean.pollutionLevel}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 grid md:grid-cols-2 gap-6"
        >
          <div className="glass rounded-2xl p-6 gradient-border">
            <h3 className="text-xl font-semibold mb-4 text-gray-100">Ocean Health Indicators</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <span className="text-gray-300">Coral Reef Health</span>
                <span className="text-yellow-400 font-medium">Moderate</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <span className="text-gray-300">Marine Biodiversity</span>
                <span className="text-green-400 font-medium">Good</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <span className="text-gray-300">Plastic Pollution</span>
                <span className="text-orange-400 font-medium">Concerning</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <span className="text-gray-300">Oxygen Levels</span>
                <span className="text-green-400 font-medium">Stable</span>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 gradient-border">
            <h3 className="text-xl font-semibold mb-4 text-gray-100">Climate Impact</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-4">
                <p className="text-gray-300 leading-relaxed">
                  Ocean temperatures are rising due to climate change, affecting marine ecosystems worldwide.
                  Our monitoring systems track these changes in real-time using NASA satellite data.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-3xl font-bold text-red-400">+0.6°C</div>
                  <div className="text-xs text-gray-400 mt-1">vs 20yr avg</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-400">-0.05</div>
                  <div className="text-xs text-gray-400 mt-1">pH decrease</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
