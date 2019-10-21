var prevScrollpos = window.pageYOffset;
console.log(prevScrollpos);
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos == 0) {
        document.getElementsByTagName("nav")[0].style.backgroundColor = ("background-color", "rgb(34, 2, 0, 0)");
    } else if (prevScrollpos > currentScrollPos) {
        document.getElementsByTagName("nav")[0].style.backgroundColor = ("background-color", "rgb(34, 2, 0, 0.8)");
        document.getElementsByTagName("nav")[0].style.top = "0";
    } else {
        document.getElementsByTagName("nav")[0].style.top = "-90px";
    }
    prevScrollpos = currentScrollPos;
}