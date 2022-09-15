const buttonLoadCountries = document.querySelector('.load__countries');
const countryContainer = document.querySelector('.countries__container');
const loader = document.querySelector('.countries__container div');

buttonLoadCountries.addEventListener('click', loadCountries);

async function loadCountries() {
        loader.classList.add('loader');

        const countries = await fetch('https://restcountries.com/v3.1/all');
        let countryData = await countries.json()
        console.log(countryData)
        countryData.forEach((country) => {

                loader.classList.remove('loader');


                        const countryElement = document.createElement('div');
                        countryElement.classList.add('country');
                        countryElement.innerHTML += `

                                <div class="country__flag">
                                        <img src="${country.coatOfArms.svg}" alt="" class="court_of_arms img-fluid">
                                        <img src="${country.flags.png}" alt="" class="flag img-fluid">
                                </div>
                                <div class="country__details">
                                        <div class="country__official__name">${country.name.official}</div>
                                        <div class="region">Region: ${country.region}</div>
                                        <div class="capital">Capital City: ${country.capital}</div>
                                        <div class="independence__status">Independent: ${country.independent}</div>
                                        <div class="population">Population: ${country.population}</div>
                                        <div class="map"><a href='${country.maps.googleMaps}'>view map</a></div>
                                </div>
                        
                        `  


        })
};
