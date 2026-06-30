# Weather App

A simple, elegant weather application that provides real-time weather information for any city worldwide. Built with vanilla HTML, CSS, and JavaScript using the OpenWeatherMap API.

## Features

- **Real-time Weather Data**: Fetches current weather conditions for any city
- **Temperature Display**: Shows temperature in Celsius with metric units
- **Weather Description**: Displays current weather conditions (e.g., "clear sky", "rain")
- **Error Handling**: User-friendly error messages for invalid city names
- **Clean Dark Theme**: Modern dark interface with purple accent colors
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Zero Dependencies**: Pure vanilla JavaScript - no frameworks or libraries

## How It Works

1. Enter a city name in the search field
2. Click the **Search** button or press Enter
3. The app fetches weather data from the OpenWeatherMap API
4. Displays the city name, temperature, and weather description
5. Shows an error message if the city is not found

## Project Structure

```

weather-app/
├── index.html          # Main HTML structure
├── styles.css          # Styling and dark theme
├── script.js           # Application logic and API integration
└── README.md           # Project documentation

```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with dark theme
- **JavaScript (ES6)** - Async/await, DOM manipulation, and Fetch API
- **OpenWeatherMap API** - Free weather data provider

## Installation & Usage

1. Clone or download this repository
2. Open `index.html` in your web browser
3. No server, build process, or installation required
4. Start searching for weather in any city!

## API Configuration

The app uses the OpenWeatherMap API. A free API key is included in the code:

```javascript
const API_KEY = "5fd60ca68a30e9241fd35005c12b5e16";
```

**Note:** For production use, consider:

- Getting your own free API key from [OpenWeatherMap](https://openweathermap.org/api)
- Implementing environment variables for security
- Adding rate limiting to prevent API abuse

## Customization

### Styling

The dark theme uses:

- Primary background: `#1E1E1E`
- Secondary background: `#333333`
- Accent color: `#6200EA` (purple)

Modify these colors in `styles.css` to match your brand.

### Temperature Units

The app currently displays temperature in Celsius. To change to Fahrenheit:

```
// In script.js, modify the API URL:
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`;
```

### Adding More Weather Data

You can display additional weather information by extending the `displayweatherdata` function:

```
function displayweatherdata(data){
    const {name, main, weather, wind, humidity} = data;
    cityname.textContent = name;
    temperature.textContent = `Temperature: ${Math.round(main.temp)}°C`;
    description.textContent = `Weather: ${weather[0].description}`;
    // Add more data:
    humidityDisplay.textContent = `Humidity: ${main.humidity}%`;
    windDisplay.textContent = `Wind Speed: ${wind.speed} m/s`;
    weatherinfo.classList.remove("hidden");
    errormsg.classList.add("hidden");
}
```

## API Reference

### Core Functions

| Function | Description |
|---|---|
| `fetchweatherdata(city)` | Fetches weather data from OpenWeatherMap API |
| `displayweatherdata(data)` | Renders weather data to the DOM |
| `showerror()` | Displays error message for invalid city |

### Event Listeners

| Element | Event | Handler |
|---|---|---|
| `#search-btn` | `click` | Triggers weather search |
| `#city-input` | `keypress` | Triggers search on Enter key |

### API Endpoint

```
https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_KEY}
```

### API Response Data

The API returns a JSON object containing:

- `name` - City name
- `main.temp` - Temperature in Celsius
- `weather[0].description` - Weather description
- `main.humidity` - Humidity percentage
- `wind.speed` - Wind speed

## Browser Support

Works on all modern browsers:

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 14+
- ✅ Edge 79+
- ✅ Opera 47+

## Keyboard Shortcuts

- Press **Enter** in the input field to quickly search for a city
- Tab between input and search button for keyboard navigation

## Future Improvements

- 5-day weather forecast
- Weather icons for different conditions
- Geolocation support to auto-detect user's city
- Save favorite cities
- Detailed weather metrics (humidity, wind speed, pressure)
- Hourly forecast
- Weather alerts and notifications
- Multiple language support
- Dark/light theme toggle
- Caching for offline support

## Common Issues

### API Key Limitations

The free OpenWeatherMap API key has rate limits. If you experience issues:

- Wait a few minutes before trying again
- Consider getting your own API key
- The free tier allows 60 calls per minute

### City Not Found

Ensure the city name is spelled correctly. The API is case-insensitive but requires correct spelling.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
1. Create a new branch (`git checkout -b feature/improvement`)
1. Make your changes
1. Commit your changes (`git commit -m 'Add feature'`)
1. Push to the branch (`git push origin feature/improvement`)
1. Open a Pull Request

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgements

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Built with ❤️ using vanilla JavaScript
- Dark theme inspired by modern design trends

**Check the weather anywhere, instantly!** No sign-up, no ads, just pure weather data.

