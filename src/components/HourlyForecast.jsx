import { getWeatherIcon } from '../utils/weather'
import HourlyForecastCard from './HourlyForecastCard'

const HourlyForecast = ({ hourlyData }) => {
  return (
    <div className=''>
      <h2 className='text-2xl font-bold text-white mb-4'>
        Today&apos;s Weather
      </h2>

      <div className='bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg'>
        <div className='flex space-x-4 overflow-x-auto pb-2'>
          {hourlyData.map((hour, index) => (
            <HourlyForecastCard 
              key={index}
              hour={hour}
              icon={getWeatherIcon(hour.weatherCode)}
            />
          ))}

        </div>
      </div>
    </div>
  )
}

export default HourlyForecast
