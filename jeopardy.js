// Get the modal and button elements
let modal = document.getElementById('myModal');
let modalContent = document.querySelector('.modal-content');
let closeModalBtn = document.querySelector('.close');
let modalBtn = document.getElementById('modalBtn');

// Event listener for modal button
modalBtn.onclick = function () {
    modal.style.display = 'block';
}

// Event listener for closing the modal
closeModalBtn.onclick = function () {
    modal.style.display = 'none';
}

// Jeopardy game data
var gameData = {
    categories: ['Python', 'Web Programming', 'Data Structures & Algorithms', 'Cybersecurity', 'Miscellaneous'],
    questions: {
        'Python': [
            { label: "$100", question: 'Is a list mutable[T/F]?' },
            { label: "$200", question: 'What is the purpose of a for loop?' },
            { label: "$300", question: 'Python uses semicolons after a loop[T/F]?' },
            { label: "$400", question: 'What year was python created?' },
            { label: "$500", question: 'What library in python allows you to do mathematical operations in an array?' },
        ],
        'Web Programming': [
            { label: "$100", question: 'what does html stand for?' },
            { label: "$200", question: 'what css property allows you to create boxes on a screen?' },
            { label: "$300", question: 'if html is the skeleton, then what is css and javascript?' },
            { label: "$400", question: 'what year was javascript invented?' },
            { label: "$500", question: 'What property is being used to open a mini window in this game? ' },
        ],
        'Data Structures & Algorithms': [
            { label: "$100", question: 'What are the different types of sorting techniques one can use in code? ' },
            { label: "$200", question: 'What time complexity is better: O(n) or O(log n)?' },
            { label: "$300", question: 'What is the tower of Hanoi algorithm?' },
            { label: "$400", question: 'What is the siepernski triangle algorithm?' },
            { label: "$500", question: 'diffrentiate NULL and VOID' },
        ],
        'Cybersecurity': [
            { label: "$100", question: 'Define Cybersecurity' },
            { label: "$200", question: 'What is a cybersecurity risk assessment?' },
            { label: "$300", question: 'What is the CIA Triad?' },
            { label: "$400", question: 'What is the difference between a threat, vulnerability, and risk?' },
            { label: "$500", question: 'What is the difference between IDS and IPS?' },
        ],
        'Miscellaneous': [
            { label: "$100", question: 'What was the oldest programming language in Computer Science?' },
            { label: "$200", question: 'Who is Grace Hopper?' },
            { label: "$300", question: 'Who invented LISP?' },
            { label: "$400", question: 'What was the first High-Level programming Language?' },
            { label: "$500", question: 'Who is Rasmus Lerdorf?' },
        ],
    },
    teams: {
        'Team 1': 0,
        'Team 2': 0,
    }
};

// Function to update the game board
function updateGameBoard() {
    let gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';

    gameData.categories.forEach(function (category) {
        let categoryElement = document.createElement('div');
        categoryElement.className = 'category';
        categoryElement.textContent = category;

        gameData.questions[category].forEach(function (value, index) {
            let card = document.createElement('div');
            card.className = 'card';

            // Create a button for each card
            let button = document.createElement('button');
            button.textContent = value.label;
            button.addEventListener('click', function () {
                showModal(category, index);
            });

            card.appendChild(button);
            categoryElement.appendChild(card);
        });

        gameBoard.appendChild(categoryElement);
    });
}

// Function to show the modal with question information
function showModal(category, index) {
    let question = getQuestion(category, index);
    modalContent.innerHTML = '<p>' + question + '</p>';

    // Open modal
    modal.style.display = 'block';
    // Close modal if clicked outside the modal
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}

// function to call the question 
function getQuestion(category, index) {
    return gameData.questions[category][index].question;
}

// Function to adjust team scores
function adjustScore(team, points, operation) {
    if (operation === 'plus') {
        gameData.teams[team] += points;
    } else if (operation === 'minus') {
        gameData.teams[team] -= points;
    }

    // Update the display of team scores
    updateTeamScoreDisplay();
}

// update the display of team scores
function updateTeamScoreDisplay() {
    let team1Score = document.getElementById('team1-score');
    let team2Score = document.getElementById('team2-score');
    team1Score.textContent = `Team 1: ${gameData.teams['Team 1']}`;
    team2Score.textContent = `Team 2: ${gameData.teams['Team 2']}`;
}
// Update the game board
updateGameBoard();