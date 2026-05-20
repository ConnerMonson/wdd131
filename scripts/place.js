// Current Year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

// Last Modified
const lastModified = document.lastModified
document.getElementById("lastModified").innerHTML = lastModified;

// Wind Chill Factor
let temperature = 17;
let wind = 10;

function calculateWindChill(t, w){
    return 13.12 + .6215 * t - 11.37 * Math.pow(w, .16) + 0.3965 * t * Math.pow(w, .16);
}

let windChill = "N/A"

if (wind > 10 && temperature <=10 ){
    windChill = calculateWindChill(temperature, wind).toFixed(1) + " °C";
}

document.getElementById("windChill").textContent = windChill;