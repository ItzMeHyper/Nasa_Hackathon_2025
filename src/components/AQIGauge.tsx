import { motion } from 'framer-motion';
import { getAQIColor, getAQICategory } from '../utils/mockData';

interface AQIGaugeProps {
  aqi: number;
  label?: string;
}

export default function AQIGauge({ aqi, label = 'Current AQI' }: AQIGaugeProps) {
  const percentage = Math.min((aqi / 500) * 100, 100);
  const color = getAQIColor(aqi);
  const category = getAQICategory(aqi);

  return (
    <div className="glass rounded-2xl p-6 gradient-border">
      <h3 className="text-lg font-semibold text-gray-300 mb-4">{label}</h3>
      <div className="relative w-48 h-48 mx-auto">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="88"
            stroke="rgba(148, 163, 184, 0.2)"
            strokeWidth="12"
            fill="none"
          />
          <motion.circle
            cx="96"
            cy="96"
            r="88"
            stroke={color}
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 88}`}
            initial={{ strokeDashoffset: 2 * Math.PI * 88 }}
            animate={{ strokeDashoffset: 2 * Math.PI * 88 * (1 - percentage / 100) }}
            transition={{ duration: 2, ease: 'easeOut' }}
            style={{
              filter: `drop-shadow(0 0 8px ${color})`
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="text-5xl font-bold"
            style={{ color }}
          >
            {aqi}
          </motion.div>
          <div className="text-sm text-gray-400 mt-2 text-center">{category}</div>
        </div>
      </div>
    </div>
  );
}
