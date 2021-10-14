var slide = document.getElementsByClassName("slide");
var indicator = document.getElementById("indicator");
var dots = document.getElementsByClassName("dots");
var autoplay = document.getElementsByClassName("container")[0].getAttribute("data-autoplay");
var l = slide.length;
var interval = 5000;
var set;

window.onload = function () {
    initialize();
    slide[0].style.opacity = "1";
    for (var j = 0; j < l; j++) {
        indicator.innerHTML += "<div class='dots' onclick=change(" + j + ")></div>";
    }

    dots[0].style.background = "#696969";

}

function initialize() {
    if (autoplay === "true")
        set = setInterval(function () { next(); }, interval);
}



function change(index) {
    clearInterval(set);
    count = index;
    for (var j = 0; j < l; j++) {
        slide[j].style.opacity = "0";
        dots[j].style.background = "#bdbdbd";
    }
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";


}

var count = 0;
function next() {
    clearInterval(set);
    slide[count].style.opacity = "0";
    count++;
    for (var j = 0; j < l; j++) {
        dots[j].style.background = "#bdbdbd";
    }


    if (count == l) {
        count = 0;
        slide[count].style.opacity = "1";
        dots[count].style.background = "#696969";

    } else {
        slide[count].style.opacity = "1";
        dots[count].style.background = "#696969";
    }
    initialize()
}


function prev() {
    clearInterval(set);
    slide[count].style.opacity = "0";
    for (var j = 0; j < l; j++) {
        dots[j].style.background = "#bdbdbd";
    }
    count--;

    if (count == -1) {
        count = l - 1;
        slide[count].style.opacity = "1";
        dots[count].style.background = "#696969";

    } else {
        slide[count].style.opacity = "1";
        dots[count].style.background = "#696969";
    }
    initialize()
}

for(i=0; i<30; i++) {
    // Random rotation
    var randomRotation = Math.floor(Math.random() * 360);
      // Random Scale
    var randomScale = Math.random() * 1;
    // Random width & height between 0 and viewport
    var randomWidth = Math.floor(Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
    var randomHeight =  Math.floor(Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 500));
    
    // Random animation-delay
    var randomAnimationDelay = Math.floor(Math.random() * 15);
    console.log(randomAnimationDelay);
  
    // Random colors
    var colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0']
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    // Create confetti piece
    var confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.top=randomHeight + 'px';
    confetti.style.right=randomWidth + 'px';
    confetti.style.backgroundColor=randomColor;
    // confetti.style.transform='scale(' + randomScale + ')';
    confetti.style.obacity=randomScale;
    confetti.style.transform='skew(15deg) rotate(' + randomRotation + 'deg)';
    confetti.style.animationDelay=randomAnimationDelay + 's';
    document.getElementById("confetti-wrapper").appendChild(confetti);
  }