//istriangle variable stored
var angle1 = document.querySelector("#angle-1");
var angle2 = document.querySelector("#angle-2");
var angle3 = document.querySelector("#angle-3");
var angleButton = document.querySelector("#angle-check");
var angleOutput = document.querySelector(".angle-output-check");
function clearFields(){
  angle1.value = ""
  angle2.value = ""
  angle3.value = ""



}

function triangleCheckHandler() {
  console.log("inside click handler");
  var angleValue1 = angle1.value;
  var angleValue2 = angle2.value;
  var angleValue3 = angle3.value;
  var sum = 0;
  sum = parseInt(angleValue1) + parseInt(angleValue2) + parseInt(angleValue3);
  if (
    angleValue1 <= 0 ||
    angleValue2 <= 0 ||
    angleValue3 <= 0 ||
    angleValue1 == "" ||
    angleValue2 == "" ||
    angleValue3 == ""
  ) {
    angleOutput.classList.add("output-err");
    angleOutput.innerText = "Enter valid input to calculate Is a Triangle?";
  } else if (sum == 180) {
    angleOutput.classList.remove("output-err");
    angleOutput.innerText = "Yipee!! its  a triangle";
    clearFields()
  } else {
    angleOutput.classList.add("output-err");
    angleOutput.innerText = "oops!! its not an triangle";
  }
}

angleButton.addEventListener("click", triangleCheckHandler);
