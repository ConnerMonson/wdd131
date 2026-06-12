// Footer Copywrite Dates
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

// Newsletter Popup
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('#closeBtn');
const form = document.querySelector('#newsletter-form');

function showPopup(){
    popup.classList.add('show');
}

if (!localStorage.getItem('subscribed')){
    setTimeout(showPopup, 5000);
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

// Specs
const specs =  [
    {
        value: "217 MPH",
        label: "Top Speed"
    },
    {
        value: "759 HP",
        label: "Horsepower"
    },
    {
        value: "V12",
        label: "Engine Size"
    }
]

const specContainer = document.querySelector(".spec-facts");

specContainer.innerHTML = specs.map(spec => {
    return `
    <div class="spec-card">
        <h3>${spec.value}</h3>
        <p>${spec.label}</p>
    </div>
    `;
}).join("");



// Responsive Gallery
const galleryImages = [ 
    {
        src: "images/gallery-photo-one.jpg",
        alt: "Lamborghini Aventador Interior"
    },
    {
        src: "images/gallery-photo-two.jpg",
        alt: "rear view of Lamborghini Aventador"
    },
    {
        src: "images/gallery-photo-three.webp",
        alt: "Lamborghini Aventador tail light"
    },
    {
        src: "images/gallery-photo-four.jpg",
        alt: "Lamborghini Aventador SVJ logo"
    },    
    {
        src: "images/gallery-photo-five.jpg",
        alt: "Lamborghini Aventador tail light"
    },
    {
        src: "images/gallery-photo-six.jpg",
        alt: "Engine of Lamborghini Aventador"
    },
    {
        src: "images/gallery-photo-seven.jpg",
        alt: "Lamborghini Aventador tail lights"
    },
    {
        src: "images/gallery-photo-eight.jpg",
        alt: "Lamborghini Aventador back end"
    },
    {
        src: "images/gallery-photo-nine.jpg",
        alt: "Blue Lamborghini Aventador "
    },
];

const galleryContainer = document.querySelector(".gallery-photos");

galleryContainer.innerHTML = galleryImages.map(img => {
    return `<img src="${img.src}" alt="${img.alt}" loading="lazy">`;
}).join("");