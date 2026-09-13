import { useState } from 'react'
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
