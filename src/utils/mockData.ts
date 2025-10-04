import { AQIData, AQIForecast, OceanData, GlobalMarker } from '../types';

export const getAQICategory = (aqi: number): string => {
  if (aqi <= 50) return 'Good';
  if (aqi <= 100) return 'Moderate';
  if (aqi <= 150) return 'Unhealthy for Sensitive Groups';
  if (aqi <= 200) return 'Unhealthy';
  if (aqi <= 300) return 'Very Unhealthy';
  return 'Hazardous';
};

export const getAQIColor = (aqi: number): string => {
  if (aqi <= 50) return '#10b981';
  if (aqi <= 100) return '#fbbf24';
  if (aqi <= 150) return '#f97316';
  if (aqi <= 200) return '#ef4444';
  if (aqi <= 300) return '#dc2626';
  return '#991b1b';
};

export const getHealthAdvisory = (aqi: number): string => {
  if (aqi <= 50) return 'Air quality is satisfactory. Enjoy outdoor activities!';
  if (aqi <= 100) return 'Air quality is acceptable. Sensitive individuals should limit prolonged outdoor exertion.';
  if (aqi <= 150) return 'Members of sensitive groups may experience health effects. General public is less likely to be affected.';
  if (aqi <= 200) return 'Everyone may begin to experience health effects. Sensitive groups should avoid outdoor activities.';
  if (aqi <= 300) return 'Health alert: everyone may experience serious health effects. Avoid outdoor activities.';
  return 'Health warnings of emergency conditions. Everyone should remain indoors.';
};

export const mockAQIData: AQIData[] = [
  {
    location: 'Kochi, India',
    latitude: 9.9312,
    longitude: 76.2673,
    aqi: 142,
    category: 'Unhealthy for Sensitive Groups',
    pollutants: {
      pm25: 52.4,
      pm10: 85.2,
      no2: 45.8,
      o3: 68.3,
      co: 1.2
    },
    healthAdvisory: 'Sensitive groups should reduce prolonged outdoor activities.',
    timestamp: new Date()
  },
  {
    location: 'New York, USA',
    latitude: 40.7128,
    longitude: -74.0060,
    aqi: 68,
    category: 'Moderate',
    pollutants: {
      pm25: 28.4,
      pm10: 42.2,
      no2: 35.8,
      o3: 48.3,
      co: 0.8
    },
    healthAdvisory: 'Air quality is acceptable for most individuals.',
    timestamp: new Date()
  },
  {
    location: 'Tokyo, Japan',
    latitude: 35.6762,
    longitude: 139.6503,
    aqi: 45,
    category: 'Good',
    pollutants: {
      pm25: 15.4,
      pm10: 22.2,
      no2: 25.8,
      o3: 38.3,
      co: 0.5
    },
    healthAdvisory: 'Air quality is excellent. Perfect for outdoor activities!',
    timestamp: new Date()
  }
];

export const mockForecasts: AQIForecast[] = [
  {
    date: new Date(Date.now() + 86400000),
    aqi: 155,
    category: 'Unhealthy',
    advisory: 'Limit outdoor activities tomorrow. Sensitive groups should stay indoors.'
  },
  {
    date: new Date(Date.now() + 172800000),
    aqi: 128,
    category: 'Unhealthy for Sensitive Groups',
    advisory: 'Air quality improving but still concerning for sensitive individuals.'
  },
  {
    date: new Date(Date.now() + 259200000),
    aqi: 95,
    category: 'Moderate',
    advisory: 'Conditions expected to improve significantly.'
  }
];

export const mockOceanData: OceanData[] = [
  {
    location: 'Arabian Sea',
    latitude: 15.0,
    longitude: 65.0,
    temperature: 28.5,
    salinity: 36.2,
    phLevel: 8.05,
    waveHeight: 2.3,
    pollutionLevel: 'Medium',
    timestamp: new Date()
  },
  {
    location: 'Pacific Ocean',
    latitude: 20.0,
    longitude: -155.0,
    temperature: 26.8,
    salinity: 35.8,
    phLevel: 8.12,
    waveHeight: 3.1,
    pollutionLevel: 'Low',
    timestamp: new Date()
  },
  {
    location: 'Atlantic Ocean',
    latitude: 25.0,
    longitude: -70.0,
    temperature: 27.2,
    salinity: 36.5,
    phLevel: 8.08,
    waveHeight: 2.8,
    pollutionLevel: 'Low',
    timestamp: new Date()
  }
];

export const mockGlobalMarkers: GlobalMarker[] = [
  { country: 'India', latitude: 20.5937, longitude: 78.9629, aqi: 142, co2Level: 2.8, temperature: 32, dataQuality: 'Good' },
  { country: 'USA', latitude: 37.0902, longitude: -95.7129, aqi: 68, co2Level: 2.2, temperature: 22, dataQuality: 'Excellent' },
  { country: 'China', latitude: 35.8617, longitude: 104.1954, aqi: 185, co2Level: 3.2, temperature: 28, dataQuality: 'Good' },
  { country: 'Brazil', latitude: -14.2350, longitude: -51.9253, aqi: 55, co2Level: 1.8, temperature: 26, dataQuality: 'Good' },
  { country: 'Japan', latitude: 36.2048, longitude: 138.2529, aqi: 45, co2Level: 2.0, temperature: 20, dataQuality: 'Excellent' },
  { country: 'Germany', latitude: 51.1657, longitude: 10.4515, aqi: 52, co2Level: 2.1, temperature: 18, dataQuality: 'Good' },
  { country: 'Australia', latitude: -25.2744, longitude: 133.7751, aqi: 38, co2Level: 1.9, temperature: 24, dataQuality: 'Excellent' },
  { country: 'South Africa', latitude: -30.5595, longitude: 22.9375, aqi: 62, co2Level: 2.3, temperature: 21, dataQuality: 'Good' },
];
