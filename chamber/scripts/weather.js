const weatherDiv = document.getElementById("weather");

// Coordinates
const lat = 5.606229030328276;
const lon = -0.2360871971036563;

// Your OpenWeatherMap API key
const apiKey = "a9a02ba6aff6a8ec2242d7069915dbbc";

async function loadWeather() {
    try {
        // Current weather API
        const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

        // 5-day forecast API (we will extract next 3 days)
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

        const currentRes = await fetch(currentUrl);
        const currentData = await currentRes.json();

        const forecastRes = await fetch(forecastUrl);
        const forecastData = await forecastRes.json();

        // ---- CURRENT WEATHER ----
        const temp = Math.round(currentData.main.temp);
        const description = currentData.weather[0].description;
        const icon = currentData.weather[0].icon;

        // ---- 3-DAY FORECAST ----
        // forecast API returns data every 3 hours.
        // We pick the daily noon (12:00:00) temperature for next 3 days.
        const threeDays = forecastData.list.filter(item =>
            item.dt_txt.includes("12:00:00")
        ).slice(0, 3);

        let forecastHTML = "";
        threeDays.forEach(day => {
            const date = new Date(day.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric"
            });

            const dayTemp = Math.round(day.main.temp);
            const dayIcon = day.weather[0].icon;

            forecastHTML += `
                <div class="forecast-day">
                    <p>${date}</p>
                    <img src="https://openweathermap.org/img/wn/${dayIcon}.png">
                    <p>${dayTemp}°C</p>
                </div>
            `;
        });

        // FINAL OUTPUT
        weatherDiv.innerHTML = `
            <div class="weather-box">
                <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon">
                <h2>${temp}°C</h2>
                <p>${description.toUpperCase()}</p>
                <p><strong>${currentData.name}</strong></p>
            </div>

            <h3>3-Day Forecast</h3>
            <div class="forecast-container">
                ${forecastHTML}
            </div>
        `;

    } catch (error) {
        weatherDiv.innerHTML = "Unable to load weather data.";
        console.error("Weather error:", error);
    }
}

loadWeather();
