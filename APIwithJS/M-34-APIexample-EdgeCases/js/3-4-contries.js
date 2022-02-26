const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

loadCountries();

const displayCountries = (countries) => {
  const countriesDiv = document.getElementById("countries");

  countries.forEach((country) => {
    const div = document.createElement("div");
    //div.classList.add("country");
    div.setAttribute("class", "country");

    div.innerHTML = `
    <h3>${country.name.common}</h3>
    <p>${country.altSpellings[1]}</p>
    <button onclick="loadCountryByName('${country.name.common}')"> Detalis </button>
    `;
    //
    // const p = document.createElement("p");
    // p.innerText = country.altSpellings[1];
    // div.appendChild(p);
    countriesDiv.appendChild(div);
  });
};

const loadCountryByName = (name) => {
  console.log(name);
  const url = `https://restcountries.com/v3.1/name/${name}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetail(data[0]));
};

const displayCountryDetail = (country) => {
  console.log(country);
  const countryDiv = document.getElementById("country-detail");
  countryDiv.innerHTML = ` <h5>${country.name.common}</h5>
  <p> Population: ${country.population}</p>
  <img src='${country.flags.png}'>
  `;
  console.log(country.flags.png);
};
