/* eslint-disable linebreak-style */

/* eslint-disable semi */

/* eslint-disable quotes */
let currentPlayer = "X"
let main_row = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

const message = document.getElementById("showmessage")
const columns = document.querySelectorAll(".column")

for (let index = 0; index < columns.length; index++) {
    columns[index].addEventListener("click", () => {
        const row = Math.floor(index / 3)
        const col = index % 3

        if (main_row[row][col] === "" && !gamestop()) {
            main_row[row][col] = currentPlayer
            columns[index].textContent = currentPlayer
            currentPlayer = currentPlayer === "X" ? "O" : "X"
            updateMessage();
        }
    });
}

function gamestop() {
    return checkwinner("X") || checkwinner("O") || boardIsFull()
}

function boardIsFull() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (main_row[row][col] === '') {
                return false;
            }
        }
    }
    return true
}

function checkwinner(player) {
    for (let i = 0; i < 3; i++) {
        if (main_row[i][0] === player && main_row[i][1] === player && main_row[i][2] === player) {
            return true
        }
        if (main_row[0][i] === player && main_row[1][i] === player && main_row[2][i] === player) {
            return true
        }
    }
    if (main_row[0][0] === player && main_row[1][1] === player && main_row[2][2] === player) {
        return true
    }
    if (main_row[0][2] === player && main_row[1][1] === player && main_row[2][0] === player) {
        return true
    }
    return false
}

function updateMessage() {
    if (checkwinner('X')) {
        message.textContent = "Player X wins"
    } else if (checkwinner("O")) {
        message.textContent = "Player O wins"
    } else if (boardIsFull()) {
        message.textContent = 'It\'s a draw'
    } else {
        message.textContent = `Player ${currentPlayer}'s turn`
    }
}
const resetbutton = document.getElementById("resetbutton")

resetbutton.addEventListener("click", function () {
    resetBoard()
});

function resetBoard() {
    main_row = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    document.querySelectorAll(".column").forEach(cell => cell.textContent = "")

}



