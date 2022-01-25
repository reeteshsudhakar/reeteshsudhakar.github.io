var background_list = ["images/bg.jpg", "images/bg-inverted.jpg"];

var idx = 0;

function changeBackgroundImage() {
    var background = background_list[idx];
    document.body.style.backgroundImage = "url(" + background + ")";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
}