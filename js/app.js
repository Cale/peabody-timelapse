var t;

$(document).foundation();

$(document).ready(function() {
    //imageTimer();
});

imageTimer = function() {
    clearTimeout(t);
    timer(60000,reloadImage);
}

reloadImage = function() {
    var randomId = new Date().getTime();
    $(".current-view-image img").attr('src', 'http://nashville.calemooth.com/nashville.jpg?r=' + randomId);
    imageTimer();
}

timer = function(time,func) {
    t = window.setTimeout(function() {
        func();
    }, time)
}
