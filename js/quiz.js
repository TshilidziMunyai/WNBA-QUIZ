const quizData = [
    {
        question: "What’s your ideal color palette?",
        options: [
            { text: "PINK", image: "../images/pink.png" },
            { text: "NEONS", image: "../images/neon.png" },
            { text: "NEUTRALS", image: "../images/neutrals.png" },
            { text: "PASTEL", image: "../images/pastels.png" }
        ]
    },
    {
        question: "How do you celebrate a big win?",
        options: [
            { text: "A big party with friends!", image: "../images/party.jpg" },
            { text: "Quality time with family", image: "../images/family.png" },
            { text: "A quiet night to myself", image: "../images/quiet.png" },
            { text: "Planning my next adventure", image: "../images/adventure.png" }
        ]
    },
    {
        question: "Pick a superpower:",
        options: [
            { text: "Super strength", image: "../images/strength.png" },
            { text: "Lightning speed", image: "../images/speed.png" },
            { text: "Telepathy", image: "../images/telepathy.png" },
            { text: "Flying", image: "../images/fly.png" }
        ]
    },
    {
        question: "What’s your favorite way to stay active?",
        options: [
            { text: "Shooting hoops with friends", image: "../images/basketball.png" },
            { text: "Doing yoga or stretching", image: "../images/walking.png" },
            { text: "Hitting the gym", image: "../images/gym.png" },
            { text: "Going for a long run", image: "../images/run.png" }
        ]
    },
    {
        question: "What are your dream vacation spots?",
        options: [
            { text: "Mountains", image: "../images/mountains.png" },
            { text: "Snowy retreats", image: "../images/snow.png" },
            { text: "Beach getaways", image: "../images/beach.png" },
            { text: "City exploration", image: "../images/city.png" }
        ]
    },
    {
        question: "Which hobby appeals to you the most?",
        options: [
            { text: "Painting or drawing", image: "../images/art.png" },
            { text: "Playing video games", image: "../images/games.png" },
            { text: "Cooking or baking", image: "../images/cooking.png" },
            { text: "Gardening", image: "../images/gardening.png" }
        ]
    },
    {
        question: "How do you prefer to relax?",
        options: [
            { text: "Watching movies or TV", image: "../images/movies.png" },
            { text: "Reading a good book", image: "../images/reading.png" },
            { text: "Meditating", image: "../images/meditation.png" },
            { text: "Taking a nap", image: "../images/nap.png" }
        ]
    },
    {
        question: "Which type of pet would you choose?",
        options: [
            { text: "A loyal dog", image: "../images/dog.png" },
            { text: "A playful cat", image: "../images/cat.png" },
            { text: "A quiet fish", image: "../images/fish.png" },
            { text: "An exotic bird", image: "../images/bird.png" }
        ]
    },
    {
        question: "What kind of music do you vibe with?",
        options: [
            { text: "Pop", image: "../images/pop.png" },
            { text: "Hip-hop", image: "../images/hiphop.png" },
            { text: "Rock", image: "../images/rock.png" },
            { text: "Classical", image: "../images/classical.png" }
        ]
    },
    {
        question: "What’s your go-to comfort food?",
        options: [
            { text: "Pizza", image: "../images/pizza.png" },
            { text: "Ice cream", image: "../images/icecream.png" },
            { text: "Burgers", image: "../images/burger.png" },
            { text: "Pasta", image: "../images/pasta.png" }
        ]
    }
];

const playerResults = [
    { name: "Jackie Young", image: "../PlayerImages/young.png" },
    { name: "Tiffany Hayes", image: "../PlayerImages/hayes.png" },
    { name: "Kayla McBride", image: "../PlayerImages/kmac.png" },
    { name: "Kate Martin", image: "../PlayerImages/kate.png" },
    { name: "Alyssa Thomas", image: "../PlayerImages/AT.png" },
    { name: "Stefanie Dolson", image: "../PlayerImages/dolson.png" },
    
    { name: "Skylar Diggins-Smith", image: "../PlayerImages/SDS.png" },
    { name: "Courtney Williams", image: "../PlayerImages/williams.png" },
    { name: "Allisha Gray", image: "../PlayerImages/Agray.png" },
    { name: "Cameron Brink", image: "../PlayerImages/brink.png" },
    { name: "Napheesa Collier", image: "../PlayerImages/phee.png" },
    { name: "Shakira Austin", image: "../PlayerImages/shakira.png" },
    
    { name: "Jewell Loyd", image: "../PlayerImages/loyd.png" },
    { name: "Courtney Vandersloot", image: "../PlayerImages/sloot.png" },
    { name: "DiJonai Carrington", image: "../PlayerImages/nai.png" },
    { name: "Rickea Jackson", image: "../PlayerImages/rickea.png" },
    { name: "Breanna Stewart", image: "../PlayerImages/stewie.png" },
    { name: "Aaliyah Edwards", image: "../PlayerImages/edwards.png" },
    
    { name: "Sabrina Ionescu", image: "../PlayerImages/sabrina.png" },
    { name: "Natasha Cloud", image: "../PlayerImages/cloud.png" },
    { name: "Marina Mabrey", image: "../PlayerImages/marina.png" },
    { name: "Katie Lou Samuelson", image: "../PlayerImages/samuelson.png" },
    { name: "Satou Sabally", image: "../PlayerImages/satou.png" },
    { name: "Brittney Griner", image: "../PlayerImages/BG.png" },
    
    { name: "Chelsea Gray", image: "../PlayerImages/gray.png" },
    { name: "Brittney Sykes", image: "../PlayerImages/sykes.png" },
    { name: "Kahleah Copper", image: "../PlayerImages/kah.png" },
    { name: "Lexie Hull", image: "../PlayerImages/hull.png" },
    { name: "Angel Reese", image: "../PlayerImages/barbie.png" },
    { name: "Azurá Stevens", image: "../PlayerImages/azura.png" },
    
    { name: "Arike Ogunbowale", image: "../PlayerImages/arike.png" },
    { name: "Jordin Canada", image: "../PlayerImages/canada.png" },
    { name: "Rhyne Howard", image: "../PlayerImages/rhyne.png" },
    { name: "Rae Burrell", image: "../PlayerImages/rae.png" },
    { name: "Aliyah Boston", image: "../PlayerImages/boston.png" },
    { name: "Dearica Hamby", image: "../PlayerImages/hamby.png" }
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
