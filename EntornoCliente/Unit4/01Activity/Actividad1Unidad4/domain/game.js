import { getRandomPiece } from '../shared/helpers.js';

export class game {
    constructor(board, pieces) {
        this.board = board;
        this.pieces = pieces;
        this.currentPiece = getRandomPiece(this.pieces);
        this.score = 0;
    }

    movePiece(offsetX, offsetY) {
        if (!this.board.isCollision(this.currentPiece, offsetX, offsetY)) {
            this.currentPiece.x += offsetX;
            this.currentPiece.y += offsetY;
            return true;
        }
        return false;
    }

    rotatePiece() {
        const originalShape = this.currentPiece.shape;
        this.currentPiece.rotate();
        if (this.board.isCollision(this.currentPiece, 0, 0)) {
            this.currentPiece.shape = originalShape;
        }
    }

    lockPiece() {
        this.board.placePiece(this.currentPiece);
        this.board.clearLines();
        this.currentPiece = getRandomPiece(this.pieces);
        if (this.board.isCollision(this.currentPiece, 0, 0)) {
            throw new Error('Game Over');
        }
    }
}
