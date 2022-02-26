const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

loadCountries();

const displayCountries = (countries) => {
  const countriesDiv = document.getElementById("countries");

  countries.forEach((country) => {
    //  const div = document.createElement("div");
    // div.classList.add("country");

    // div.innerHTML = `
    // <h3>${country.name.common}</h3>
    // <p>${country.altSpellings[1]}</p>
    // <h5>${country.area}</h5>
    // `;

    // countriesDiv.appendChild(div);

    const div = document.createElement("div");
    div.classList.add("country");

    div.innerHTML = `
    <h3>${country.name.common}</h3>
    <p>${country.altSpellings[1]}</p>
    `;

    console.log(country.name.common);
    // const h3 = document.createElement("h3");
    // h3.innerText = country.name.common;
    // div.appendChild(h3);

    // const p = document.createElement("p");
    // p.innerText = country.altSpellings[1];
    // div.appendChild(p);
    countriesDiv.appendChild(div);
  });
};
