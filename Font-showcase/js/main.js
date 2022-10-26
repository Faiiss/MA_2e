/* Javascript for input change */
const passion = document.getElementById("js--passion");
const teko = document.getElementById("js--teko");
const uni = document.getElementById("js--uni");

const input = document.getElementById("js--input");

input.oninput = function(event){
    passion.innerText = event.target.value;
    teko.innerText = event.target.value;
    uni.innerText = event.target.value;
}

/* Javascript for favorites */
const hearts = document.getElementsByClassName("heart");

for(let i = 0; i < hearts.length; i++){
    hearts[i].onclick = function(event){
        for(let i = 0; i <hearts.length; i++){
            hearts[i].children[0].classList = "fa-regular fa-heart heart__icon"
        }
        hearts[i].children[0].classList = "fa-solid fa-heart heart__icon"
    }
}

/* Javascript for darkmode */
const toggleSwitch = document.getElementById("toggle");
const rootElement = document.querySelector(":root");

toggleSwitch.checked = false;


toggleSwitch.onchange = function(){
        document.getElementsByClassName('showcase')[0].classList.toggle("dark__mode");
        document.getElementsByClassName('header')[0].classList.toggle("dark__mode");
        document.getElementsByClassName('body')[0].classList.toggle("dark__mode_background");
    }
    