const quizData = [
    {
        question: "What’s your ideal color palette?",
        options: [
            {text: "PINK", image: "../images/pink.png"},
            {text: "NEONS", image: "../images/neon.png"},
            {text: "NEUTRALS", image: "../images/neutrals.png"},
            {text: "PASTEL", image: "../images/pastels.png"}
        ]
    },
    {
        question: "How do you celebrate a big win?",
        options: [
            {text: "A big party with friends!", image: "../images/party.jpg"},
            {text: "Quality time with family", image: "../images/family.png"},
            {text: "A quiet night to myself", image: "../images/quiet.png"},
            {text: "Planning my next adventure", image: "../images/adventure.png"}
        ]
    },
    {
        question: "Pick a superpower:",
        options: [
            {text: "Super strength", image: "../images/strength.png"},
            {text: "Lightning speed", image: "../images/speed.png"},
            {text: "Telepathy", image: "../images/telepathy.png"},
            {text: "Flying", image: "../images/fly.png"}
        ]
    },
    {
        question: "What’s your favorite way to stay active?",
        options: [
            {text: "Shooting hoops with friends", image: "../images/basketball.png"},
            {text: "Doing yoga or stretching", image: "../images/walking.png"},
            {text: "Hitting the gym", image: "../images/gym.png"},
            {text: "Going for a long run", image: "../images/run.png"}
        ]
    },
    {
        question: "What are your dream vacation spots?",
        options: [
            {text: "Mountains", image: "../images/mountains.png"},
            {text: "Snowy retreats", image: "../images/snow.png"},
            {text: "Beach getaways", image: "../images/beach.png"},
            {text: "City exploration", image: "../images/city.png"}
        ]
    }
];

const playerResults = [
    { name: "Angel Reese", image: "../images/reese.png" },
    { name: "Caitlin Clark", image: "../images/clark.png" },
    { name: "A'ja Wilson", image: "../images/aja.png" },
    { name: "Sabrina Ionescu", image: "../images/sabrina.png" },
    { name: "Breanna Stewart", image: "../images/breanna.png" },
    { name: "Kelsey Plum", image: "../images/plum.png" }
];

let currentQuestion = 0;
let userAnswers = [];

function loadQuestion() {
    const quizContainer = document.querySelector('.quiz-container');
    const questionElement = document.getElementById('question');
    const optionsContainer = document.querySelector('.options-container');
    const resultContainer = document.getElementById('result');
    
    optionsContainer.innerHTML = '';
    resultContainer.style.display = 'none'; 
    const currentData = quizData[currentQuestion];
    questionElement.textContent = currentData.question;

    currentData.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.onclick = () => selectOption(index);

        const img = document.createElement('img');
        img.src = option.image;
        img.alt = option.text;

        const p = document.createElement('p');
        p.textContent = option.text;

        optionDiv.appendChild(img);
        optionDiv.appendChild(p);

        optionsContainer.appendChild(optionDiv);
    });
}

function selectOption(selectedIndex) {
    userAnswers.push(selectedIndex);
    
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        calculateResult();
    }
}

function calculateResult() {
    const resultIndex = userAnswers.reduce((a, b) => a + b) % playerResults.length;
    const result = playerResults[resultIndex];

    document.getElementById('question').style.display = 'none'; 
    document.querySelector('.options-container').style.display = 'none'; 
    document.getElementById('playerName').textContent = `You are most like: ${result.name}!`;
    document.getElementById('playerImage').src = result.image;
    document.getElementById('result').style.display = 'block'; 

    document.getElementById('restartButton').onclick = function() {
        currentQuestion = 0;
        userAnswers = [];
        document.getElementById('question').style.display = 'block'; 
        document.querySelector('.options-container').style.display = 'flex'; 
        loadQuestion(); 
    };
}
window.onload = loadQuestion;
