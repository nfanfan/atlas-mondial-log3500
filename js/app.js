const form = document.querySelector("form");
const input = document.getElementById("country");
const errorMessage = document.getElementById("country-error");
console.log(form);
console.log(input);

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
    console.log(data);
});
input.addEventListener("input", function () {
    if (input.getAttribute("aria-invalid") === "true") {
        input.removeAttribute("aria-invalid");
        errorMessage.hidden = true;
        errorMessage.textContent = "";
    }
});