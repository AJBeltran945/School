import { ROWS, COLUMNS } from '../shared/constants.js';

export class board {
    constructor() {
        this.rows = ROWS;
        this.columns = COLUMNS;
        this.grid = Array.from({ length: this.rows }, () => Array(this.columns).fill(0));
    }

    isCollision(piece, offsetX, offsetY) {
        for (let y = 0; y < piece.shape.length; y++) {
            for (let x = 0; x < piece.shape[y].length; x++) {
                if (piece.shape[y][x]) {
                    const newX = x + piece.x + offsetX;
                    const newY = y + piece.y + offsetY;

                    if (
                        newX < 0 ||
                        newX >= this.columns ||
                        newY >= this.rows ||
                        (newY >= 0 && this.grid[newY][newX] === 1)
                    ) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    placePiece(piece) {
        piece.shape.forEach((row, y) => {
            row.forEach((cell, x) => {
                if (cell) {
                    this.grid[piece.y + y][piece.x + x] = 1;
                }
            });
        });
    }

    clearLines() {
        let clearedLines = 0;
        this.grid = this.grid.filter(row => {
            if (row.every(cell => cell === 1)) {
                clearedLines++;
                return false;
            }
            return true;
        });
        while (clearedLines > 0) {
            this.grid.unshift(Array(this.columns).fill(0));
            clearedLines--;
        }
    }
}
