import { getConditionLabel, weatherIcons } from '../utils/weather'

const ForecastCard = ({ forecast }) => {

  return (
    <div className='bg-white/20 backgdrop-blur-md rounded-xl p-4 border border-white/30 shadow-lg hover:bg-white/25 hover:scale-105 transition-all duration-200'>
      <div className='text-center'>
        <h3 className='text-white font-semibold mb-3'>
          {forecast.day}
        </h3>

        <div>
          <span className='text-2xl'>
            {weatherIcons[forecast.weatherCode] || '❓'}
          </span>
        </div>

        <div className='text-white mb-2'>
          <span className='text-lg font-bold'>{forecast.maxTemp}°</span>
          <span className='text-blue-100 ml-2'>{forecast.minTemp}°</span>
        </div>

        <p className='text-blue-100 text-sm'>{getConditionLabel(forecast.weatherCode)}</p>
      </div>
    </div>
  )
}

export default ForecastCard
