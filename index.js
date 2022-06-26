// Your code goes here
// const p = document.querySelector('#text')
// p.textContent = "This is really cool!"

function updateDOM(){
    document.querySelector("#text").textContent = "This is really cool!"
}


document.addEventListener("DOMContentLoaded", () => {
    // console.log("The DOM has loaded");
    updateDOM();
});
console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered")