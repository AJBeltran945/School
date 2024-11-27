const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

const rows = 20;
const columns = 10;
const squareSize = 30;

// Board initialized with zeros
let board = Array.from({ length: rows }, () => Array(columns).fill(0));

// Pieces definition
const pieces = [
    { name: 'L', shape: [[1, 0], [1, 0], [1, 1]], color: 'orange', probability: 0.125 },
    { name: 'O', shape: [[1, 1], [1, 1]], color: 'yellow', probability: 0.125 },
    { name: 'T', shape: [[0, 1, 0], [1, 1, 1]], color: 'purple', probability: 0.125 },
    { name: 'I', shape: [[1], [1], [1], [1]], color: 'cyan', probability: 0.125 },
    { name: 'Z', shape: [[1, 1, 0], [0, 1, 1]], color: 'red', probability: 0.125 },
    { name: 'S', shape: [[0, 1, 1], [1, 1, 0]], color: 'green', probability: 0.125 },
    { name: 'J', shape: [[0, 1], [0, 1], [1, 1]], color: 'blue', probability: 0.125 },
    { name: 'C', shape: [[1, 1, 1], [1, 0, 1]], color: 'pink', probability: 0.125 }
];

// Function to draw the board
function drawBoard() {
    board.forEach((row, y) => {
        row.forEach((cell, x) => {
            context.fillStyle = cell === 1 ? 'gray' : 'black';
            context.fillRect(x * squareSize, y * squareSize, squareSize, squareSize);
            context.strokeStyle = 'white';
            context.strokeRect(x * squareSize, y * squareSize, squareSize, squareSize);
        });
    });
}

// Function to draw a piece
function drawPiece(piece, offsetX, offsetY) {
    piece.shape.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell) {
                context.fillStyle = piece.color;
                context.fillRect((x + offsetX) * squareSize, (y + offsetY) * squareSize, squareSize, squareSize);
                context.strokeStyle = 'white';
                context.strokeRect((x + offsetX) * squareSize, (y + offsetY) * squareSize, squareSize, squareSize);
            }
        });
    });
}

// Generate a random piece based on probabilities
function generatePiece() {
    const rand = Math.random();
    let cumulative = 0;
    for (let piece of pieces) {
        cumulative += piece.probability;
        if (rand < cumulative) {
            return piece;
        }
    }
}

// Check for collisions
function checkCollisions(piece, offsetX, offsetY) {
    for (let y = 0; y < piece.shape.length; y++) {
        for (let x = 0; x < piece.shape[y].length; x++) {
            if (piece.shape[y][x]) {
                const newX = x + offsetX;
                const newY = y + offsetY;

                if (newX < 0 || newX >= columns || newY >= rows || (newY >= 0 && board[newY][newX] === 1)) {
                    return true;
                }
            }
        }
    }
    return false;
}

// Position the piece on the board
function placePiece(piece, offsetX, offsetY) {
    piece.shape.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell) {
                board[y + offsetY][x + offsetX] = 1;
            }
        });
    });
}

// Remove a complete line
function removeLine() {
    for (let y = rows - 1; y >= 0; y--) {
        if (board[y].every(cell => cell === 1)) {
            board.splice(y, 1);
            board.unshift(Array(columns).fill(0));
        }
    }
}

// Instant drop functionality
function instantDrop() {
    while (!checkCollisions(currentPiece, posX, posY + 1)) {
        posY++;
    }
    placePiece(currentPiece, posX, posY);
    removeLine();
    currentPiece = generatePiece();
    posX = 3;
    posY = 0;

    if (checkCollisions(currentPiece, posX, posY)) {
        board = Array.from({ length: rows }, () => Array(columns).fill(0));
    }
}

// Update game state
let currentPiece = generatePiece();
let posX = 3, posY = 0;

function update() {
    if (checkCollisions(currentPiece, posX, posY + 1)) {
        placePiece(currentPiece, posX, posY);
        removeLine();
        currentPiece = generatePiece();
        posX = 3;
        posY = 0;

        if (checkCollisions(currentPiece, posX, posY)) {
            board = Array.from({ length: rows }, () => Array(columns).fill(0));
        }
    } else {
        posY++;
    }
}

// Function to play the game
function play() {
    drawBoard();
    drawPiece(currentPiece, posX, posY);
    update();
}

setInterval(play, 500);

// Player controls
document.addEventListener('keydown', event => {
    if (event.key === 'a' && !checkCollisions(currentPiece, posX - 1, posY)) {
        posX--;
    } else if (event.key === 'd' && !checkCollisions(currentPiece, posX + 1, posY)) {
        posX++;
    } else if (event.key === 's' && !checkCollisions(currentPiece, posX, posY + 1)) {
        posY++;
    } else if (event.key === 'w') {
        const rotatedShape = currentPiece.shape[0].map((_, i) => currentPiece.shape.map(row => row[i]).reverse());
        const originalShape = currentPiece.shape;
        currentPiece.shape = rotatedShape;
        if (checkCollisions(currentPiece, posX, posY)) {
            currentPiece.shape = originalShape;
        }
    } else if (event.key === ' ') {
        instantDrop();
    }
});
