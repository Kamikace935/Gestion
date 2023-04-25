// https://tetris.fandom.com/wiki/Tetris_Guideline

// get a random integer between the range of [min,max]
// @see https://stackoverflow.com/a/1527820/2124254
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Genera una nueva secuencia de tetrominó
// @see https://tetris.fandom.com/wiki/Random_Generator
function generateSequence() {
    const bag = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];

    while (bag.length) {
        const rand = Math.floor(Math.random() * (bag.length));
        const name = bag.splice(rand, 1)[0];
        tetrominoSequence.push(name);
    }
}

// Coge el siguiente tetromino de la secuencia
function getNextTetromino() {
    if (tetrominoSequence.length === 0) {
        generateSequence();
    }

    const name = tetrominoSequence.pop();
    const matrix = tetrominoes[name];

    // Las figuras I y O empiezan centradas, las demás en el centro-izquierda
    const col = playfield[0].length / 2 - Math.ceil(matrix[0].length / 2);

    // La figura I empieza en la fila 21 (-1), el resto desde la fila 22 (-2)
    const row = name === 'I' ? -1 : -2;

    return {
        name: name,      // Nombre de la figura
        matrix: matrix,  // La rotación actual de la matriz
        row: row,        // Fila actual (Inicia fuera de la pantalla)
        col: col         // Columna actual
    };
}

// Rotación de la matriz 90º
// @see https://codereview.stackexchange.com/a/186834
function rotate(matrix) {
    const N = matrix.length - 1;

    return matrix.map((row, i) =>
        row.map((val, j) => matrix[N - j][i])
    );
}

// Comprueba si el movimiento de la matriz es válido
function isValidMove(matrix, cellRow, cellCol) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] && (
                // Sobresale de los límites del juego
                cellCol + col < 0 ||
                cellCol + col >= playfield[0].length ||
                cellRow + row >= playfield.length ||
                // Colisión con otra figura
                playfield[cellRow + row][cellCol + col])
            ) {
                return false;
            }
        }
    }

    return true;
}

// Coloca el tetromino en el juego
function placeTetromino() {
    for (let row = 0; row < tetromino.matrix.length; row++) {
        for (let col = 0; col < tetromino.matrix[row].length; col++) {
            if (tetromino.matrix[row][col]) {

                // Termina el juego si cualquier parte de una figura se sale de la pantalla
                if (tetromino.row + row < 0) {
                    return showGameOver();
                }

                playfield[tetromino.row + row][tetromino.col + col] = tetromino.name;
            }
        }
    }

    // Comprueba las líneas que puede eliminar desde el fondo hasta la parte de arriba
    for (let row = playfield.length - 1; row >= 0; ) {
        if (playfield[row].every(cell => !!cell)) {

            // Elimina cada fila por encima de esta
            for (let r = row; r >= 0; r--) {
                for (let c = 0; c < playfield[r].length; c++) {
                    playfield[r][c] = playfield[r-1][c];
                }
            }
        }
        else {
            row--;
        }
    }
    //colocar variable para la siguiente ficha
    tetromino = getNextTetromino();
}

// Muestra la pantalla de final de juego
// Mejorar implementación input text
function showGameOver() {
    cancelAnimationFrame(rAF);
    gameOver = true;

    input.type = "text";
    input.maxLength = 3;
    input.placeholder = "Escribe algo";
    input.style.position = "absolute";
    input.style.left = canvas.offsetLeft + "px";
    input.style.top = canvas.offsetTop + "px";
    input.opacity = 0;
    canvas.parentNode.appendChild(input);
    input.focus();



    context.fillStyle = 'grey';
    context.globalAlpha = 0.85;
    context.fillRect(0, canvas.height / 2 - 32, canvas.width, 90);

    context.globalAlpha = 1;
    context.fillStyle = 'white';
    context.font = '36px monospace';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('GAME OVER', canvas.width / 2, canvas.height / 2);
    context.font = "20px monospace";
    context.fillText('Nickname:', canvas.width / 2 - 60, canvas.height / 2 + 35);

    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    input.addEventListener("input", () => {
        context.putImageData(imageData, 0,0);
        context.fillStyle = 'white';
        context.font = "25px monospace";

        context.fillText(input.value.toUpperCase(), canvas.width / 2 + 15, canvas.height / 2 + 35);
    });
}

const canvas = document.getElementById('game');
// @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
const context = canvas.getContext('2d');
const input = document.createElement("input");
const grid = 32;
const tetrominoSequence = [];

// Mantiene un seguimiento de lo que hay en cada celda del juego usando un array bidimensional
// La pantalla es de 10x20 con una fila sobresaliente por la parte superior
const playfield = [];

// Rellena el tablero
for (let row = -2; row < 20; row++) {
    playfield[row] = [];

    for (let col = 0; col < 10; col++) {
        playfield[row][col] = 0;
    }
}

// Como formar cada tetromino
// @see https://tetris.fandom.com/wiki/SRS
const tetrominoes = {
    'I': [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
    ],
    'J': [
        [1,0,0],
        [1,1,1],
        [0,0,0],
    ],
    'L': [
        [0,0,1],
        [1,1,1],
        [0,0,0],
    ],
    'O': [
        [1,1],
        [1,1],
    ],
    'S': [
        [0,1,1],
        [1,1,0],
        [0,0,0],
    ],
    'Z': [
        [1,1,0],
        [0,1,1],
        [0,0,0],
    ],
    'T': [
        [0,1,0],
        [1,1,1],
        [0,0,0],
    ]
};

// Color de cada tetromino
const colors = {
    'I': 'cyan',
    'O': 'yellow',
    'T': 'purple',
    'S': 'green',
    'Z': 'red',
    'J': 'blue',
    'L': 'orange'
};

let count = 0;
let tetromino = getNextTetromino();
let rAF = null;  // Mantiene un seguimiento de los frames de animación para poder cancelarlo
let gameOver = false;

// bucle de juego
function loop() {
    rAF = requestAnimationFrame(loop);
    context.clearRect(0,0,canvas.width,canvas.height);

    // Dibuja el tablero
    for (let row = 0; row < 20; row++) {
        for (let col = 0; col < 10; col++) {
            if (playfield[row][col]) {
                const name = playfield[row][col];
                context.fillStyle = colors[name];

                // drawing 1 px smaller than the grid creates a grid effect
                context.fillRect(col * grid, row * grid, grid-1, grid-1);
            }
        }
    }

    // draw the active tetromino
    if (tetromino) {

        // tetromino falls every 35 frames
        if (++count > 35) {
            tetromino.row++;
            count = 0;

            // place piece if it runs into anything
            if (!isValidMove(tetromino.matrix, tetromino.row, tetromino.col)) {
                tetromino.row--;
                placeTetromino();
            }
        }

        context.fillStyle = colors[tetromino.name];

        for (let row = 0; row < tetromino.matrix.length; row++) {
            for (let col = 0; col < tetromino.matrix[row].length; col++) {
                if (tetromino.matrix[row][col]) {

                    // drawing 1 px smaller than the grid creates a grid effect
                    context.fillRect((tetromino.col + col) * grid, (tetromino.row + row) * grid, grid-1, grid-1);
                }
            }
        }
    }
}

// listen to keyboard events to move the active tetromino
document.addEventListener('keydown', function(e) {
    if (gameOver) return;

    // Teclas direccionales izquierda y derecha (movimiento)
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        const col = e.key === "ArrowLeft"
            ? tetromino.col - 1
            : tetromino.col + 1;

        if (isValidMove(tetromino.matrix, tetromino.row, col)) {
            tetromino.col = col;
        }
    }

    // Tecla direccional arriba (rotar figura)
    if (e.key === "ArrowUp") {
        const matrix = rotate(tetromino.matrix);
        if (isValidMove(matrix, tetromino.row, tetromino.col)) {
            tetromino.matrix = matrix;
        }
    }

    // Tecla direccional abajo (acelerar caída)
    if(e.key === "ArrowDown") {
        const row = tetromino.row + 1;

        if (!isValidMove(tetromino.matrix, row, tetromino.col)) {
            tetromino.row = row - 1;

            placeTetromino();
            return;
        }

        tetromino.row = row;
    }
});

// start the game
rAF = requestAnimationFrame(loop);