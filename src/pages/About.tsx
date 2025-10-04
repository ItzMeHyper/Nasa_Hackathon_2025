import { motion } from 'framer-motion';
import { Satellite, Database, Brain, Zap, Globe, Shield } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Satellite,
      title: 'NASA TEMPO Data',
      description: 'Leveraging NASA\'s Tropospheric Emissions Monitoring of Pollution instrument for hourly air quality measurements across North America.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Brain,
      title: 'AI Predictions',
      description: 'Advanced machine learning models analyze patterns and predict air quality up to 72 hours in advance with high accuracy.',
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: Database,
      title: 'Cloud Computing',
      description: 'Scalable infrastructure processes terabytes of satellite data in real-time, delivering insights to millions of users.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Shield,
      title: 'Public Health',
      description: 'Personalized health advisories help vulnerable populations make informed decisions about outdoor activities.',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const timeline = [
    {
      title: 'Data Collection',
      description: 'NASA TEMPO satellite scans the atmosphere hourly, measuring pollutants like NO₂, O₃, and aerosols.'
    },
    {
      title: 'Processing & Analysis',
      description: 'Cloud infrastructure processes raw satellite data, combining it with ground sensors for accuracy.'
    },
    {
      title: 'AI Forecasting',
      description: 'Machine learning models predict future air quality based on weather patterns and historical trends.'
    },
    {
      title: 'User Delivery',
      description: 'Real-time dashboards and alerts deliver actionable insights to users worldwide.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
            About Our Platform
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We combine NASA's cutting-edge Earth observation technology with artificial intelligence
            to predict air quality and protect public health worldwide.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-3xl p-8 md:p-12 mb-16 gradient-border"
        >
          <div className="flex items-center justify-center mb-8">
            <Globe className="w-16 h-16 text-cyan-400" />
          </div>
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-100">
            Powered by NASA Earth Observation Data
          </h2>
          <p className="text-gray-400 text-lg text-center max-w-3xl mx-auto leading-relaxed">
            The NASA TEMPO (Tropospheric Emissions: Monitoring of Pollution) mission provides unprecedented
            hourly observations of air quality across North America. Our platform processes this data in
            real-time, combining it with ground-based sensors and weather information to deliver accurate
            forecasts and actionable insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="glass rounded-2xl p-8 gradient-border hover:scale-105 transition-transform"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-100">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            How It Works
          </h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-purple-500" />

            {timeline.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + idx * 0.15 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center font-bold text-xl">
                  {idx + 1}
                </div>
                <div className="glass rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-100">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid md:grid-cols-4 gap-6"
        >
          {[
            { icon: Zap, label: 'Real-Time Updates', value: 'Every Hour' },
            { icon: Globe, label: 'Global Coverage', value: '195 Countries' },
            { icon: Brain, label: 'AI Accuracy', value: '94%+' },
            { icon: Satellite, label: 'Data Points', value: '10M+/day' }
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + idx * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform"
            >
              <stat.icon className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-16 glass rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-100">Our Mission</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We believe everyone deserves access to accurate, real-time environmental data. By democratizing
            access to NASA's Earth observation technology and making it actionable through AI, we empower
            communities to protect their health and make informed decisions about their environment.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
