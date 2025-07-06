// Weather App JavaScript

// ⚠️ IMPORTANT: Replace 'YOUR_API_KEY_HERE' with your actual OpenWeatherMap API key
// Get your free API key from: https://openweathermap.org/api
const API_KEY = 'YOUR_API_KEY_HERE';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const welcomeMessage = document.getElementById('welcomeMessage');
const weatherCard = document.getElementById('weatherCard');
const errorMessage = document.getElementById('errorMessage');
const loading = document.getElementById('loading');

// Weather data elements
const cityName = document.getElementById('cityName');
const country = document.getElementById('country');
const temp = document.getElementById('temp');
const feelsLike = document.getElementById('feelsLike');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const pressure = document.getElementById('pressure');
const description = document.getElementById('description');
const weatherIcon = document.getElementById('weatherIcon');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    setupEventListeners();
    
    // Check if API key is set
    if (API_KEY === 'YOUR_API_KEY_HERE') {
        showApiKeyWarning();
    }
});

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('weatherAppTheme') || 'light';
    setTheme(savedTheme);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    localStorage.setItem('weatherAppTheme', theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Event Listeners
function setupEventListeners() {
    themeToggle.addEventListener('click', toggleTheme);
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
}

// Search Handler
async function handleSearch() {
    const city = searchInput.value.trim();
    
    if (!city) {
        alert('Please enter a city name');
        return;
    }
    
    if (API_KEY === 'YOUR_API_KEY_HERE') {
        showApiKeyWarning();
        return;
    }
    
    await fetchWeatherData(city);
}

// API Functions
async function fetchWeatherData(city) {
    showLoading();
    
    try {
        const response = await fetch(`${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`);
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('City not found');
            } else if (response.status === 401) {
                throw new Error('Invalid API key');
            } else {
                throw new Error('Weather data unavailable');
            }
        }
        
        const data = await response.json();
        displayWeatherData(data);
        
    } catch (error) {
        console.error('Error fetching weather data:', error);
        showError(error.message);
    }
}

// Display Functions
function displayWeatherData(data) {
    // Hide other states
    hideAllStates();
    
    // Populate weather data
    cityName.textContent = data.name;
    country.textContent = data.sys.country;
    temp.textContent = Math.round(data.main.temp);
    feelsLike.textContent = Math.round(data.main.feels_like);
    humidity.textContent = data.main.humidity;
    windSpeed.textContent = data.wind.speed;
    pressure.textContent = data.main.pressure;
    description.textContent = data.weather[0].description;
    
    // Set weather icon
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.alt = data.weather[0].description;
    
    // Show weather card
    weatherCard.style.display = 'block';
    
    // Clear search input
    searchInput.value = '';
}

function showLoading() {
    hideAllStates();
    loading.style.display = 'block';
}

function showError(message) {
    hideAllStates();
    
    // Update error message if needed
    if (message === 'Invalid API key') {
        errorMessage.innerHTML = `
            <h3>Invalid API Key</h3>
            <p>Please check your API key in the script.js file</p>
        `;
    } else if (message === 'City not found') {
        errorMessage.innerHTML = `
            <h3>City not found</h3>
            <p>Please check the spelling and try again</p>
        `;
    } else {
        errorMessage.innerHTML = `
            <h3>Error</h3>
            <p>${message}</p>
        `;
    }
    
    errorMessage.style.display = 'block';
}

function hideAllStates() {
    welcomeMessage.style.display = 'none';
    weatherCard.style.display = 'none';
    errorMessage.style.display = 'none';
    loading.style.display = 'none';
}

function showApiKeyWarning() {
    hideAllStates();
    errorMessage.innerHTML = `
        <h3>API Key Required</h3>
        <p>Please get a free API key from <a href="https://openweathermap.org/api" target="_blank">OpenWeatherMap</a> and add it to the script.js file</p>
        <br>
        <p style="font-size: 0.9rem; opacity: 0.8;">Look for the line: <code>const API_KEY = 'YOUR_API_KEY_HERE';</code></p>
    `;
    errorMessage.style.display = 'block';
}

// Utility Functions
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Demo function for testing without API key
function loadDemoData() {
    const demoData = {
        name: "London",
        sys: { country: "GB" },
        main: {
            temp: 15,
            feels_like: 13,
            humidity: 72,
            pressure: 1013
        },
        wind: { speed: 3.5 },
        weather: [{
            description: "partly cloudy",
            icon: "02d"
        }]
    };
    displayWeatherData(demoData);
}

// Add demo button for testing (uncomment the line below to enable)
// setTimeout(() => { if (API_KEY === 'YOUR_API_KEY_HERE') loadDemoData(); }, 2000);

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setTheme,
        toggleTheme,
        fetchWeatherData,
        displayWeatherData
    };
}