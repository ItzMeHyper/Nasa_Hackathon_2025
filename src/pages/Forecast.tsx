import { motion } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar, AlertCircle, TrendingDown, TrendingUp } from 'lucide-react';
import { mockForecasts, getAQIColor } from '../utils/mockData';

export default function Forecast() {
  const chartData = mockForecasts.map((forecast, idx) => ({
    day: `Day ${idx + 1}`,
    aqi: forecast.aqi,
    date: forecast.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }));

  const historicalData = [
    { day: 'Mon', aqi: 125 },
    { day: 'Tue', aqi: 138 },
    { day: 'Wed', aqi: 142 },
    { day: 'Thu', aqi: 155 },
    { day: 'Fri', aqi: 128 },
    { day: 'Sat', aqi: 95 },
    { day: 'Sun', aqi: 88 }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
            AI-Powered Forecasts & Alerts
          </h1>
          <p className="text-gray-400">72-hour predictions using NASA TEMPO data and machine learning</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-6 gradient-border mb-8"
        >
          <div className="flex items-center space-x-2 mb-6">
            <AlertCircle className="w-6 h-6 text-red-400" />
            <h2 className="text-2xl font-bold text-gray-100">Active Alerts</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-semibold rounded-full">
                      UNHEALTHY
                    </span>
                    <span className="text-gray-400 text-sm">Tomorrow, Kochi</span>
                  </div>
                  <p className="text-gray-300 text-lg font-medium">AQI expected to reach 155</p>
                  <p className="text-gray-400 text-sm mt-1">Limit outdoor activities. Sensitive groups should stay indoors.</p>
                </div>
                <div className="text-right">
                  <TrendingUp className="w-6 h-6 text-red-400 ml-auto mb-1" />
                  <span className="text-red-400 font-bold text-xl">+13</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-semibold rounded-full">
                      MODERATE
                    </span>
                    <span className="text-gray-400 text-sm">Day 3, Kochi</span>
                  </div>
                  <p className="text-gray-300 text-lg font-medium">Conditions improving to AQI 95</p>
                  <p className="text-gray-400 text-sm mt-1">Air quality returning to acceptable levels.</p>
                </div>
                <div className="text-right">
                  <TrendingDown className="w-6 h-6 text-green-400 ml-auto mb-1" />
                  <span className="text-green-400 font-bold text-xl">-33</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6 gradient-border"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-100">3-Day Forecast Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
                <XAxis
                  dataKey="date"
                  stroke="#94a3b8"
                  style={{ fontSize: '12px' }}
                />
                <YAxis
                  stroke="#94a3b8"
                  style={{ fontSize: '12px' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '8px',
                    color: '#f1f5f9'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="aqi"
                  stroke="#06b6d4"
                  strokeWidth={3}
                  dot={{ fill: '#06b6d4', r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6 gradient-border"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-100">Weekly Historical Data</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={historicalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
                <XAxis
                  dataKey="day"
                  stroke="#94a3b8"
                  style={{ fontSize: '12px' }}
                />
                <YAxis
                  stroke="#94a3b8"
                  style={{ fontSize: '12px' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: '8px',
                    color: '#f1f5f9'
                  }}
                />
                <Bar
                  dataKey="aqi"
                  fill="url(#colorGradient)"
                  radius={[8, 8, 0, 0]}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity={1} />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.8} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-2xl p-6 gradient-border"
        >
          <div className="flex items-center space-x-2 mb-6">
            <Calendar className="w-5 h-5 text-cyan-400" />
            <h3 className="text-xl font-semibold text-gray-100">Detailed Forecast</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {mockForecasts.map((forecast, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors"
              >
                <div className="text-center mb-4">
                  <div className="text-gray-400 text-sm mb-2">
                    {forecast.date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                  </div>
                  <div
                    className="text-5xl font-bold mb-2"
                    style={{ color: getAQIColor(forecast.aqi) }}
                  >
                    {forecast.aqi}
                  </div>
                  <div className="text-sm font-medium" style={{ color: getAQIColor(forecast.aqi) }}>
                    {forecast.category}
                  </div>
                </div>
                <p className="text-gray-400 text-sm text-center">{forecast.advisory}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 glass rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-100">AI Assistant Insights</h3>
          <div className="bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 rounded-xl p-4">
            <p className="text-gray-300">
              Our AI model predicts that AQI levels will peak tomorrow afternoon due to increased vehicular traffic
              and stagnant atmospheric conditions. We recommend scheduling outdoor activities for early morning or
              evening hours when pollution levels are typically lower. Sensitive groups should consider staying
              indoors during peak hours (12 PM - 4 PM).
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
