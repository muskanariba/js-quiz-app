var questions = [
    {
        question: "What is the correct syntax to declare a variable in JavaScript?",
        opt1: "var variableName",
        opt2: "let variableName;",
        opt3: "const variableName;",
        opt4: "all of above;",
        ans: "all of above;"
    },
    {
        question: "Which of the following is used to create an object in JavaScript?",
        opt1: "{};",
        opt2: "[];",
        opt3: "();",
        opt4: "<>;",
        ans: "{};"
    },
    {
        question: "Which method is used to parse a string to an integer in JavaScript?",
        opt1: "parseInt();",
        opt2: "pasreintegar();",
        opt3: "parsefloat",
        opt4: "parsefloatintegar",
        ans: "parseInt();"
    },
    {
        question: "What is the scope of a variable declared with let?",
        opt1: "Global scope;",
        opt2: "Function scope;",
        opt3: "Block scope",
        opt4: "Object scope",
        ans: "Block scope;"
    },
    {
        question: "In a method of an object, what does this refer to?",
        opt1: "The global object;",
        opt2: " The method itself;",
        opt3: "The object the method is called on;",
        opt4: "The parent object;",
        ans: "The object the method is called on;"
    },
    {
        question: "What is the scope of a variable declared with let?",
        opt1: "Global scope;",
        opt2: "Function scope;",
        opt3: "Block scope;",
        opt4: "Object scope;",
        ans: "Block scope;"
    },
    {
        question: "What does str.trim() do?",
        opt1: "Removes whitespace from both ends of a string;",
        opt2: "Removes all whitespace;",
        opt3: "Converts a string to lowercase;",
        opt4: "Converts a string to uppercase;",
        ans: "Removes whitespace from both ends of a string;"
    },
    {
        question: "How do you convert a string to a number?",
        opt1: "Number(string);",
        opt2: "string.toNumber();",
        opt3: "parseInt(string);",
        opt4: "string.convert();",
        ans: "string.toNumber();"
    },
    {
        question: "How do you embed expressions in a template literal?",
        opt1: "${expression};",
        opt2: "[[expression]];",
        opt3: "Block scope;",
        opt4: "<<expression>>;",
        ans: "${expression};"
    },
    {
        question: "What is the purpose of template literals in JavaScript",
        opt1: "To create multi-line strings;",
        opt2: "To embed expressions in strings;",
        opt3: " To define regular strings;",
        opt3: " To define regular strings;",
        opt4: " To define regular strings;",
        ans: " Both A and B;"
    },
];

var result = 0;
var index = 0;

function startQuiz() {
    // Hide the start button
    document.getElementById("start").style.display = "none";

    // Render the first question
    render();
}

function render() {
    // If the quiz has ended, show final result
    if (index >= questions.length) {
        var a =  `${result} / ${questions.length}`
        document.getElementById("container").innerHTML = ` <h3>Here's your final score:</h3><p>Your final score is: ${a} <br> <h4>"Best of luck!!"</h4>`;
        
        return;
    }

    var container = document.getElementById("container");

    // Render the current question and options
    container.innerHTML = `
         <h3>Qestion:</h3>
        <p class="question">${questions[index].question}</p> 
        <input type="radio" name="option" value="${questions[index].opt1}"> ${questions[index].opt1} <br><br>
        <input type="radio" name="option" value="${questions[index].opt2}"> ${questions[index].opt2} <br><br>
        <input type="radio" name="option" value="${questions[index].opt3}"> ${questions[index].opt3} <br><br>
        <input type="radio" name="option" value="${questions[index].opt4}"> ${questions[index].opt4} <br><br>
        <button onclick="nextQuestion()" class="next">Next</button>
    `;
}

function nextQuestion() {
    // Check the answer for the current question
    var selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption && selectedOption.value === questions[index].ans) {
        result++; // Increment score if the answer is correct
    }

    // Increment index to move to the next question
    index++;

    // Render the next question
    render();
}
