const apiKey = '21fd4b6b00ed4e5091335841252706';

async function getWeather() {
  const city = document.getElementById('cityInput').value || 'London';
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    document.getElementById('location').innerText = data.location.name;
    document.getElementById('temperature').innerText = `${data.current.temp_c}°C`;
    document.getElementById('wind').innerText = `${data.current.wind_kph} km/h`;
    document.getElementById('humidity').innerText = `${data.current.humidity}%`;
    document.getElementById('uv').innerText = data.current.uv;
    document.getElementById('rain').innerText = data.current.precip_mm + ' mm';

  } catch (error) {
    alert('Error fetching weather data.');
    console.error(error);
  }
}

// Load London by default
window.onload = getWeather;
