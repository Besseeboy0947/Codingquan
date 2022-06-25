
 window.addEventListener('load', setInterval(function () {
    var spinner = document.querySelector('.spinner');
    var style = window.getComputedStyle(spinner, '::before')
    var opacity = style.getPropertyValue("opacity");
    // if we don't set opacity 1 in CSS, then   //it will be equaled to "", that's why we   // check it
    if (opacity == "") {
        style.setProperty("opacity", "1");
    }
    opacity = style.getPropertyValue("opacity");
    var o = parseInt(opacity);  //"123" parseInt("123") -> 123
    if (o > 0) {
        o -= 2.1;
        spinner.style.setProperty("opacity", String(o));
    } else {
        clearInterval(fadeEffect);
    }
}, 4000));