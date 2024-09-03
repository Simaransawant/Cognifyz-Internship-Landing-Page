
var btn = document.getElementById("applyNowBtn");
var closeBtn = document.querySelector(".close");
var modalToggle = document.getElementById("apply-now");

btn.onclick = function() {
    modalToggle.checked = true;
}

closeBtn.onclick = function() {
    modalToggle.checked = false;
}
window.onclick = function(event) {
    if (event.target === modalToggle) {
        modalToggle.checked = false;
    }
}
