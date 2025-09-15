import { useEffect, useState } from "react";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=bf9d3a9ede4a6288132b25f2ca9482ed&units=metric`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, []);

  // ✅ Safe rendering: check if data exists
  if (!weather) {
    return <p>Loading weather...</p>;
  }

  // ✅ Avoid crash if weather.weather is undefined
  const description =
    weather.weather && weather.weather.length > 0
      ? weather.weather[0].description
      : "No description";

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{weather.name}</h1>
      <p>{description}</p>
      <p>🌡 {weather.main?.temp}°C</p>
      <p>💧 Humidity: {weather.main?.humidity}%</p>
    </div>
  );
};

export default WeatherApp;
