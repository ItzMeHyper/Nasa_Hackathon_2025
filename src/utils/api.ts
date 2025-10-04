const API_URL = import.meta.env.VITE_API_URL;

export const api = {
  // OpenAQ Data
  async getAirQuality() {
    const response = await fetch(`${API_URL}/api/openaq`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  },

  // NASA EONET Data
  async getNasaEvents() {
    const response = await fetch(`${API_URL}/api/nasa/events`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
};