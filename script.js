let map;
let chart;

// Get current location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showWeather, handleError);
  } else {
    alert("Geolocation not supported.");
  }
}

// Search location by name/coordinates
function searchLocation() {
  const input = document.getElementById("locationSearch").value;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${input}&longitude=${input}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,uv_index&hourly=temperature_2m,precipitation&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`;
  fetchWeather(url);
}

// Fetch weather data
async function fetchWeather(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayCurrentWeather(data.current);
    displayForecast(data.hourly, data.daily);
    initMap(data.latitude, data.longitude);
  } catch (err) {
    console.error(err);
  }
}

// Display current weather
function displayCurrentWeather(current) {
  const container = document.getElementById("currentWeather");
  container.innerHTML = `
    <h2>Current Weather</h2>
    <p>🌡️ Temperature: ${current.temperature_2m}°C</p>
    <p>💧 Humidity: ${current.relative_humidity_2m}%</p>
    <p>🌬️ Wind: ${current.wind_speed_10m} m/s</p>
    <p>☀️ UV Index: ${current.uv_index}</p>
  `;
}

// Display forecast
function displayForecast(hourly, daily) {
  const container = document.getElementById("forecast");
  container.innerHTML = `
    <h2>Hourly Forecast</h2>
    <canvas id="hourlyChart"></canvas>
    <h2>Daily Forecast</h2>
    <canvas id="dailyChart"></canvas>
  `;

  // Hourly chart
  new Chart(document.getElementById("hourlyChart"), {
    type: "line",
    data: {
      labels: hourly.time,
      datasets: [{ label: "Temperature (°C)", data: hourly.temperature_2m }]
    }
  });

  // Daily chart
  new Chart(document.getElementById("dailyChart"), {
    type: "bar",
    data: {
      labels: daily.time,
      datasets: [
        { label: "Max Temp (°C)", data: daily.temperature_2m_max },
        { label: "Min Temp (°C)", data: daily.temperature_2m_min }
      ]
    }
  });
}

// Initialize map
function initMap(lat, lon) {
  if (!map) {
    map = L.map("map").setView([lat, lon], 10);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors"
    }).addTo(map);
    L.marker([lat, lon]).addTo(map).bindPopup("Current Location").openPopup();
  }
}

// Handle errors
function handleError(err) {
  alert("Error: " + err.message);
}
