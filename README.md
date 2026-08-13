# Interactive Weather Explorer 🌤️

A feature-rich, **vanilla JavaScript** weather website that showcases real-time weather data, interactive maps, and visualizations. Built with **no API keys required** using [Open-Meteo](https://open-meteo.com/) and hosted on [GitLab Pages](https://about.gitlab.com/products/pages/).

---

## 🌍 Features

- **Current Weather** (temperature, humidity, wind, UV index)
- **24-Hour Forecast** (temperature, precipitation)
- **7-Day Forecast** (daily max/min temperature, precipitation)
- **Interactive Map** (Leaflet.js + OpenStreetMap)
- **Location Search** (by city name or coordinates)
- **Geolocation** (auto-detect user location)
- **Responsive Design** (mobile-friendly)
- **Visualizations** (Chart.js for temperature/precipitation trends)

---

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Mapping**: [Leaflet.js](https://leafletjs.com/) (open-source)
- **Charting**: [Chart.js](https://www.chartjs.org/) (open-source)
- **Weather Data**: [Open-Meteo API](https://open-meteo.com/) (no API key required)
- **Hosting**: [GitLab Pages](https://about.gitlab.com/products/pages/)

---

## 📦 How to Use

### 1. **Run Locally**
- Clone the repository:
  ```bash
  git clone https://github.com/your-username/weather-website.git
  ```
  Open index.html in your browser.
2. Deploy to GitLab Pages
Push your code to a GitLab repository.
Go to Settings > Pages and enable it.
Set the Source to the main branch.
Your site will be live at https://<username>.gitlab.io/<project-name>/.
📌 Example API Call
For Berlin (latitude: 52.52, longitude: 13.40):

 ```bash
https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.40&current=temperature_2m,relative_humidity_2m,wind_speed_10m,uv_index&hourly=temperature_2m,precipitation&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto
```

## 🤖 AI Model Used
This project was co-created with the assistance of Qwen3 14b, a large language model developed by Alibaba Cloud. Qwen helped design the architecture, debug issues, and optimize the code for performance and interactivity.

## 🙌 Credits
- Open-Meteo for weather data
- Leaflet.js for interactive maps
- Chart.js for visualizations
- GitLab Pages for hosting
  
## 🛠️ Contributing
- Add new features (e.g., dark mode, language localization)
- Improve performance or fix bugs
- Suggest enhancements to the UI/UX

## 📌 License
This project is open-source and available under the MIT License. Feel free to use, modify, and distribute it freely.
