

var imgs = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");



var currentIndex = 0;

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (e) {
        currentIndex = imgs.indexOf(e.target);
        lightBoxContainer.style.display = "flex";
        var imgSrc = e.target.src;
        lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";
    });
}

function NextSlide() {
    currentIndex++;
    if (currentIndex == imgs.length) {
        currentIndex = 0;
    }
    var imgSrc = imgs[currentIndex].src;
    lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";
}

function PreviousSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }
    var imgSrc = imgs[currentIndex].src;
    lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";
}

function CloseSlide() {
    lightBoxContainer.style.display = "none";
}

nextBtn.addEventListener("click", NextSlide);
prevBtn.addEventListener("click", PreviousSlide);
closeBtn.addEventListener("click", CloseSlide);

document.addEventListener("keydown", function (e) {

    if (e.code == "ArrowLeft") {
        PreviousSlide();
    }

    else if (e.code == "ArrowRight") {
        NextSlide();
    }
    else if (e.code == "Escape") {
        CloseSlide();
    }
});