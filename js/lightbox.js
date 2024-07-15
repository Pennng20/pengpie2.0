function showLightBox() {
    let lightBox = document.getElementById("lightBox");
    let btnLogin = document.getElementById("btnLogin");

    if (btnLogin) {
        btnLogin.onclick = function() {
            lightBox.style.display = "block";
        };
    }
}

function closebox() {
    let lightBox = document.getElementById("lightBox");
    let close = document.getElementById("close");

    if(close){
        close.onclick = function(){
            lightBox.style.display = "none";
        };
    }
}

window.onload = function() {
    showLightBox();
    closebox();
};