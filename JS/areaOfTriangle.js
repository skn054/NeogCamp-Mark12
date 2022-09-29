var base = document.querySelector("#base");
var height = document.querySelector("#height");
var areaCalculateBtn = document.querySelector("#calculateArea");
var areaOutput = document.querySelector("#area-output");


function clearFields(){
    base.value = ""
    height.value = ""
}

function calculateAreaclickHandler(){
    var baseValue = base.value;
    var heightValue = height.value;

    var area=0
    if( baseValue <= 0 || heightValue <= 0 || baseValue == '' || heightValue == '') 
    {
        areaOutput.classList.add("output-err");
        areaOutput.innerText="Enter valid inputs to calculate area of triangle";
    }
    else{
        
        area=(1/2) * baseValue * heightValue;
        areaOutput.classList.remove("output-err");
        areaOutput.innerText="Area of a triangle "+ area.toFixed(2) + " units";
    }

    clearFields()
}


areaCalculateBtn.addEventListener('click',calculateAreaclickHandler)