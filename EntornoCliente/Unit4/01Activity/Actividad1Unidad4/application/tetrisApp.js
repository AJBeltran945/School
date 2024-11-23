import { board } from '../domain/board.js';
import { game } from '../domain/game.js';
import { piece } from "../domain/piece.js";
import { canvasRenderer } from '../infrastructure/canvasRenderer.js';
import { PIECES, SQUARE_SIZE } from '../shared/constants.js';

export class TetrisApp {
    constructor() {
        this.board = new board();
        this.game = new game(this.board, PIECES);
        this.renderer = new canvasRenderer('tetris', SQUARE_SIZE);
        this.interval = null;
    }

    start() {
        document.addEventListener('keydown', this.handleInput.bind(this));
        this.interval = setInterval(this.update.bind(this), 500);
    }

    handleInput(event) {
        if (event.key === 'a') this.game.movePiece(-1, 0); // Left
        else if (event.key === 'd') this.game.movePiece(1, 0); // Right
        else if (event.key === 's') this.game.movePiece(0, 1); // Down
        else if (event.key === 'w') this.game.rotatePiece(); // Rotate
    }

    update() {
        try {
            if (!this.game.movePiece(0, 1)) {
                this.game.lockPiece();
            }
            this.renderer.drawBoard(this.board);
            console.log(this.board);
            this.renderer.drawPiece(this.game.currentPiece, piece);
            console.log(this.game.currentPiece);
        } catch (error) {
            alert('GAME OVER!');
            console.log(error);
            clearInterval(this.interval);
        }
    }
}
