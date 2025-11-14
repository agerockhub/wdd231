const currentDiv = document.getElementById("current");

// Coordinates
const lat = 5.606229030328276;
const lon = -0.2360871971036563;

// OpenWeatherMap API Key
const apiKey = "a9a02ba6aff6a8ec2242d7069915dbbc";

async function loadCurrentWeather() {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        const temp = Math.round(data.main.temp);
        const desc = data.weather[0].description;
        const icon = data.weather[0].icon;

        currentDiv.innerHTML = `
    <div class="current-box">
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon">
            <h2>${temp}°C</h2>
            <p>${desc.toUpperCase()}</p>
    </div>
    `;
    } catch (error) {
        currentDiv.innerHTML = "Unable to load weather.";
        console.error("Weather error:", error);
    }
}

loadCurrentWeather();
