function Grow(){
    document.getElementById("box").style.height = "250px";
}
function Blue(){
    document.getElementById("box").style.backgroundColor = "blue";
}
function FadeOut(){
    $(document.getElementById("box")).fadeOut();
}
function Reset(){
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    $(document.getElementById("box")).fadeIn();
}