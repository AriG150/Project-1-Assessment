//Global Variables
var resultNumber = 0; 

//DOM References 
var plusButton = document.getElementById("plus")
var minusButton = document.getElementById("minus")
var result = document.getElementById("result")
var input = document.getElementById("inputNum")



//plus button 
    //take "input" value and add that to "result"
    plusButton.addEventListener('click', function(){
        console.log("hello")
        // console.log(input.value);
        numberInput = parseFloat(input.value)
        console.log(numberInput)
        resultNumber = (numberInput + resultNumber) 
        result.textContent = resultNumber 

        if(resultNumber = 0){
            result.style.color = "black"
        } 
    })

    minusButton.addEventListener('click', function(){
        numberInput = parseFloat(input.value)
        resultNumber = (resultNumber - numberInput)
        result.textContent = resultNumber

        if (resultNumber < 0){
            result.style.color = "red";
        }
    })

