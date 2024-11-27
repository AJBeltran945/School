const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

// Constants
const rows = 20;
const columns = 10;
const squareSize = 30;

// Board initialized with zeros
let board = Array.from({ length: rows }, () => Array(columns).fill(0));

// Game variables
let points = 0;
let level = 0;
let linesCleared = 0;
let gameSpeed = 500; // Initial speed (in milliseconds)
let gameInterval = null; // Game interval, initially null
let gameStarted = false; // Flag to check if the game has started
let gameOver = false; // Flag to check if the game is over

// Points for different types of line clears
const pointValues = {
    1: 40,    // Single
    2: 50,    // Double
    3: 100,   // Triple
    4: 300    // Tetris
};

// Pieces definition
const pieces = [
    {
        name: 'L',
        shape: [
            [1, 0],
            [1, 0],
            [1, 1]
        ],
        color: 'orange',
        probability: 0.125
    },
    {
        name: 'O',
        shape: [
            [1, 1],
            [1, 1]
        ],
        color: 'yellow',
        probability: 0.125
    },
    {
        name: 'T',
        shape: [
            [0, 1, 0],
            [1, 1, 1]
        ],
        color: 'purple',
        probability: 0.125
    },
    {
        name: 'I',
        shape: [[1], [1], [1], [1]],
        color: 'cyan',
        probability: 0.125
    },
    {
        name: 'Z',
        shape: [
            [1, 1, 0],
            [0, 1, 1]
        ],
        color: 'red',
        probability: 0.125
    },
    {
        name: 'S',
        shape: [
            [0, 1, 1],
            [1, 1, 0]
        ],
        color: 'green',
        probability: 0.125
    },
    {
        name: 'J',
        shape: [
            [0, 1],
            [0, 1],
            [1, 1]
        ],
        color: 'blue',
        probability: 0.125
    },
    {
        name: 'C',
        shape: [
            [1, 1, 1],
            [1, 0, 1]
        ],
        color: 'pink',
        probability: 0.125
    }
];

// Board and game variables
let nextPiece = generatePiece(); // Store the next piece
const nextPieceCanvas = document.getElementById('nextPiece');
const nextPieceContext = nextPieceCanvas.getContext('2d'); // Context for the next piece canvas

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
    if (!gameStarted || gameOver) return; // Don't draw anything if the game hasn't started or if it's over

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

// Function to draw the next piece
function drawNextPiece() {
    if (!gameStarted || gameOver) return; // Don't draw anything if the game hasn't started or if it's over

    nextPieceContext.clearRect(0, 0, nextPieceCanvas.width, nextPieceCanvas.height); // Clear the next piece canvas

    // Calculate the center position for the next piece to fit inside the smaller canvas
    const offsetX = (nextPieceCanvas.width / squareSize - nextPiece.shape[0].length) / 2;
    const offsetY = (nextPieceCanvas.height / squareSize - nextPiece.shape.length) / 2;

    nextPiece.shape.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell) {
                nextPieceContext.fillStyle = nextPiece.color;
                nextPieceContext.fillRect((x + offsetX) * squareSize, (y + offsetY) * squareSize, squareSize, squareSize);
                nextPieceContext.strokeStyle = 'white';
                nextPieceContext.strokeRect((x + offsetX) * squareSize, (y + offsetY) * squareSize, squareSize, squareSize);
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
function checkCollisions(piece, offsetX, offsetY, shape = piece.shape) {
    for (let y = 0; y < shape.length; y++) {
        for (let x = 0; x < shape[y].length; x++) {
            if (shape[y][x]) {
                const newX = x + offsetX;
                const newY = y + offsetY;

                // Check for out of bounds or collision with another piece
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

// Remove complete lines and update score
function removeLine() {
    let linesRemoved = 0;

    for (let y = rows - 1; y >= 0; y--) {
        if (board[y].every(cell => cell === 1)) {
            board.splice(y, 1);
            board.unshift(Array(columns).fill(0));
            linesRemoved++;
            y++; // Re-check the new row
        }
    }

    if (linesRemoved > 0) {
        updateScore(linesRemoved);
        updateLevel(linesRemoved);
    }
}

// Update score based on the number of lines cleared
function updateScore(linesRemoved) {
    points += pointValues[linesRemoved] * linesRemoved * (level + 1); // Score increases with level
    document.getElementById('points').textContent = points; // Update points display
}

// Update the level based on the total lines cleared
function updateLevel(linesRemoved) {
    linesCleared += linesRemoved;
    const linesToNextLevel = (level + 1) * 10;

    if (linesCleared >= linesToNextLevel) {
        level++;
        linesCleared -= linesToNextLevel; // Carry over extra lines for the next level
        document.getElementById('level').textContent = level; // Update level display
    }
}

// Function to reset the game
function resetGame() {
    board = Array.from({ length: rows }, () => Array(columns).fill(0)); // Clear the board
    points = 0; // Reset points
    level = 0; // Reset level
    linesCleared = 0; // Reset lines cleared
    gameOver = false; // Reset game-over flag
    document.getElementById('points').textContent = points; // Update points display
    document.getElementById('level').textContent = level; // Update level display
    currentPiece = generatePiece(); // Generate a new piece
    nextPiece = generatePiece(); // Generate a new next piece
    posX = 4; // Reset position
    posY = 0;
    // Clear the game-over message
    document.getElementById('game-over').style.display = 'none';
    clearCanvas(); // Clear the canvas
}

// Function to clear the canvas
function clearCanvas() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
}

// Function to stop the game
function stopGame() {
    if (gameInterval) {
        clearInterval(gameInterval);
        gameInterval = null;
        gameStarted = false;
        gameOver = true; // Mark the game as over
        document.getElementById('game-over').style.display = 'block'; // Show "Game Over" message
        document.getElementById('playButton').disabled = false;
    }
}

// Function to start the game
function startGame() {
    resetGame();
    gameSpeed = getGameSpeed(level);
    gameInterval = setInterval(play, gameSpeed);
    gameStarted = true;
    document.getElementById('playButton').disabled = true;
}

// Function to check if the game is over and handle it
function checkGameOver() {
    if (posY === 0 && checkCollisions(currentPiece, posX, posY)) {
        stopGame();
    }
}

// Instant drop functionality
function instantDrop() {
    if (!gameStarted || gameOver) return; // Do nothing if the game hasn't started or if it's over

    while (!checkCollisions(currentPiece, posX, posY + 1)) {
        posY++;
    }
    placePiece(currentPiece, posX, posY);
    removeLine();
    currentPiece = nextPiece; // Use the next piece
    nextPiece = generatePiece(); // Generate a new next piece
    posX = 4;
    posY = 0;

    checkGameOver()

    // Adjust speed based on level
    let newSpeed = getGameSpeed(level);
    if (newSpeed !== gameSpeed) {
        gameSpeed = newSpeed;
        clearInterval(gameInterval);
        gameInterval = setInterval(play, gameSpeed);
    }
}

// Update game state
let currentPiece = generatePiece();
let posX = 3, posY = 0;

function update() {
    if (!gameStarted || gameOver) return; // Do nothing if the game hasn't started or if it's over

    if (checkCollisions(currentPiece, posX, posY + 1)) {
        placePiece(currentPiece, posX, posY);
        removeLine();
        currentPiece = nextPiece; // Use the next piece
        nextPiece = generatePiece(); // Generate a new next piece
        posX = 4;
        posY = 0;


        checkGameOver()
    } else {
        posY++;
    }

    // Adjust speed based on level
    let newSpeed = getGameSpeed(level);
    if (newSpeed !== gameSpeed) {
        gameSpeed = newSpeed;
        clearInterval(gameInterval);
        gameInterval = setInterval(play, gameSpeed);
    }
}

// Event listener for the Play button
document.getElementById('playButton').addEventListener('click', startGame);

// Function to get the game speed based on the level
function getGameSpeed(level) {
    if (level <= 10) {
        return 500 - level * 50; // Speed decreases by 50ms per level
    } else if (level <= 12) {
        return 120;
    } else if (level <= 15) {
        return 100;
    } else if (level <= 18) {
        return 80;
    } else if (level <= 28) {
        return 60;
    } else {
        return 40; // Max speed after level 29
    }
}

// Function to play the game
function play() {
    if (!gameStarted || gameOver) return; // Don't draw anything if the game hasn't started or if it's over

    clearCanvas(); // Clear the canvas before drawing
    drawBoard();
    drawPiece(currentPiece, posX, posY);
    drawNextPiece();
    update();
}

// Player controls
document.addEventListener('keydown', event => {
    if (!gameStarted || gameOver) return; // Don't handle key events if the game hasn't started or if it's over

    if ((event.key === 'a' || event.key === 'A') && !checkCollisions(currentPiece, posX - 1, posY)) {
        posX--;
    } else if ((event.key === 'd' || event.key === 'D') && !checkCollisions(currentPiece, posX + 1, posY)) {
        posX++;
    } else if ((event.key === 's' || event.key === 'S') && !checkCollisions(currentPiece, posX, posY + 1)) {
        posY++;
    } else if (event.key === 'w' || event.key === 'W') {
        rotatePiece();  // Rotate with wall kicks
    } else if (event.key === ' ') {
        instantDrop();
    }

    drawBoard();
    drawPiece(currentPiece, posX, posY);
    drawNextPiece();
});

// Rotate the piece and check for collisions
function rotatePiece() {
    const originalShape = currentPiece.shape;
    let rotatedShape = rotate(currentPiece.shape);  // Rotate the piece shape by 90 degrees
    let offsetX = 0, offsetY = 0;

    // Attempt the rotation
    if (!checkCollisions(currentPiece, posX, posY, rotatedShape)) {
        currentPiece.shape = rotatedShape;
        return;
    }

    // Wall kicks - try moving the piece left or right to find a valid position
    const wallKickOffsets = [
        {x: 1, y: 0},  // Try moving right
        {x: -1, y: 0}, // Try moving left
        {x: 0, y: 1},  // Try moving down
        {x: 0, y: -1}, // Try moving up (rare but sometimes needed)
    ];

    // Try applying the wall kick offsets
    for (let kick of wallKickOffsets) {
        offsetX = kick.x;
        offsetY = kick.y;

        // Try the rotation with the kick applied
        if (!checkCollisions(currentPiece, posX + offsetX, posY + offsetY, rotatedShape)) {
            currentPiece.shape = rotatedShape;  // Apply the rotated shape if valid
            posX += offsetX;  // Apply the offset (move the piece if necessary)
            posY += offsetY;
            return;
        }
    }

    // If no valid kick works, revert to original shape
    currentPiece.shape = originalShape;
}

// Rotate a 2D matrix (piece shape) by 90 degrees
function rotate(shape) {
    return shape[0].map((_, index) => shape.map(row => row[index])).reverse();
}
