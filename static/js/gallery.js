const galleryImages = [
    "/static/images/gallery/court1.jpg",
    "/static/images/gallery/court2.jpg",
    "/static/images/gallery/court3.jpg",
    "/static/images/gallery/court4.jpg",
    "/static/images/gallery/court5.jpg",
    "/static/images/gallery/court6.jpg",
    "/static/images/gallery/court7.jpg"
];


let currentImage = 0;


const galleryImage =
    document.getElementById("galleryImage");

const galleryPrev =
    document.getElementById("galleryPrev");

const galleryNext =
    document.getElementById("galleryNext");

const galleryDots =
    document.querySelectorAll(".gallery-dot");


function showImage(index) {

    currentImage = index;

    galleryImage.style.opacity = "0";


    setTimeout(() => {

        galleryImage.src =
            galleryImages[currentImage];

        galleryImage.style.opacity = "1";

    }, 150);


    galleryDots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === currentImage
        );

    });
}


/* =========================================
   NEXT
========================================= */

galleryNext.addEventListener("click", () => {

    currentImage++;

    if (currentImage >= galleryImages.length) {

        currentImage = 0;

    }

    showImage(currentImage);

});


/* =========================================
   PREVIOUS
========================================= */

galleryPrev.addEventListener("click", () => {

    currentImage--;

    if (currentImage < 0) {

        currentImage =
            galleryImages.length - 1;

    }

    showImage(currentImage);

});


/* =========================================
   DOTS
========================================= */

galleryDots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showImage(index);

    });

});