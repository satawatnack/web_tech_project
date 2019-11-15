var prevScrollpos = window.pageYOffset;
console.log(prevScrollpos);
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos == 0) {
        document.getElementsByTagName("nav")[0].style.backgroundColor = ("background-color", "rgb(45, 45, 47, 0)");
        document.getElementById("alinkid").style.color = ("color","black");
        document.getElementById("about").style.color = ("color", "black");
        document.getElementById("park").style.color = ("color", "black");
        document.getElementById("home").style.color = ("color", "black");
    } else if (prevScrollpos > currentScrollPos) {
        document.getElementsByTagName("nav")[0].style.backgroundColor = ("background-color", "rgb(45, 45, 47, 0.8)");
        document.getElementsByTagName("nav")[0].style.top = "0";
        document.getElementById("alinkid").style.color = ("color", "white");
        document.getElementById("about").style.color = ("color", "white");
        document.getElementById("park").style.color = ("color", "white");
        document.getElementById("home").style.color = ("color", "white");
    } else {
        document.getElementsByTagName("nav")[0].style.top = "-90px";
    }
    prevScrollpos = currentScrollPos;
}
AOS.init();