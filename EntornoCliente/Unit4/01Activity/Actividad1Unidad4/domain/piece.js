export class piece {
    constructor(name, shape, color) {
        this.name = name;
        this.shape = shape;
        this.color = color;
        this.x = 0; // Initial x position
        this.y = 0; // Initial y position
    }

    rotate() {
        // Rotate the piece clockwise
        this.shape = this.shape[0].map((_, i) => this.shape.map(row => row[i]).reverse());
    }
}
