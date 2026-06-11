// Footer Copywrite Dates
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

// Newsletter Popup
setTimeout(() => {
    document.querySelector('.popup').classList.add('show');
}, 5000);

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('#closeBtn');
const form = document.querySelector('#newsletter-form');

if (!localStorage.getItem('subscribed')) {
    setTimeout(() => {
        popup.classList.add('show');
    }, 5000);
}

closeBtn.addEventListener('click', () =>{
    popup.classList.remove('show');
})

form.addEventListener('submit', (event) => {
    event.preventDefault();

    localStorage.setItem('subscribed', 'true');

    popup.classList.remove('show');
}
)