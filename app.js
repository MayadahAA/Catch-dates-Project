const palm = document.getElementById("palm");
const char = document.getElementById("char");
const showScore = document.getElementById("score");

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
            showScore.innerText = `Score: ${score}`;
            date.remove();
            clearInterval(fall)
        }

        if (position >= palm.offsetHeight - 20) {
            date.remove();
            clearInterval(fall)
        }

    }, 20);
}

document.getElementById('leftButton').addEventListener('click', () => {
    charX += 10;
    if (charX < 0) {
        charX = 0;
        
    }
    updateCharPosition();
})