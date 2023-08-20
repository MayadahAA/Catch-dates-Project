const main = document.getElementById('main')
const palm = document.getElementById("palm");
const char = document.getElementById("char");
const showScore = document.getElementById("scoreValue");


let score = 0;
let charX = 50;

function updateCharPosition() {
    char.style.left = charX + '%';
}
function datesFalling() {
    const date = document.createElement('div');
    date.className = 'date';
    date.style.left = Math.random() * (palm.offsetWidth - 20) + 'px';
    palm.appendChild(date);

    let position = 0;
    const fall = setInterval(() => {
        position += 2;
        date.style.top = position + 'px';

        // 
        const charS = char.getBoundingClientRect();
        const dateS = date.getBoundingClientRect();

        if (charS.left < dateS.right && charS.right > dateS.left && charS.bottom > dateS.top && charS.top < dateS.bottom) {
            score += 10;
            showScore.textContent = score;
            date.remove();
            clearInterval(fall)
        }

        if (position >= palm.offsetHeight - 20) {
            date.remove();
            clearInterval(fall)
        }
        if (position >= palm.offsetHeight - 20) {
            position = 0;
            clearInterval(fall);
        }

    }, 20);
}
//
function plantFalling() {
    const plant = document.createElement('div');
    plant.className = 'plant';
    plant.style.left = Math.random() * (palm.offsetWidth - 20) + 'px';
    palm.appendChild(plant);

    let position = 0;
    const fallP = setInterval(() => {
        position += 2;
        plant.style.top = position + 'px';

        // 
        const charS = char.getBoundingClientRect();
        const plantS = plant.getBoundingClientRect();

        if (charS.left < plantS.right && plantS.right > plantS.left && charS.bottom > plantS.top && charS.top < plantS.bottom) {
            score -= 5;
            showScore.textContent = score;
            plant.remove();
            clearInterval(fallP)
        }

        if (position >= palm.offsetHeight - 10) {
            plant.remove();
            clearInterval(fallP)
        }
        // if (score < -10){
        //     location = "./failed.html";
        // }
        if (score === 100) {
            location="./continue.html"
            
        }
    }, 3);
}
//
document.getElementById('leftButton').addEventListener('click', () => {
    charX -= 10;
    if (charX < -10) {
        charX = 0;
        
    }
    updateCharPosition();
});

document.getElementById('rightButton').addEventListener('click', () => {
    charX += 10;
    if (charX > 100) {
        charX = 99;
    }
    updateCharPosition();
});



setInterval(datesFalling, 2000);
setInterval(plantFalling, 1500);

