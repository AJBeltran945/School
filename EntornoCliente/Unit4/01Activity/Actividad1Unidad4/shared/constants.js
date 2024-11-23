export const ROWS = 20;
export const COLUMNS = 10;
export const SQUARE_SIZE = 30;

export const PIECES = [
    {
        name: 'L',
        shape: [
            [1, 0],
            [1, 0],
            [1, 1]
        ],
        color: 'orange',
        probability: 0.2
    },
    {
        name: 'O',
        shape: [
            [1, 1],
            [1, 1]
        ],
        color: 'yellow',
        probability: 0.2
    },
    {
        name: 'T',
        shape: [
            [0, 1, 0],
            [1, 1, 1]
        ],
        color: 'purple',
        probability: 0.2
    },
    {
        name: 'I',
        shape: [
            [1],
            [1],
            [1],
            [1]
        ],
        color: 'cyan',
        probability: 0.2
    },
    {
        name: 'Z',
        shape: [
            [1, 1, 0],
            [0, 1, 1]],
        color: 'red',
        probability: 0.2
    },
    {
        name: 'S',
        shape: [
            [0, 1, 1],
            [1, 1, 0]
        ],
        color: 'green',
        probability: 0.2
    },
    {
        name: 'J',
        shape: [
            [0, 1],
            [0, 1],
            [1, 1]
        ],
        color: 'blue',
        probability: 0.2
    },
    {
        name: 'C',
        shape: [
            [1, 1, 1],
            [1, 0, 1],
        ],
        color: "pink",
        probability: 0.2
    }
];
