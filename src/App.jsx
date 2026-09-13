import { useState, useEffect } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import HourlyForecast from './components/HourlyForecast'
import Forecast from './components/Forecast'

const App = () => {
  const [data, setData] = useState(null)

  const [selectedCity, setSelectedCity] = useState(null)

  const [weatherData, setWeatherData] = useState(null)

  const [forecastData, setForecastData] = useState([])

  const [hourlyData, setHourlyData] = useState([])

  const handleCitySelect = (city) => {
    setSelectedCity(city)
  }

  useEffect(() => {
    if(!selectedCity) return
    
    const fetchWeatherData = async() => {
      const {latitude, longitude} = selectedCity

      try {
        const baseUrl = "https://api.open-meteo.com/v1/forecast"

        const params = new URLSearchParams({
          latitude: latitude,
          longitude: longitude,
          current_weather: 'true',
          daily: 'temperature_2m_max,temperature_2m_min,weather_code',
          hourly: 'temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code',
          timezone: 'auto'
        })

        const url = `${baseUrl}?${params.toString()}`

        const response = await fetch(url)

        const weatherJson = await response.json()

        setData({...weatherJson, location: selectedCity })

        console.log(weatherJson)
      } catch(error) {
        console.error("Error fetching weather data:", error)
      }
    }

    fetchWeatherData()
  }, [selectedCity])

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600'>
      {/* Inner container for spacing*/}
      <div className='container mx-auto px-4 py-8'>
        {/* App header section */}
        <Header />

        {/* Search bar for selecting cities */}
        <SearchBar onCitySelect={handleCitySelect} />

        {/* Show current weather if available */}
        {weatherData && <CurrentWeather weather={weatherData} />}

        {/* Show hourly forecast if available */}
        {!!hourlyData.length && <HourlyForecast hourlyData={hourlyData} />}

        {/* Show 6-day forecast if available */}
        {!!forecastData.length && <Forecast forecastData={forecastData} />}
      </div>
    </div>
  )
}

export default App
