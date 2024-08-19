
import './WeatherCard.css';

const WeatherCard = ({ weatherData, tempData, unit }) => {
  const {
    name,
    main: { temp },
    weather,
    wind: { speed },
  } = weatherData;

  const temperature = tempData && tempData.main ? tempData.main.temp : temp;

  return (
    <div className="weather-card weather-info">
      <h2>Weather in {name}</h2>
      <p> <span className="icon">🌡️</span>
        Temperature: {temperature}
        {unit === 'metric' ? '°C' : unit === 'imperial' ? '°F' : 'K'}
      </p>
      <p>
        <span className="icon">☁️</span> Weather: 
        {weather.map((condition, index) => (
          <span key={index}> {condition.description}</span>
        ))}
      </p>
      <p>
        <span className="icon">💨</span> Wind Speed: {speed} m/s
      </p>
    </div>
  );
};

export default WeatherCard;
