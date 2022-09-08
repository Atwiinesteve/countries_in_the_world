const buttonLoadCountries = document.querySelector('.load__countries');
const countryContainer = document.querySelector('.countries__container')

async function loadCountries() {
        const countries = await fetch('https://restcountries.com/v3.1/all');
        const result = await countries.json();
        
        console.log(result);

        result.forEach((countryElement) => {
                showCountry(countryElement)
        })
}

function showCountry(data) {

        const country = document.createElement('div');
        country.classList.add('country');
        
        country.innerHTML += `

                <div class="country__flag">
                        <img src="${data.coatOfArms.svg}" alt="" class="court_of_arms img-fluid">
                        <img src="${data.flags.png}" alt="" class="flag img-fluid">
                </div>
                <div class="country__details">
                        <div class="country__official__name">${data.name.official}</div>
                        <div class="region">Region: ${data.region}</div>
                        <div class="capital">Capital City: ${data.capital}</div>
                        <div class="independence__status">Independent: ${data.independent}</div>
                        <div class="population">Population: ${data.population}</div>
                        <div class="map"><a href='${data.maps.googleMaps}'>view map</a></div>
                </div>
        
        `  

        countryContainer.appendChild(country)

}

buttonLoadCountries.addEventListener('click', loadCountries);