// pick all of the images and layers based on the z-index
const slideArea = document.querySelector("div.slides")
const images = slideArea.querySelectorAll("img")

// we want to keep track of two things
let currentSlide = 0
let z = 1

// when i click the slidearea, change the slide based on the z-index
slideArea.addEventListener("click", function () {
    currentSlide = currentSlide + 1
    z = z + 1

    //pick the right image
    images[currentSlide].style.zIndex = z
})