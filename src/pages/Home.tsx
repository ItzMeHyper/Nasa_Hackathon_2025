import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Satellite, Brain, Cloud, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-gray-950 to-purple-950" />

        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent neon-text-subtle">
                Predicting Cleaner,
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 bg-clip-text text-transparent neon-text-subtle">
                Safer Skies
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Real-time forecasts powered by NASA TEMPO data, AI, and cloud computing
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/dashboard"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-lg font-semibold neon-glow-subtle hover:scale-105 transition-transform hover:neon-glow"
            >
              <span>Check My Air Quality</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: Satellite, label: 'NASA Data' },
              { icon: Cloud, label: 'Cloud Computing' },
              { icon: Brain, label: 'AI Predictions' },
              { icon: Shield, label: 'Safer Skies' }
            ].map(({ icon: Icon, label }, idx) => (
              <div key={label} className="glass rounded-2xl p-6 hover:scale-105 transition-transform">
                <Icon className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                <p className="text-sm text-gray-300">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-cyan-400 text-sm">Scroll to explore</div>
        </motion.div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-950 to-blue-950/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Clean Air Matters
            </h2>
            <p className="text-gray-400 text-lg">Making a difference for communities worldwide</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Health Benefits',
                description: 'Reduce respiratory issues and improve overall health',
                color: 'from-green-500 to-emerald-600'
              },
              {
                title: 'Climate Impact',
                description: 'Monitor and mitigate environmental changes',
                color: 'from-blue-500 to-cyan-600'
              },
              {
                title: 'Smarter Cities',
                description: 'Data-driven urban planning and policy',
                color: 'from-violet-500 to-purple-600'
              },
              {
                title: 'Public Awareness',
                description: 'Empower communities with real-time insights',
                color: 'from-orange-500 to-red-600'
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:scale-105 transition-transform"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} mb-4 flex items-center justify-center`}>
                  <div className="w-6 h-6 bg-white/20 rounded" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-100">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
