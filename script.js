document.addEventListener("DOMContentLoaded", () => {
    const gameBoard = document.getElementById('game-board');
    const letters = document.getElementById('letters');
    const scoreDisplay = document.getElementById('score');
    const hintButton = document.getElementById('hint-button');
    const hintDisplay = document.getElementById('hint');

    let score = 0;

    // Initial setup
    const initialBoard = [
        '','','','','','','','','','','','','','','',
        '','','','','','','','','','','','','','','',
        '','','','','','','','','','','','','','','',
        '','','','','','','','','','','','','','','',
        '','','','','','','','','','','','','','','',
        '','','','','','','','','','','','','','','',
        '','','','','','','','','','','','','','','',
        '','','','','','','','','','','','','','','',
        '','','','','','','','','','','','','','','',
        '','','','','','','','','','','','','','','',
        '','','','','','','','','','','','','','','',
        '','','','','','','','','','','','','','','',
        '','','','','','','','','','','','','','','',
        '','','','','','','','','','','','','','','',
        '','','','','','','','','','','','','','',''
    ];

    const initialLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

    // Render board
    function renderBoard() {
        gameBoard.innerHTML = '';
        initialBoard.forEach(tile => {
            const tileElement = document.createElement('div');
            tileElement.classList.add('tile');
            tileElement.innerText = tile;
            gameBoard.appendChild(tileElement);
        });
    }

    // Render letters
    function renderLetters() {
        letters.innerHTML = '';
        initialLetters.forEach(letter => {
            const letterElement = document.createElement('div');
            letterElement.classList.add('letter');
            letterElement.innerText = letter;
            letters.appendChild(letterElement);
        });
    }

    // Update score
    function updateScore(points) {
        score += points;
        scoreDisplay.innerText = score;
    }

    // Hint functionality
    hintButton.addEventListener('click', () => {
        hintDisplay.innerText = 'Voici une énigme : Je suis un fruit rouge et sucré, souvent utilisé en confiture. Qui suis-je ?';
    });

    // Initial render
    renderBoard();
    renderLetters();
});
