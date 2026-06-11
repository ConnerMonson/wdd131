
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