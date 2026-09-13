import ForecastCard from './ForecastCard'

const Forecast = ({ forecastData }) => {
  return (
    <div>
      <h2 className='text-2xl font-bold text-white mb-4'>
        6-Day Forecast
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {forecastData.map((day, index) => (
          <ForecastCard 
            key={index}
            forecast={day}
          />
        ))}
      </div>
    </div>
  )
}

export default Forecast
