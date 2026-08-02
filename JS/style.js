document.addEventListener("DOMContentLoaded", () => {
    const locationBtn = document.getElementById('locationBtn');
    const locationDropdown = document.getElementById('locationDropdown');
    const selectedCityText = document.getElementById('selectedCity');
    const citySearchInput = document.getElementById('citySearch');

    // 1. Toggle Dropdown on Location Button Click
    if (locationBtn && locationDropdown) {
        locationBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents immediate closing by document click
            locationDropdown.classList.toggle('active');
            
            if (locationDropdown.classList.contains('active') && citySearchInput) {
                citySearchInput.focus();
            }
        });
    }

    // 2. Prevent Dropdown inside click from closing it
    if (locationDropdown) {
        locationDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // 3. Outside Click Event (Kahin bhi click karne par dropdown close hoga)
    document.addEventListener('click', () => {
        if (locationDropdown) {
            locationDropdown.classList.remove('active');
        }
    });
});

// 4. Select City Function (Global Function)
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

// 5. Search Filter Functionality
function filterCities() {
    const citySearchInput = document.getElementById('citySearch');
    if (!citySearchInput) return;

    const filterValue = citySearchInput.value.toLowerCase();
    const cityItems = document.querySelectorAll('#cityList li');

    cityItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(filterValue)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}