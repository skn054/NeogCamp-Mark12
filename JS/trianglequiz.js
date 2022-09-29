var formquiz = document.querySelector(".triangle-quiz");
var submitBtn = document.querySelector("#submit");
var quizOutput = document.querySelector("#output-quiz");
var radioGroupName = document.querySelectorAll("input[name]");

const quizAns = [
  "90°",
  "right-angle",
  "two-right-angle",
  "12,16,20",
  "equilateral-triangle",
  "85°",
  "Equilateral triangle",
  "a + b + c",
  "no",
  "45°",
];

function checkIsAnswerSelceted(name) {
  console.log("inside XYZ function", name);
  var radioGroup = document.getElementsByName(name);
  var len = radioGroup.length;
  for (var i = 0; i < len; i++) {
    if (radioGroup[i].checked) {
      return true;
    }
  }
  return false;
}

const quizName = [];
function scoreCheckHandler() {
  var score = 0;
  var index = 0;
  const formData = new FormData(formquiz);
  var uniqueRadioGroup = new Set();
  for (let i = 0; i < radioGroupName.length; i++) {
    let name = radioGroupName[i].getAttribute("name");
    uniqueRadioGroup.add(name);
  }
  let uniqueRadioGroupValues = uniqueRadioGroup.values();

  for (let i = 0; i < uniqueRadioGroup.size; i++) {
    let result = checkIsAnswerSelceted(uniqueRadioGroupValues.next().value);
    if (result) {
      continue;
    } else {
      quizOutput.innerText = "All questions are mandatory to attempt ";
      quizOutput.classList.add("output-err");
      return;
    }
  }
  for (let userAnswer of formData.values()) {
    if (userAnswer == quizAns[index]) {
      score++;
    }
    index++;
  }
  quizOutput.classList.remove("output-err");
  quizOutput.innerText = "your score is " + score + " out of " + quizAns.length;
}

submitBtn.addEventListener("click", scoreCheckHandler);
