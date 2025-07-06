// Modern Weather App JavaScript

// API Configuration
const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Demo data for testing
const DEMO_DATA = {
    london: {
        name: "London", country: "GB", temp: 15, feels_like: 13, 
        humidity: 72, pressure: 1013, visibility: 10, wind_speed: 3.5,
        description: "partly cloudy", icon: "02d",
        hourly: [
            { time: "Now", temp: 15, icon: "02d" },
            { time: "3 PM", temp: 16, icon: "02d" },
            { time: "4 PM", temp: 17, icon: "03d" },
            { time: "5 PM", temp: 16, icon: "03d" },
            { time: "6 PM", temp: 15, icon: "04d" },
            { time: "7 PM", temp: 14, icon: "04d" },
            { time: "8 PM", temp: 13, icon: "04n" }
        ],
        daily: [
            { day: "Today", high: 17, low: 12, icon: "02d" },
            { day: "Tomorrow", high: 19, low: 14, icon: "01d" },
            { day: "Wednesday", high: 16, low: 11, icon: "10d" },
            { day: "Thursday", high: 18, low: 13, icon: "02d" },
            { day: "Friday", high: 20, low: 15, icon: "01d" },
            { day: "Saturday", high: 17, low: 12, icon: "03d" },
            { day: "Sunday", high: 15, low: 10, icon: "10d" }
        ]
    },
    tokyo: {
        name: "Tokyo", country: "JP", temp: 22, feels_like: 25, 
        humidity: 68, pressure: 1018, visibility: 12, wind_speed: 2.1,
        description: "clear sky", icon: "01d",
        hourly: [
            { time: "Now", temp: 22, icon: "01d" },
            { time: "3 PM", temp: 24, icon: "01d" },
            { time: "4 PM", temp: 25, icon: "01d" },
            { time: "5 PM", temp: 24, icon: "01d" },
            { time: "6 PM", temp: 23, icon: "01d" },
            { time: "7 PM", temp: 21, icon: "01n" },
            { time: "8 PM", temp: 20, icon: "01n" }
        ],
        daily: [
            { day: "Today", high: 25, low: 18, icon: "01d" },
            { day: "Tomorrow", high: 27, low: 20, icon: "01d" },
            { day: "Wednesday", high: 24, low: 17, icon: "02d" },
            { day: "Thursday", high: 26, low: 19, icon: "01d" },
            { day: "Friday", high: 28, low: 21, icon: "01d" },
            { day: "Saturday", high: 25, low: 18, icon: "03d" },
            { day: "Sunday", high: 23, low: 16, icon: "10d" }
        ]
    },
    newyork: {
        name: "New York", country: "US", temp: 18, feels_like: 16, 
        humidity: 65, pressure: 1012, visibility: 8, wind_speed: 4.2,
        description: "scattered clouds", icon: "03d",
        hourly: [
            { time: "Now", temp: 18, icon: "03d" },
            { time: "3 PM", temp: 19, icon: "03d" },
            { time: "4 PM", temp: 20, icon: "02d" },
            { time: "5 PM", temp: 19, icon: "02d" },
            { time: "6 PM", temp: 18, icon: "02d" },
            { time: "7 PM", temp: 17, icon: "02n" },
            { time: "8 PM", temp: 16, icon: "03n" }
        ],
        daily: [
            { day: "Today", high: 20, low: 15, icon: "03d" },
            { day: "Tomorrow", high: 22, low: 17, icon: "02d" },
            { day: "Wednesday", high: 19, low: 14, icon: "10d" },
            { day: "Thursday", high: 21, low: 16, icon: "02d" },
            { day: "Friday", high: 23, low: 18, icon: "01d" },
            { day: "Saturday", high: 20, low: 15, icon: "04d" },
            { day: "Sunday", high: 18, low: 13, icon: "10d" }
        ]
    },
    paris: {
        name: "Paris", country: "FR", temp: 12, feels_like: 10, 
        humidity: 78, pressure: 1009, visibility: 6, wind_speed: 2.8,
        description: "light rain", icon: "10d",
        hourly: [
            { time: "Now", temp: 12, icon: "10d" },
            { time: "3 PM", temp: 13, icon: "10d" },
            { time: "4 PM", temp: 14, icon: "09d" },
            { time: "5 PM", temp: 13, icon: "09d" },
            { time: "6 PM", temp: 12, icon: "10d" },
            { time: "7 PM", temp: 11, icon: "10n" },
            { time: "8 PM", temp: 10, icon: "10n" }
        ],
        daily: [
            { day: "Today", high: 14, low: 9, icon: "10d" },
            { day: "Tomorrow", high: 16, low: 11, icon: "04d" },
            { day: "Wednesday", high: 13, low: 8, icon: "10d" },
            { day: "Thursday", high: 15, low: 10, icon: "03d" },
            { day: "Friday", high: 17, low: 12, icon: "02d" },
            { day: "Saturday", high: 14, low: 9, icon: "10d" },
            { day: "Sunday", high: 12, low: 7, icon: "09d" }
        ]
    },
    sydney: {
        name: "Sydney", country: "AU", temp: 25, feels_like: 27, 
        humidity: 60, pressure: 1020, visibility: 15, wind_speed: 3.0,
        description: "few clouds", icon: "02d",
        hourly: [
            { time: "Now", temp: 25, icon: "02d" },
            { time: "3 PM", temp: 26, icon: "02d" },
            { time: "4 PM", temp: 27, icon: "01d" },
            { time: "5 PM", temp: 26, icon: "01d" },
            { time: "6 PM", temp: 25, icon: "01d" },
            { time: "7 PM", temp: 23, icon: "01n" },
            { time: "8 PM", temp: 22, icon: "02n" }
        ],
        daily: [
            { day: "Today", high: 27, low: 22, icon: "02d" },
            { day: "Tomorrow", high: 29, low: 24, icon: "01d" },
            { day: "Wednesday", high: 26, low: 21, icon: "03d" },
            { day: "Thursday", high: 28, low: 23, icon: "02d" },
            { day: "Friday", high: 30, low: 25, icon: "01d" },
            { day: "Saturday", high: 27, low: 22, icon: "02d" },
            { day: "Sunday", high: 24, low: 19, icon: "10d" }
        ]
    }
};

// DOM Elements
const elements = {
    themeToggle: document.getElementById('themeToggle'),
    searchInput: document.getElementById('searchInput'),
    searchBtn: document.getElementById('searchBtn'),
    cityName: document.getElementById('cityName'),
    
    // States
    welcomeState: document.getElementById('welcomeState'),
    loadingState: document.getElementById('loadingState'),
    errorState: document.getElementById('errorState'),
    weatherContent: document.getElementById('weatherContent'),
    
    // Weather data
    weatherCondition: document.getElementById('weatherCondition'),
    temperature: document.getElementById('temperature'),
    weatherIcon: document.getElementById('weatherIcon'),
    feelsLike: document.getElementById('feelsLike'),
    highLow: document.getElementById('highLow'),
    humidity: document.getElementById('humidity'),
    windSpeed: document.getElementById('windSpeed'),
    pressure: document.getElementById('pressure'),
    visibility: document.getElementById('visibility'),
    
    // Forecasts
    hourlyForecast: document.getElementById('hourlyForecast'),
    dailyForecast: document.getElementById('dailyForecast')
};

// App State
let currentTheme = 'light';
let isUsingDemo = API_KEY === 'YOUR_API_KEY_HERE';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    setupEventListeners();
    showWelcome();
    
    if (isUsingDemo) {
        console.log('🔧 Demo mode active. Add your OpenWeatherMap API key for real data.');
    }
});

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('modernWeatherTheme') || 'light';
    setTheme(savedTheme);
}

function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('modernWeatherTheme', theme);
    
    // Update theme icon
    const themeIcon = elements.themeToggle.querySelector('.theme-icon path');
    if (theme === 'dark') {
        themeIcon.setAttribute('d', 'M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z');
    } else {
        themeIcon.setAttribute('d', 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z');
    }
}

function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Add animation
    document.body.style.transition = 'all 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}

// Event Listeners
function setupEventListeners() {
    elements.themeToggle.addEventListener('click', toggleTheme);
    elements.searchBtn.addEventListener('click', handleSearch);
    elements.searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    
    // Back button functionality
    document.querySelector('.back-btn').addEventListener('click', () => {
        showWelcome();
        elements.searchInput.value = '';
        elements.cityName.textContent = 'Weather';
    });
}

// Search Handler
async function handleSearch() {
    const query = elements.searchInput.value.trim();
    
    if (!query) {
        showError('Please enter a city name');
        return;
    }
    
    showLoading();
    
    try {
        if (isUsingDemo) {
            await handleDemoSearch(query);
        } else {
            await handleApiSearch(query);
        }
    } catch (error) {
        console.error('Search error:', error);
        showError('Unable to fetch weather data');
    }
}

// Demo Search Handler
async function handleDemoSearch(query) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cityKey = query.toLowerCase().replace(/\s+/g, '').replace('new york', 'newyork');
            const data = DEMO_DATA[cityKey];
            
            if (data) {
                displayWeatherData(data);
                resolve();
            } else {
                showError(`"${query}" not found in demo. Try: London, Tokyo, New York, Paris, or Sydney`);
                reject(new Error('City not found in demo'));
            }
        }, 1000); // Simulate API delay
    });
}

// API Search Handler
async function handleApiSearch(query) {
    try {
        const response = await fetch(
            `${BASE_URL}/weather?q=${encodeURIComponent(query)}&appid=${API_KEY}&units=metric`
        );
        
        if (!response.ok) {
            throw new Error(response.status === 404 ? 'City not found' : 'Weather service unavailable');
        }
        
        const data = await response.json();
        const processedData = processApiData(data);
        displayWeatherData(processedData);
        
    } catch (error) {
        showError(error.message);
        throw error;
    }
}

// Process API data to match demo format
function processApiData(apiData) {
    return {
        name: apiData.name,
        country: apiData.sys.country,
        temp: Math.round(apiData.main.temp),
        feels_like: Math.round(apiData.main.feels_like),
        humidity: apiData.main.humidity,
        pressure: apiData.main.pressure,
        visibility: Math.round((apiData.visibility || 10000) / 1000),
        wind_speed: apiData.wind.speed,
        description: apiData.weather[0].description,
        icon: apiData.weather[0].icon,
        // For real API, you'd need additional calls for hourly/daily forecasts
        hourly: generateMockHourly(apiData.main.temp, apiData.weather[0].icon),
        daily: generateMockDaily(apiData.main.temp, apiData.weather[0].icon)
    };
}

// Generate mock hourly data (for demo purposes)
function generateMockHourly(baseTemp, baseIcon) {
    const hours = ['Now', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];
    return hours.map((time, i) => ({
        time,
        temp: Math.round(baseTemp + (Math.random() - 0.5) * 4),
        icon: i > 5 ? baseIcon.replace('d', 'n') : baseIcon
    }));
}

// Generate mock daily data (for demo purposes)
function generateMockDaily(baseTemp, baseIcon) {
    const days = ['Today', 'Tomorrow', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days.map(day => ({
        day,
        high: Math.round(baseTemp + Math.random() * 5),
        low: Math.round(baseTemp - Math.random() * 5),
        icon: baseIcon
    }));
}

// Display Functions
function displayWeatherData(data) {
    // Update city name in header
    elements.cityName.textContent = data.name;
    
    // Populate weather data
    elements.weatherCondition.textContent = data.description;
    elements.temperature.textContent = data.temp;
    elements.weatherIcon.src = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
    elements.weatherIcon.alt = data.description;
    elements.feelsLike.textContent = `Feels like ${data.feels_like}°`;
    elements.highLow.textContent = `High ${Math.max(...data.daily.map(d => d.high))}° • Low ${Math.min(...data.daily.map(d => d.low))}°`;
    
    // Update details
    elements.humidity.textContent = `${data.humidity}%`;
    elements.windSpeed.textContent = `${data.wind_speed} m/s`;
    elements.pressure.textContent = `${data.pressure} hPa`;
    elements.visibility.textContent = `${data.visibility} km`;
    
    // Generate forecasts
    generateHourlyForecast(data.hourly);
    generateDailyForecast(data.daily);
    
    // Show weather content
    showWeatherContent();
    
    // Clear search
    elements.searchInput.value = '';
}

function generateHourlyForecast(hourlyData) {
    elements.hourlyForecast.innerHTML = hourlyData.map(item => `
        <div class="hourly-item">
            <div class="hourly-time">${item.time}</div>
            <img class="hourly-icon" src="https://openweathermap.org/img/wn/${item.icon}.png" alt="Weather">
            <div class="hourly-temp">${item.temp}°</div>
        </div>
    `).join('');
}

function generateDailyForecast(dailyData) {
    elements.dailyForecast.innerHTML = dailyData.map(item => `
        <div class="daily-item">
            <div class="daily-day">${item.day}</div>
            <img class="daily-icon" src="https://openweathermap.org/img/wn/${item.icon}.png" alt="Weather">
            <div class="daily-temps">
                <span class="daily-high">${item.high}°</span>
                <span class="daily-low">${item.low}°</span>
            </div>
        </div>
    `).join('');
}

// State Management
function showWelcome() {
    hideAllStates();
    elements.welcomeState.style.display = 'block';
    animateIn(elements.welcomeState);
}

function showLoading() {
    hideAllStates();
    elements.loadingState.style.display = 'block';
    animateIn(elements.loadingState);
}

function showError(message) {
    hideAllStates();
    const errorText = elements.errorState.querySelector('p');
    if (errorText) errorText.textContent = message;
    elements.errorState.style.display = 'block';
    animateIn(elements.errorState);
}

function showWeatherContent() {
    hideAllStates();
    elements.weatherContent.style.display = 'block';
    animateIn(elements.weatherContent);
}

function hideAllStates() {
    [elements.welcomeState, elements.loadingState, elements.errorState, elements.weatherContent]
        .forEach(el => el.style.display = 'none');
}

// Animation Helpers
function animateIn(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    
    requestAnimationFrame(() => {
        element.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        
        setTimeout(() => {
            element.style.transition = '';
        }, 400);
    });
}

// Utility Functions
function formatTime(date) {
    return date.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        hour12: true 
    }).replace(' ', '').toLowerCase();
}

function formatDay(date) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) return 'Today';
    if (date.toDateString() === tomorrow.toDateString()) return 'Tomorrow';
    
    return date.toLocaleDateString('en-US', { weekday: 'long' });
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setTheme,
        toggleTheme,
        handleSearch,
        displayWeatherData,
        DEMO_DATA
    };
}