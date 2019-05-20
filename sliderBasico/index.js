let slider = document.querySelector(".slider");
let nextButton = document.querySelector(".next");
let backButton = document.querySelector(".back");
let countSlider = 0;
let totalElements = slider.children.length;

let status = "init";

if (status == "init") {

    slider.children[0].classList.add("active");

}

function removeActive() {

    Array.from(slider.children).forEach((element, index, array) => {

        element.classList.remove("active");

    });

}

nextButton.addEventListener("click", () => {

    if (countSlider <= totalElements -2) {

        countSlider += 1;
        moveSlide()
        status = "started";

    }


});

backButton.addEventListener("click", () => {

    if (countSlider <= totalElements && countSlider > 0) {

        countSlider -= 1;
        moveSlide()
        status = "started";

    }

});

function moveSlide() {

    console.log(totalElements, countSlider);

    removeActive();
    slider.children[countSlider].classList.add("active");

}