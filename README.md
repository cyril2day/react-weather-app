# Daily Meteo

Daily Meteo is a weather application that uses React and Vite. It lets users search for any city and view current weather conditions, a 24 hour forecast, and a 6 day forecast.

---

## App Features

**City Search with Autocomplete**

Users can type a city name into the search bar. Once three or more characters are entered, the app queries a geocoding API and presents a list of matching cities. Selecting a city from the list triggers a weather data fetch for that location.

**Current Weather Display**

The app shows the city name and country, current temperature, how the temperature feels, and the minimum and maximum temperatures for the day. A weather condition label and icon accompany these details. Humidity and wind speed are shown in separate small cards below.

**24 Hour Forecast**

A horizontally scrollable row of cards displays the forecast for each of the next 24 hours. Each card shows the time, a weather icon, temperature, humidity, and wind speed.

**6 Day Forecast**

A grid of cards shows the forecast for the next 6 days. Each card displays the day of the week, a weather icon, the maximum and minimum temperatures, and the weather condition label. The grid adapts its layout based on screen size.

---

## React Features Used

This project demonstrates several core React concepts. Every component is a functional component that uses arrow function syntax.

### Hooks

**useState**

The `useState` hook manages all application state. The root `App` component uses it to store the raw API response, the selected city object, and the three transformed data sets for current weather, hourly forecast, and daily forecast. The `SearchBar` component uses `useState` to manage the search query text and the autocomplete suggestion list.

**useEffect**

The `useEffect` hook handles two distinct side effects. The first one fires whenever the selected city changes. It fetches weather data from the Open-Meteo API. The second one fires whenever the raw API response changes. It transforms the response into structured objects that child components can consume directly. This two stage approach keeps data fetching and data transformation as separate concerns.

### Component Patterns

**Props and Data Flow**

Data flows from the root `App` component down through child components via props. Every child component receives the data it needs through props. There is no Context API or state management library involved. The `App` component acts as the single source of truth, and all state updates originate from user interactions in child components that call back up to `App`.

**Conditional Rendering**

The app renders weather sections only when relevant data is available. The current weather, hourly forecast, and daily forecast sections each check for the presence of their data before rendering. This ensures that the interface remains clean when no city has been selected yet.

**List Rendering**

The app uses the `map` function to render lists of components. The autocomplete suggestions in the search bar, the 24 hourly forecast cards, and the 6 daily forecast cards all come from arrays rendered with `map`. Each rendered element receives a key for React to track efficiently.

**Presentational and Container Separation**

Most components are purely presentational. They receive data through props and render it without managing any internal state or side effects. The `App` component serves as the container that holds all state and passes data downward. The `SearchBar` component is the only child component with its own state and API calls, since it manages the autocomplete behavior independently.

### Entry Point

The app uses `createRoot` from React 19 as its entry point and wraps the root component in `StrictMode`.

---

## Tooling

The project uses Vite as the build tool and development server. Tailwind CSS version 4 handles all styling through utility classes. The app uses oxlint for linting and pnpm as its package manager. TypeScript type definitions for React are included for editor support, though the project itself uses plain JavaScript with JSX.

---

## APIs

The app uses two public APIs from Open-Meteo. No API key is required.

- **Geocoding API** provides city name search and autocomplete results
- **Forecast API** provides current weather, hourly forecast, and daily forecast data
