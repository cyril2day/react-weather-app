/*
      current_weather object structure:

      {
        time: string,          // ISO 8601 timestamp (e.g., "2025-07-17T12:00")
        interval: number,      // Time interval in seconds (e.g., 900 = 15 minutes)
        temperature: number,   // Temperature in degrees Celsius
        windspeed: number,     // Wind speed in km/h
        winddirection: number, // Wind direction in degrees (0° = North, 90° = East, etc.)
        is_day: number,        // 1 if it's daytime, 0 if it's nighttime
        weathercode: number    // Encoded weather condition (see Open-Meteo API documentation)
      }
    */
    /*
      daily object structure:

      {
        time: string[],                  // Array of 7 dates (YYYY-MM-DD) for each forecast day

        temperature_2m_max: number[],    // Array of maximum daily temperatures (°C), 
                                         // aligned by index with `time`

        temperature_2m_min: number[],    // Array of minimum daily temperatures (°C), 
                                         // aligned by index with `time`

        weather_code: number[]           // Array of encoded weather condition codes for each day
                                         // e.g., 3 = partly cloudy, 80 = rain showers)
      }

      Note:
      - All arrays are the same length and share a 1:1 correspondence by index.
      - Example: `For date time[0] (today):
                      max temperature is `temperature_2m_max[0]`.
                      min temperature is `temperature_2m_min[0]`.
                      weather code is `weather_code[0]`.
    */
    
    /*
      hourly object structure:

      {
        time: string[],                 // Array of hourly timestamps (e.g., "2025-07-17T00:00").
                                        // Each entry represents a separate hour.

        temperature_2m: number[],       // Air temperature (°C) for each hour (at 2 meters).
                                        // Index-aligned with the `time` array.

        relative_humidity_2m: number[], // Relative humidity (%) at 2 meters for each hour.
                                        // Index-aligned with the `time` array.

        wind_speed_10m: number[],       // Wind speed at 10 meters above ground level (km/h).
                                        // Also index-aligned with all other arrays.

        weather_code: number[]          // Encoded weather condition for each hour.
                                        // e.g., 3 = partly cloudy, 80 = rain showers

      }

      Notes:
      - All arrays are the same length and are **index-aligned**:
        - Example: The weather at `time[10]` has:
          - temperature = `temperature_2m[10]`
          - humidity = `relative_humidity_2m[10]`
          - wind speed = `wind_speed_10m[10]`
          - condition = `weather_code[10]`

      - This structure supports hourly forecasts for multiple days (e.g., 7 x 24 = 168 hours).
    */