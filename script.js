let character = document.getElementById("character");
let block = document.getElementById("block");
let score = 0;

function jump() {
    if (character.classList !== "animate") {
        character.classList.add("animate");
    }
    setTimeout(function() {
        character.classList.remove("animate");
        score++;
    }, 800);
}

let checkDead = setInterval(function() {
    let charTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 20 && blockLeft > 0 && charTop >= 230) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("You loose. Score: " + (score));
    }
}, 10);