
// Responsive Gallery
const galleryImages = [ 
    {
        src: "images/gallery-photo-one.jpg",
        alt: "This is a car"
    },
    {
        src: "images/gallery-photo-two.jpg",
        alt: "asd"
    },
    {
        src: "images/gallery-photo-three.webp",
        alt: "asd"
    },
    {
        src: "images/gallery-photo-four.jpg",
        alt: "asd"
    },    
    {
        src: "images/gallery-photo-five.jpg",
        alt: "sdf"
    },
    {
        src: "images/gallery-photo-six.jpg",
        alt: "sdf"
    },
    {
        src: "images/gallery-photo-seven.jpg",
        alt: "sdf"
    },
    {
        src: "images/gallery-photo-eight.jpg",
        alt: "asdf"
    },
    {
        src: "images/gallery-photo-nine.jpg",
        alt: "asdf"
    },
];

const galleryContainer = document.querySelector(".gallery-photos");

galleryContainer.innerHTML = galleryImages.map(img => {
    return `<img src="${img.src}" alt="${img.alt}" loading="lazy">`;
}).join("");