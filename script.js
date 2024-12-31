// localStorage.clear();
const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');


searchButton.addEventListener('click', () => {
    const cityName = cityInput.value.trim();
    if (cityName) {
      localStorage.setItem('city', cityName);
    } else {
     alert("Please enter a city name")
    }
    location.href="index.html";
  });
  