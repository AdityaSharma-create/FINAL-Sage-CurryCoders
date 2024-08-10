document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    showNextQuestion();
});

let currentQuestionIndex = 0;
let selectedCounselingType = '';
const questions = {
    common: [
        {
            question: "Are you seeking career counseling or college counseling?",
            type: "radio",
            name: "counseling-type",
            options: ["Career Counseling", "College Counseling"]
        }
    ],
    career: [
        {
            question: "What is your current level of education or experience in your chosen field?",
            type: "text",
            name: "education-level"
        },
        {
            question: "What are your primary career goals? Short-term (1-2 years)?",
            type: "text",
            name: "short-term-goals"
        },
        {
            question: "What are your primary career goals? Long-term (5-10 years)?",
            type: "text",
            name: "long-term-goals"
        },
        {
            question: "What industries are you most interested in working in?",
            type: "text",
            name: "industries"
        },
        {
            question: "What values are most important to you in your career (e.g., ethics, innovation, collaboration)?",
            type: "text",
            name: "values"
        },
        {
            question: "What specific roles or job titles are you aiming for?",
            type: "text",
            name: "job-titles"
        },
        {
            question: "Are there specific companies or organizations you aspire to work for?",
            type: "text",
            name: "companies"
        }
    ],
    college: [
        {
            question: "What subjects are you most interested in?",
            type: "text",
            name: "subjects-interest"
        },
        {
            question: "What are your academic strengths and weaknesses? Strengths:",
            type: "text",
            name: "academic-strengths"
        },
        {
            question: "What are your academic strengths and weaknesses? Weaknesses:",
            type: "text",
            name: "academic-weaknesses"
        },
        {
            question: "What type of colleges are you considering (e.g., liberal arts, research universities, community colleges)?",
            type: "text",
            name: "college-type"
        },
        {
            question: "Do you have specific colleges or universities in mind?",
            type: "text",
            name: "specific-colleges"
        },
        {
            question: "What majors or fields of study are you interested in pursuing?",
            type: "text",
            name: "majors-interest"
        },
        {
            question: "What are your long-term career aspirations?",
            type: "text",
            name: "career-aspirations"
        },
        {
            question: "What kind of advice or mentorship are you seeking (e.g., academic guidance, social tips, career advice)?",
            type: "text",
            name: "advice-mentorship"
        }
    ]
};

function showNextQuestion() {
    const quizForm = document.getElementById('quiz-form');
    quizForm.innerHTML = '';

    let questionSet;
    if (selectedCounselingType === 'Career Counseling') {
        questionSet = questions.career;
    } else if (selectedCounselingType === 'College Counseling') {
        questionSet = questions.college;
    } else {
        questionSet = questions.common;
    }

    if (currentQuestionIndex < questionSet.length) {
        const questionData = questionSet[currentQuestionIndex];
        const questionElement = document.createElement('div');
        questionElement.className = 'quiz-question';

        const questionLabel = document.createElement('p');
        questionLabel.textContent = questionData.question;
        questionElement.appendChild(questionLabel);

        if (questionData.type === 'radio') {
            questionData.options.forEach(option => {
                const optionElement = document.createElement('input');
                optionElement.type = 'radio';
                optionElement.id = option.toLowerCase().replace(' ', '-');
                optionElement.name = questionData.name;
                optionElement.value = option;
                questionElement.appendChild(optionElement);

                const optionLabel = document.createElement('label');
                optionLabel.htmlFor = optionElement.id;
                optionLabel.textContent = option;
                questionElement.appendChild(optionLabel);
                questionElement.appendChild(document.createElement('br'));
            });
        } else {
            const inputElement = document.createElement('input');
            inputElement.type = questionData.type;
            inputElement.name = questionData.name;
            inputElement.required = true;
            questionElement.appendChild(inputElement);
        }

        const nextButton = document.createElement('button');
        nextButton.type = 'button';
        nextButton.textContent = 'Next';
        nextButton.onclick = () => {
            if (questionData.type === 'radio') {
                const selectedOption = document.querySelector(`input[name="${questionData.name}"]:checked`);
                if (selectedOption) {
                    selectedCounselingType = selectedOption.value;
                    currentQuestionIndex = 0;
                    showNextQuestion();
                }
            } else {
                currentQuestionIndex++;
                showNextQuestion();
            }
        };
        questionElement.appendChild(nextButton);

        quizForm.appendChild(questionElement);
    } else {
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Submit';
        quizForm.appendChild(submitButton);
    }
}
