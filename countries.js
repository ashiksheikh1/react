const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // console.log(countries)
    const countriesHTML = countries.map(country => getCountryHTML(country))
    // console.log(countriesHTML[0])
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}
const getCountryHTML = ({ name, flags, independent, borders }) => {
    console.log(borders)
    // optain-1
    // const { name, flags } = country
    return `
    <div class="country">
    <h2>${name}</h2>
    <h2>${independent}</h2>
    
    <img src="${flags.png}">
    </div>
    `
}

loadCountries()