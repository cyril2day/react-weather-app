const HumidityCard = ({ humidity }) => {
  return (
    <div className='bg-white/10 rounded-xl p-4 mb-3'>
      <div className='flex items-center space-x-2 mb-2'>
        <span className='text-xl'>💧</span>

        <span className='text-blue-100 text-sm'>Humidity</span>
      </div>

      <div className='text-white font-bold text-lg'>
        {humidity}%
      </div>
    </div>
  )
}

export default HumidityCard
