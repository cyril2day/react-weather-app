const HourlyForecastCard = ({hour, icon}) => {
  return (
    <div className='flex-shrink-0 bg-white/10 rounded-xl p-4 min-w-[120px] text-center hover:bg-white/20 transition-colors duration-200'>
      <div className='text-blue-100 text-sm mb-2'>
        {hour.time}
      </div>

      <div className='text-2xl mb-3'>
        {icon}
      </div>

      <div className='text-white font-bold text-lg mb-2'>
        {hour.temp}°
      </div>

      <div className='text-blue-100 text-xs mb-1'>
        💧
        {hour.humidity}%
      </div>

      <div className='text-blue-100 text-xs'>
        ☁️
        {hour.wind} km/h
      </div>
    </div>
  )
}

export default HourlyForecastCard
