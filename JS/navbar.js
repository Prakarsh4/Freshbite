document.addEventListener("DOMContentLoaded", () => {
    const locationBtn = document.getElementById('locationBtn');
    const locationDropdown = document.getElementById('locationDropdown');
    const selectedCityText = document.getElementById('selectedCity');
    const citySearchInput = document.getElementById('citySearch');

    if (locationBtn && locationDropdown) {
        locationBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            locationDropdown.classList.toggle('active');

            if (locationDropdown.classList.contains('active') && citySearchInput) {
                citySearchInput.focus();
            }
        });
    }

    if (locationDropdown) {
        locationDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    document.addEventListener('click', () => {
        if (locationDropdown) {
            locationDropdown.classList.remove('active');
        }
    });
});

function selectCity(cityName) {
    const selectedCityText = document.getElementById('selectedCity');
    const locationDropdown = document.getElementById('locationDropdown');
    const citySearchInput = document.getElementById('citySearch');

    if (selectedCityText) selectedCityText.innerText = cityName;
    if (locationDropdown) locationDropdown.classList.remove('active');

    if (citySearchInput) {
        citySearchInput.value = '';
        filterCities();
    }
}

function filterCities() {
    const citySearchInput = document.getElementById('citySearch');
    if (!citySearchInput) return;

    const filterValue = citySearchInput.value.toLowerCase();
    const cityItems = document.querySelectorAll('#cityList li');

    cityItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filterValue) ? 'block' : 'none';
    });
}