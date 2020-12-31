
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

const myQuestions = [
  {
    question: "The number of links in a planer mechanism with revolute joints having 10 instantaneous centers is",
    answers: {
      a: "2",
      b: "4",
      c: "3",
      d: "5"
    },
    correctAnswer: "c"
  },

  {
    question: "The crank and lever mechanism will produce",
    answers: {
      a: "Oscillating motion",
      b: "Translating motion",
      c: "Zig-zag motion",
      d: "Rotary motion"
    },
    correctAnswer: "a"
  },

  {
    question: "If crank is fixed in single slider crank chain, we get",
    answers: {
      a: "Beam engine",
      b: "Oscillating engine",
      c: "Rotary engine",
      d: "Reciprocating engine"
    },
    correctAnswer: "c"
  },
  {
    question: "The oscillating cylinder engine can be obtained by fixing",
    answers: {
      a: "Connecting rod",
      b: "Lever",
      c: "Slider",
      d: "Crank"
    },
    correctAnswer: "a"
  },
  {
    question: "Klein's construction is useful to determine",
    answers: {
      a: "crank has non-uniform angular velocity",
      b: "crank has uniform angular velocity and angular acceleration",
      c: "crank has a uniform angular velocity",
      d: "there is no such criterion"
    },
    correctAnswer: "c"
  }
];





// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
