const mountainBlue = document.querySelector("#mountain-blue");
const mountainRed = document.querySelector("#mountain-red");
const treesLeft = document.querySelector("#trees-left");
const tressBottom = document.querySelector("#trees-bottom");
const man = document.querySelector("#man");
const plants = document.querySelector("#plants");
const titulo = document.querySelector("#titulo");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    mountainBlue.style.left = scroll * 0.2 + "px";
    mountainBlue.style.bottom = scroll * -0.1 + "px";
    
    mountainRed.style.left = scroll * 0.5 + "px";
    
    treesLeft.style.bottom = scroll * -0.5 + "px";
    treesLeft.style.right = scroll * 0.7 + "px";
    
    tressBottom.style.right = scroll * 0.7 + "px";
    man.style.right = scroll * 0.1 + "px";
    plants.style.right = scroll * 1 + "px";
    titulo.style.right = scroll * 2 + "px";
});