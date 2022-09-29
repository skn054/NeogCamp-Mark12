var baseInput=document.querySelector("#base-value")
var heightInput=document.querySelector("#height-value");
var calculateBtn=document.querySelector("#calculate");
var output=document.querySelector("#hypotenuse-output");


function calculateClickHandler(){
    var baseValue=baseInput.value;
    var heightValue=heightInput.value;
    var hypotenuse=0;
    console.log("base",baseValue,"height",heightValue);

    if( baseValue <=0 || heightValue <=0){
        output.classList.add("output-err");
        output.innerText="Enter valid inputs to calculate area of Hypotenuse";
    }else {
        hypotenuse=Math.sqrt((Math.pow(baseValue,2)+Math.pow(heightValue,2)));
        output.classList.remove("output-err");
        output.innerText=("The length of Hypontenuse is "+hypotenuse.toFixed(2));
    }

}






calculateBtn.addEventListener('click',calculateClickHandler)