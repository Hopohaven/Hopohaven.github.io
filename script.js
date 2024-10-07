// Motivational quotes
const quotes = [
    "Learning is not just an attitude, but a habit.",
    "Today's efforts are for a better self tomorrow.",
    "Success is not accidental, but the result of daily accumulation.",
    "Knowledge is power, learning makes us stronger.",
    "Persistence is the key to success, never give up!"
];

// Study tips
const studyTips = [
    "Make a feasible study plan and stick to it.",
    "Find suitable learning methods to improve efficiency.",
    "Review regularly to consolidate knowledge.",
    "Form study groups with classmates for mutual supervision and help.",
    "Maintain adequate sleep, appropriate exercise helps improve learning efficiency."
];

// Display random quote
function displayRandomQuote() {
    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

// Display study tips
function displayStudyTips() {
    const tipsListElement = document.getElementById('tips-list');
    studyTips.forEach(tip => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = tip;
        tipsListElement.appendChild(li);
    });
}

// Save goal
function saveGoal(event) {
    event.preventDefault();
    const goalInput = document.getElementById('goal-input');
    const goal = goalInput.value.trim();
    if (goal) {
        const goalsListElement = document.getElementById('goals-list');
        const goalItem = document.createElement('div');
        goalItem.className = 'goal-item';
        goalItem.innerHTML = `
            <span>${goal}</span>
            <button class="btn btn-sm btn-danger">Delete</button>
        `;
        goalsListElement.appendChild(goalItem);
        goalInput.value = '';

        // Add delete functionality
        const deleteButton = goalItem.querySelector('button');
        deleteButton.addEventListener('click', () => {
            goalsListElement.removeChild(goalItem);
        });
    }
}

// Execute after page load
document.addEventListener('DOMContentLoaded', () => {
    displayRandomQuote();
    displayStudyTips();
    
    const goalForm = document.getElementById('goal-form');
    goalForm.addEventListener('submit', saveGoal);

    // More resources button click event
    document.getElementById('more-resources').addEventListener('click', (e) => {
        e.preventDefault();
        alert('Redirecting to more learning resources page, stay tuned!');
    });

    // Study tip details view
    document.querySelectorAll('.tip-details').forEach(icon => {
        icon.addEventListener('click', () => {
            const tipId = icon.getAttribute('data-tip');
            showTipDetails(tipId);
        });
    });

    // Study tip favorite
    document.querySelectorAll('.tip-favorite').forEach(icon => {
        icon.addEventListener('click', () => {
            icon.classList.toggle('active');
            const tipId = icon.getAttribute('data-tip');
            toggleFavorite(tipId);
        });
    });

    // Vocabulary game button click event
    // document.getElementById('start-game').addEventListener('click', () => {
    //     alert('The vocabulary game is about to start. Are you ready?');
    //     // Add logic to redirect to the game page here
    // });
});

function showTipDetails(tipId) {
    // Show different study tip details based on tipId
    let details = '';
    switch(tipId) {
        case 'chinese-1':
            details = 'Reading Comprehension Tips:\n1. Quickly skim the text to grasp the main idea\n2. Read carefully, mark key words and sentences\n3. Analyze article structure and author\'s viewpoint\n4. Summarize the main theme';
            break;
        case 'chinese-2':
            details = 'Writing Skills Tips:\n1. Determine the article theme\n2. Outline the article\n3. Use rhetorical devices like metaphors and personification\n4. Pay attention to the connection between beginning and end';
            break;
        case 'math-1':
            details = 'Trigonometric Function Formula Mnemonics:\nsin(A+B) = sinAcosB + cosAsinB\ncos(A+B) = cosAcosB - sinAsinB\nMnemonic: For sin and cos, add and subtract with cross multiplication';
            break;
        case 'math-2':
            details = 'Geometric Proof Problem-Solving Steps:\n1. Read the question carefully, understand given conditions and conclusion\n2. Mark known information on the figure\n3. Analyze the question, find key points\n4. List proof steps\n5. Deduce step by step to reach the conclusion';
            break;
        case 'english-1':
            details = 'Vocabulary Memorization Techniques:\n1. Root words and affixes: Understand common roots and affixes to infer word meanings\n2. Association method: Connect words with familiar things\n3. Contextual memory: Remember words in specific scenarios\n4. Phrase learning: Memorize in phrases to improve practicality';
            break;
        case 'english-2':
            details = 'English Grammar Learning Tips:\n1. Tenses: Understand and practice the usage of 12 basic tenses\n2. Clauses: Master the structures of noun, attributive, and adverbial clauses\n3. Visualize grammar rules: Use charts or mind maps to organize grammar rules\n4. Practical application: Consolidate grammar knowledge through reading and writing';
            break;
        default:
            details = 'No detailed information available';
    }
    alert(details);
}

function toggleFavorite(tipId) {
    // Add favorite functionality logic here, such as saving to localStorage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.includes(tipId)) {
        favorites = favorites.filter(id => id !== tipId);
        alert(`Removed study tip from favorites: ${tipId}`);
    } else {
        favorites.push(tipId);
        alert(`Added study tip to favorites: ${tipId}`);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
}