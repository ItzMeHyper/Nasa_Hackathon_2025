export interface AQIData {
  location: string;
  latitude: number;
  longitude: number;
  aqi: number;
  category: string;
  pollutants: {
    pm25: number;
    pm10: number;
    no2: number;
    o3: number;
    co: number;
  };
  healthAdvisory: string;
  timestamp: Date;
}

export interface AQIForecast {
  date: Date;
  aqi: number;
  category: string;
  advisory: string;
}

export interface OceanData {
  location: string;
  latitude: number;
  longitude: number;
  temperature: number;
  salinity: number;
  phLevel: number;
  waveHeight: number;
  pollutionLevel: string;
  timestamp: Date;
}

export interface WeatherData {
  location: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  precipitation: number;
  pressure: number;
  uvIndex: number;
}

export interface GlobalMarker {
  country: string;
  latitude: number;
  longitude: number;
  aqi: number;
  co2Level: number;
  temperature: number;
  dataQuality: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  message: string;
  timestamp: Date;
}
