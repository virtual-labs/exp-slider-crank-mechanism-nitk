
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
    question: "Klein construction can be used to determine acceleration of various parts when the crank is at",
    answers: {
      a: "right angles to the link of the stroke",
      b: "at 45&deg; to the line of the stroke",
      c: "outer dead center",
      d: "inner dead center",
      e: "all the above"
    },
    correctAnswer: "e"
  },

  {
    question: "The number of dead centers in a slider crank mechanism are",
    answers: {
      a: "2",
      b: "3",
      c: "4",
      d: "may be any number depending upon position of mechanism"
    },
    correctAnswer: "a"
  },
  {
    question: "The slider crank mechanism coverts rotary motion to ____",
    answers: {
      a: "Linear motion",
      b: "Rotary Motion",
      c: "Cycloidal Motion",
      d: "Parabolic motion"
    },
    correctAnswer: "a"
  },
  {
    question: "How many equations in total are formed in the process of finding out the forces on each link?",
    answers: {
      a: "3",
      b: "6",
      c: "9",
      d: "12"
    },
    correctAnswer: "b"
  },
  {
    question: "How many forces are acting on each link due to other links (exclude link 4)?",
    answers: {
      a: "2",
      b: "3",
      c: "4",
      d: "5"
    },
    correctAnswer: "a"
  },
  {
    question: "How many degrees of freedom does a slider crank mechanism have?",
    answers: {
      a: "0",
      b: "1",
      c: "2",
      d: "3"
    },
    correctAnswer: "b"
  },
  {
    question: "A slider sliding at 10 mm/s on a link is rotating at 60 rpm is subjected to corioli’s acceleration of magnitude",
    answers: {
      a: "395 mm/s<sup>2</sup>",
      b: "126 mm/s<sup>2</sup>",
      c: "100 mm/s<sup>2</sup>",
      d: "200 mm/s<sup>2</sup>"
    },
    correctAnswer: "b"
  },
  {
    question: "Consider following statements: Coriolis component of acceleration depends on<br>1. Velocity of slider<br>2. Angular velocity of the link<br>3. Acceleration of the slider<br>4. Angular acceleration of the link",
    answers: {
      a: "1 and 4 are correct",
      b: "1 and 2 are correct",
      c: "1 and 3 are correct",
      d: "2 and 4 are correct"
    },
    correctAnswer: "a"
  }

];



// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
