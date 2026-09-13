import { getWeatherIcon, getConditionLabel } from '../utils/weather'
import HumidityCard from './HumidityCard'
import WindSpeedCard from './WindSpeedCard'
import WindspeedCard from './WindSpeedCard'

const CurrentWeather = ({ weather }) => {
  const icon = getWeatherIcon(weather.weatherCode)

  const conditionLabel = getConditionLabel(weather.weatherCode)
  return (
    <div className='bg-white/20 backgdrop-blur-md  rounded-2xl p-6 border border-white/30 shadow-lg mb-8'>
      {/* Top section: city, country, temperature, and range */}
      <div className='flex items-center justify-between mb-6'>
        <div>
          <h2 className='text-2xl font-bold text-white'>{weather.city}</h2>

          <p className='text-blue-100'>{weather.country}</p>
        </div>

        <div className='text-right'>
          {/* Display current temperature */}
          <div className='text-4xl font-bold text-white'>
            {weather.temperature}
          </div>

          {/* Display min/max temperature */}
          <div className='text-blue-100'>
            {weather.minTemp}° / {weather.maxTemp}
          </div>
        </div>
      </div>

      {/* Middle section: weather icon, condition label, feels like temp */}
      <div className='flex items-center justify-between mb-6'>
        <div className='flex items-center space-x-3'>
          <span className='text-3xl'>{icon}</span>

          <span className='text-white font-medium'>{conditionLabel}</span>
        </div>    

        <div className='text-blue-100'>Feels like {weather.feelsLike}</div>
      </div>

      {/* Bottom section: humidity and wind speed cards */}
      <div className=''>
        <HumidityCard humidity={weather.humidity} />

        <WindSpeedCard windspeed={weather.windSpeed} />
      </div>
    </div>
  )
}

export default CurrentWeather
