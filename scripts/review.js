// Current Year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

// Last Modified
const lastModified = document.lastModified
document.getElementById("lastModified").innerHTML = lastModified;

let reviewCount =  Number(localStorage.getItem("reviewCount")) || 0;

reviewCount++;

localStorage.setItem("reviewCount", reviewCount);

document.querySelector("#reviewCount").textContent = reviewCount;

