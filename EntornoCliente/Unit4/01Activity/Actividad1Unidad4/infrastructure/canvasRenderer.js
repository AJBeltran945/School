export class canvasRenderer {
    constructor(canvasId, squareSize) {
        this.canvas = window.document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
        this.squareSize = squareSize;
    }

    drawBoard(board) {
        board.grid.forEach((row, y) => {
            row.forEach((cell, x) => {
                this.context.fillStyle = cell ? 'gray' : 'black';
                this.context.fillRect(x * this.squareSize, y * this.squareSize, this.squareSize, this.squareSize);
                this.context.strokeStyle = 'white';
                this.context.strokeRect(x * this.squareSize, y * this.squareSize, this.squareSize, this.squareSize);
            });
        });
    }

    drawPiece(currentPiece, piece) {
        currentPiece.shape.forEach((row, y) => {
            row.forEach((cell, x) => {
                if (cell) {
                    this.context.fillStyle = currentPiece.color;
                    this.context.fillRect(
                        (x + piece.x) * this.squareSize,
                        (y + piece.y) * this.squareSize,
                        this.squareSize,
                        this.squareSize
                    );
                    console.log(this.x);
                    this.context.strokeStyle = 'white';
                    this.context.strokeRect(
                        (x + piece.x) * this.squareSize,
                        (y + piece.y) * this.squareSize,
                        this.squareSize,
                        this.squareSize
                    );
                }
            });
        });
    }
}
