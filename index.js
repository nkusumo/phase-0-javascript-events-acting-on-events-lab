// Your code here

const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 10}px`;
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    const right = left + 40;

    if (right < 400) {
        dodger.style.left = `${left + 10}px`;
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});