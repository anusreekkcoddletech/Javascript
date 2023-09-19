/* eslint-disable linebreak-style */

/* eslint-disable semi */

/* eslint-disable quotes */
let currentPlayer = "X";
let column1 = document.querySelector(".column1");
let column2 = document.querySelector(".column2");
let column3 = document.querySelector(".column3");
let column4 = document.querySelector(".column4");
let column5 = document.querySelector(".column5");
let column6 = document.querySelector(".column6");
let column7 = document.querySelector(".column7");
let column8 = document.querySelector(".column8");
let column9 = document.querySelector(".column9");

const message = document.getElementById("showmessage");
const columns = [column1, column2, column3, column4, column5, column6, column7, column8, column9];

for (let index = 0; index < columns.length; index++) {
    columns[index].addEventListener("click", () => {
        if (columns[index].textContent === "" && !gamestop()) {
            columns[index].textContent = currentPlayer;
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            updateMessage();
        }
    });
}

function gamestop() {
    return checkwinner("X") || checkwinner("O") || boardIsFull();
}

function boardIsFull() {
    for (let index = 0; index < columns.length; index++) {
        if (columns[index].textContent === "") { 
            return false;
        }
    }
    return true;
}
function checkwinner(player) {
    if ((column1.textContent === player && column2.textContent === player && column3.textContent === player) ||
        (column4.textContent === player && column5.textContent === player && column6.textContent === player) ||
        (column7.textContent === player && column8.textContent === player && column9.textContent === player) ||
        (column1.textContent === player && column4.textContent === player && column7.textContent === player) ||
        (column1.textContent === player && column5.textContent === player && column9.textContent === player) ||
        (column2.textContent === player && column5.textContent === player && column8.textContent === player) ||
        (column3.textContent === player && column6.textContent === player && column9.textContent === player) ||
        (column3.textContent === player && column5.textContent === player && column7.textContent === player)) {
        return true;
    }
    return false;
}
function updateMessage() {
    if (checkwinner("X")) {
        message.textContent = "Player X wins";
    } else if (checkwinner("O")) {
        message.textContent = "Player O wins";
    } else if (boardIsFull()) {
        message.textContent = "It's a draw";
    } else {
        message.textContent = `Player ${currentPlayer}'s turn`;
    }
}
const resetbutton = document.getElementById("resetbutton");
resetbutton.addEventListener("click", function () {
    resetBoard();
});
function resetBoard() {
    currentPlayer = "X";
    columns.forEach((column) => {
        column.textContent = "";
    });
}
