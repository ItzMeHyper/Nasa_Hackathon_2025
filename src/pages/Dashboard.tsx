import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, AlertTriangle, TrendingUp, Wind } from 'lucide-react';
import AQIGauge from '../components/AQIGauge';
import { mockAQIData, getHealthAdvisory } from '../utils/mockData';

export default function Dashboard() {
  const [selectedCity, setSelectedCity] = useState(mockAQIData[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCities = mockAQIData.filter(city =>
    city.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    if (filteredCities.length > 0) {
      setSelectedCity(filteredCities[0]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
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
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Real-Time Air Quality Dashboard
          </h1>
          <p className="text-gray-400">Monitor air quality with NASA TEMPO satellite data</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search for your city..."
                className="w-full pl-12 pr-4 py-4 glass rounded-xl border border-cyan-500/20 focus:border-cyan-500/50 focus:outline-none text-gray-100 placeholder-gray-500"
              />
            </div>
            <button
              onClick={handleSearch}
              disabled={filteredCities.length === 0}
              className="px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 neon-glow"
            >
              Search
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {filteredCities.map(city => (
              <button
                key={city.location}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCity.location === city.location
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 neon-glow'
                    : 'glass text-gray-400 hover:text-cyan-400'
                }`}
              >
                <MapPin className="w-4 h-4 inline mr-2" />
                {city.location}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <AQIGauge aqi={selectedCity.aqi} label="Current AQI" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6 gradient-border"
          >
            <div className="flex items-center space-x-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              <h3 className="text-lg font-semibold text-gray-300">Health Advisory</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">{getHealthAdvisory(selectedCity.aqi)}</p>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-gray-500">For Children</div>
                  <div className="text-sm text-yellow-400 font-medium">Limit outdoor time</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">For Elderly</div>
                  <div className="text-sm text-orange-400 font-medium">Stay indoors</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-6 gradient-border"
          >
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-semibold text-gray-300">Trend Analysis</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">vs Yesterday</span>
                <span className="text-red-400 font-medium">+12%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">vs Last Week</span>
                <span className="text-green-400 font-medium">-8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Peak Time</span>
                <span className="text-cyan-400 font-medium">8-10 AM</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass rounded-2xl p-6 gradient-border"
        >
          <div className="flex items-center space-x-2 mb-6">
            <Wind className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-semibold text-gray-300">Pollutant Breakdown</h3>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {Object.entries(selectedCity.pollutants).map(([pollutant, value]) => (
              <div key={pollutant} className="bg-gray-800/50 rounded-xl p-4">
                <div className="text-xs text-gray-500 uppercase mb-1">{pollutant}</div>
                <div className="text-2xl font-bold text-cyan-400">{value}</div>
                <div className="text-xs text-gray-400 mt-1">μg/m³</div>
                <div className="mt-3 bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((value / 100) * 100, 100)}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 glass rounded-2xl p-6"
        >
          <div className="aspect-video bg-gradient-to-br from-blue-950/50 to-purple-950/50 rounded-xl border border-cyan-500/20 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-cyan-400/50 mx-auto mb-4" />
              <p className="text-gray-400">Interactive pollution heatmap</p>
              <p className="text-sm text-gray-500 mt-2">Powered by Mapbox & NASA TEMPO</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
