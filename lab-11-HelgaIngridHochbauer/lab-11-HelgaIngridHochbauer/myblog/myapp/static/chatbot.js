let questions = [
    {
        question: "What is your level of knowledge in Computer Science?",
        options: {
            a: "High",
            b: "Basic"
        },
        correctAnswer: "a",
        correctResponse: "Super!",
        incorrectResponse: "Here are some ideas to help you gain a deeper understanding of CS:Instead of just reading about concepts, try to apply them in practical projects. Build simple programs, create websites, or work on coding challenges. Hands-on experience solidifies your understanding and helps you remember concepts better. There are plenty of online resources and tutorials available for free to guide you through various projects. Also,join study groups or online communities focused on computer science. Interacting with peers who are also learning can provide different perspectives, support, and motivation. You can ask questions, discuss challenging topics, and collaborate on projects together. Platforms like Reddit, Discord, and Stack Overflow have active communities where you can seek help and engage with others in the field."
        
    },
    {
        question: "Do you vand to learn some things about HTML,CSS and overall webdesign?",
        options: {
            a: "I am already profficient in this stuff, so thanks but no.",
            b: "Yes,I am eager to learn"
        },
        correctAnswer: "a",
        correctResponse: "Super!",
        incorrectResponse: "HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are the backbone of web development. HTML provides the structure and content of a webpage, while CSS controls its appearance and layout.HTML uses tags to define different elements of a webpage, such as headings, paragraphs, images, and links. These tags are enclosed in angle brackets (< >) and come in pairs, with an opening tag (<tag>) and a closing tag (</tag>). For example, <h1>...</h1> represents a top-level heading, and <p>...</p> represents a paragraph. CSS, on the other hand, is used to style HTML elements and control their visual presentation. With CSS, you can change colors, fonts, spacing, alignment, and more. CSS rules consist of selectors (which target HTML elements) and declarations (which define the style properties). For instance, the rule h1 { color: blue; } sets the color of all top-level headings to blue."
    },
    {
        question: "What about JavaScript?",
        options: {
            a: "I'm a Pro",
            b: "I'd love to learn"
        },
        correctAnswer: "a",
        correctResponse: "Super!",
        incorrectResponse: "JavaScript is a versatile programming language commonly used for web development. It adds interactivity and dynamic behavior to websites, allowing developers to create responsive user interfaces, handle user input, and manipulate webpage content in real-time. With its widespread adoption and extensive libraries and frameworks, JavaScript has become an essential skill for modern web developers, enabling them to build interactive and engaging online experiences."
    },
    {
        question: "What about Python?",
        options: {
        a: "I'm a Pythonista",
        b: "I'd like to explore"
        },
        correctAnswer: "a",
        correctResponse: "Super! Python is a powerful and versatile programming language known for its simplicity and readability. It's widely used in various fields such as web development, data analysis, artificial intelligence, scientific computing, and more. Being a Pythonista means you appreciate its elegance and enjoy leveraging its vast ecosystem of libraries and frameworks to solve diverse problems efficiently. Kudos to you!",
        incorrectResponse: "Python is a popular programming language valued for its simplicity, readability, and versatility. It's widely used in various domains, including web development, data analysis, artificial intelligence, and scientific computing. Exploring Python can open doors to a wide range of opportunities in the world of programming and technology."
        },
        
        {
        question: "What about Java?",
        options: {
        a: "I'm a Java guru",
        b: "I'm curious about it"
        },
        correctAnswer: "a",
        correctResponse: "Good! Java is a robust and widely-used programming language known for its platform independence, making it suitable for developing applications that can run on any device with a Java Virtual Machine (JVM). Being a Java guru means you're proficient in leveraging its object-oriented features, extensive libraries, and strong community support to build scalable and reliable software solutions. Keep up the great work!",
        incorrectResponse: "Java is a powerful programming language with a rich ecosystem of libraries and frameworks. It's widely used for building various types of applications, including web, mobile, enterprise, and desktop applications. Exploring Java can provide you with valuable skills and opportunities in the field of software development."
        },
        
        {
        question: "What about C++?",
        options: {
        a: "I'm a C++ wizard",
        b: "I'm interested in it"
        },
        correctAnswer: "a",
        correctResponse: "Nice,C++ is a powerful and high-performance programming language commonly used for developing system software, game engines, and performance-critical applications. Being a C++ wizard means you possess a deep understanding of its syntax, memory management, and object-oriented features, allowing you to build efficient and complex software solutions. You're truly a master of the craft!",
        incorrectResponse: "C++ is a versatile programming language widely used in industries such as game development, system programming, and performance-critical applications. Exploring C++ can provide you with valuable insights into low-level programming concepts and help you build high-performance software solutions."
        }
    // Add other questions and answers here
];

let currentQuestionIndex = 0;
let chatContainer = document.getElementById("chat-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementById("user-input");

displayQuestion();

function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let optionsHTML = Object.keys(currentQuestion.options).map(key => `${key}. ${currentQuestion.options[key]}`).join('<br>');
    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
    botResponse.innerHTML = `
        <p>${currentQuestion.question}</p>
        <p>${optionsHTML}</p>
    `;
    chatContainer.appendChild(botResponse);
}

function processUserInput() {
    let userInputValue = userInput.value.toLowerCase().trim();
    let currentQuestion = questions[currentQuestionIndex];
    if (userInputValue === currentQuestion.correctAnswer) {
        displayResponse(currentQuestion.correctResponse);
    } else {
        displayResponse(currentQuestion.incorrectResponse);
    }
    userInput.value = "";
}

function displayResponse(response) {
    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
    botResponse.textContent = response;
    chatContainer.appendChild(botResponse);
}

chatForm.addEventListener("submit", function(event) {
    event.preventDefault();
    processUserInput();
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    }
});
