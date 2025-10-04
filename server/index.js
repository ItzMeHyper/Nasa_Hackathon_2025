const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Legacy OPENAQ endpoint - keeping for reference
// app.get("/api/air-quality/openaq", async (req, res) => {
//   try {
//     const { lat = "19.0760", lon = "72.8777" } = req.query; // Default to Mumbai coordinates
//     const apiKey = process.env.OPENAQ_API_KEY;
//     
//     if (!apiKey) {
//       return res.status(500).json({ error: "OPENAQ API key not configured" });
//     }
//
//     const response = await axios.get(`http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${apiKey}`);
//     res.json(response.data);
//   } catch (err) {
//     console.error('Air Quality API Error:', err.message);
//     res.status(500).json({ 
//       error: "Failed to fetch air quality data",
//       details: err.message 
//     });
//   }
// });

// NASA EONET (Earth Observatory Natural Event Tracker)
app.get("/api/nasa/events", async (req, res) => {
  try {
    const NASA_API_KEY = process.env.NASA_API_KEY || 'DEMO_KEY';
    const r = await axios.get(`https://eonet.gsfc.nasa.gov/api/v3/events?api_key=${NASA_API_KEY}`);
    res.json(r.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// NASA GIBS Earth Imagery 
app.get("/api/nasa/earth", async (req, res) => {
  try {
    const { date = new Date().toISOString().split('T')[0] } = req.query;
    
    // Using NASA GIBS service for True Color imagery
    const url = `https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/${date}/250m/0/0/0.jpg`;
    
    res.json({
      imageUrl: url,
      date: date,
      source: "NASA GIBS (MODIS Terra True Color)",
      attribution: "NASA Earth Observatory",
      resolution: "250m",
      note: "This image is from the MODIS Terra satellite and shows true color corrected reflectance"
    });
  } catch (err) {
    console.error('Earth imagery error:', err.message);
    res.status(500).json({ 
      error: "Failed to fetch Earth imagery", 
      details: err.message 
    });
  }
});

// NASA TEMPO Data
app.get("/api/nasa/tempo", async (req, res) => {
  try {
    // Get TEMPO data from Python service
    const response = await axios.get('http://localhost:5000/tempo/data');
    res.json(response.data);
  } catch (err) {
    console.error('TEMPO data error:', err);
    res.status(500).json({ error: "Failed to fetch TEMPO data", details: err.message });
  }
});

// NASA Earth Temperature Data
app.get("/api/nasa/earth/temperature", async (req, res) => {
  try {
    const { lat = "0", lon = "0" } = req.query;
    const NASA_API_KEY = process.env.NASA_API_KEY || 'DEMO_KEY';
    const url = `https://power.larc.nasa.gov/api/temporal/daily/point?parameters=T2M&community=RE&longitude=${lon}&latitude=${lat}&start=20250101&end=20251004&format=JSON`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// NASA Space Weather
app.get("/api/nasa/space-weather", async (req, res) => {
  try {
    const NASA_API_KEY = process.env.NASA_API_KEY || 'DEMO_KEY';
    const url = `https://api.nasa.gov/DONKI/notifications?api_key=${NASA_API_KEY}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Air Quality Data (OpenWeather)
app.get("/api/air-quality", async (req, res) => {
  try {
    const { lat = "19.0760", lon = "72.8777" } = req.query; // Default to Mumbai coordinates
    const OPENWEATHER_KEY = process.env.OPENWEATHER_KEY;
    
    if (!OPENWEATHER_KEY) {
      return res.status(500).json({ error: "OpenWeather API key not configured" });
    }

    // Using OpenWeather Air Pollution API
    const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_KEY}`;
    const response = await axios.get(url);
    
    // Format the response to be more user-friendly
    const aqi = response.data.list[0].main.aqi;
    const components = response.data.list[0].components;
    
    res.json({
      aqi: aqi,
      qualitativeAqi: [
        'Good',
        'Fair',
        'Moderate',
        'Poor',
        'Very Poor'
      ][aqi - 1],
      components: {
        co: components.co,    // Carbon monoxide, μg/m3
        no2: components.no2,  // Nitrogen dioxide, μg/m3
        o3: components.o3,    // Ozone, μg/m3
        pm2_5: components.pm2_5,  // Fine particles, μg/m3
        pm10: components.pm10     // Coarse particles, μg/m3
      },
      location: {
        lat,
        lon
      },
      timestamp: response.data.list[0].dt * 1000 // Convert to milliseconds
    });
  } catch (err) {
    console.error('Air quality error:', err.message);
    res.status(500).json({ 
      error: "Failed to fetch air quality data",
      details: err.message 
    });
  }
});

// Health check endpoint with enhanced information
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    apiKeys: {
      nasa: process.env.NASA_API_KEY ? "configured" : "missing",
      openWeather: process.env.OPENWEATHER_KEY ? "configured" : "missing"
    },
    endpoints: [
      "/api/air-quality",
      "/api/nasa/events",
      "/api/nasa/earth",
      "/api/nasa/tempo",
      "/api/nasa/earth/temperature",
      "/api/nasa/space-weather"
    ]
  });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`\n🚀 NASA Hackathon 2025 Server`);
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('\nAvailable endpoints:');
  console.log('- GET /health');
  console.log('- GET /api/air-quality?lat=19.0760&lon=72.8777');
  console.log('- GET /api/nasa/events');
  console.log('- GET /api/nasa/earth?date=2025-10-04');
  console.log('- GET /api/nasa/tempo');
  console.log('- GET /api/nasa/earth/temperature?lat=19.0760&lon=72.8777');
  console.log('- GET /api/nasa/space-weather\n');
});