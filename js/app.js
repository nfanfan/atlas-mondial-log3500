const form = document.querySelector("form");
const input = document.getElementById("country");
const errorMessage = document.getElementById("country-error");

const elFlag = document.getElementById("country-flag");
const elName = document.getElementById("country-name");
const elCapital = document.getElementById("country-capital");
const elPopulation = document.getElementById("country-population");
const elRegion = document.getElementById("country-region");
const elCurrencies = document.getElementById("country-currencies");
const elLanguages = document.getElementById("country-languages");
const countryCard = document.getElementById("country-card");
const message = document.getElementById("message");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const countryName = input.value.trim();

    if (countryName === "") {
        input.setAttribute("aria-invalid", "true");
        errorMessage.textContent = "Veuillez saisir le nom d'un pays.";
        errorMessage.hidden = false;
        return;
    }

    const url = `https://api.restcountries.com/countries/v5/name?q=${countryName}&limit=1`;
    const response = await fetch(url, {
        headers: {
            Authorization: "Bearer rc_live_2d8a06705dc241bb9fb9bd5b7accc4f3"
        }
    });

    const data = await response.json();

    const country = data.data.objects[0];

    elFlag.src = country.flag.url_svg;
    elFlag.alt = country.flag.description;

    elName.textContent = country.names.common;
    elCapital.textContent = country.capitals[0].name;
    elPopulation.textContent = formatPopulation(country.population);
    elRegion.textContent = country.region;
    elCurrencies.textContent = country.currencies.map(c => c.name).join(", ");
    elLanguages.textContent = country.languages.map(l => l.name).join(", ");

    message.hidden = true;
    countryCard.hidden = false;
});

input.addEventListener("input", function () {
    if (input.getAttribute("aria-invalid") === "true") {
        input.removeAttribute("aria-invalid");
        errorMessage.hidden = true;
        errorMessage.textContent = "";
    }
});

function formatPopulation(nombre) {
    return nombre.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}