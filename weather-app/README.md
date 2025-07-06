# 🌤️ Simple Weather App

A clean, responsive weather application with theme switching and search functionality.

## ✨ Features

- **🔍 City Search**: Search for weather in any city worldwide
- **🌙 Theme Toggle**: Switch between light and dark themes
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **🎨 Modern UI**: Clean, minimalist design with smooth animations
- **⚡ Fast Loading**: Quick weather data retrieval with loading indicators
- **❌ Error Handling**: User-friendly error messages for various scenarios

## 🚀 Quick Start

### 1. Get an API Key

1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to your API keys section
4. Copy your API key

### 2. Setup the App

1. Download all files (`index.html`, `style.css`, `script.js`)
2. Open `script.js` in a text editor
3. Find this line: `const API_KEY = 'YOUR_API_KEY_HERE';`
4. Replace `'YOUR_API_KEY_HERE'` with your actual API key
5. Save the file

### 3. Run the App

Simply open `index.html` in your web browser. That's it!

## 📋 Usage

1. **Search for Weather**: Type a city name in the search box and press Enter or click the search button
2. **Switch Themes**: Click the moon/sun icon in the top-right corner to toggle between light and dark themes
3. **View Details**: The weather card shows:
   - Current temperature
   - Weather description and icon
   - Feels like temperature
   - Humidity percentage
   - Wind speed
   - Atmospheric pressure

## 🏗️ Project Structure

```
weather-app/
├── index.html      # Main HTML structure
├── style.css       # Styles with theme support
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## 🎨 Themes

The app includes two beautiful themes:

- **Light Theme**: Clean white background with blue accents
- **Dark Theme**: Dark background with light text and blue accents

Theme preference is saved in your browser's local storage.

## 📱 Responsive Design

The app is fully responsive and works great on:

- 💻 Desktop computers
- 📱 Mobile phones
- 📱 Tablets
- 🖥️ Large screens

## 🔧 Technical Details

### Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS custom properties
- **Vanilla JavaScript**: No external dependencies
- **OpenWeatherMap API**: Weather data source

### Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### API Features Used

- Current weather data
- Weather icons
- Temperature in Celsius
- Wind speed and direction
- Humidity and pressure

## 🔐 Privacy & Security

- No personal data is collected
- API key is stored locally in your files
- All weather requests are made directly to OpenWeatherMap
- Theme preferences are stored in browser's local storage

## 🐛 Troubleshooting

### "API Key Required" Error

Make sure you've:
1. Obtained an API key from OpenWeatherMap
2. Replaced `'YOUR_API_KEY_HERE'` with your actual key
3. Saved the `script.js` file

### "City not found" Error

- Check the spelling of the city name
- Try using the city name in English
- Some smaller cities might not be in the database

### "Invalid API Key" Error

- Verify your API key is correct
- Make sure you've activated your API key (can take a few minutes)
- Check that your API key has the right permissions

## 🚀 Future Enhancements

Possible improvements for the future:
- 7-day weather forecast
- Geolocation support
- Weather alerts
- Favorite cities
- Weather maps
- Multiple temperature units (°F, K)

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## 🤝 Contributing

Feel free to fork this project and submit improvements!

---

**Enjoy your simple weather app! 🌤️**