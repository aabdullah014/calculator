display_value = 0
current_num = 0

btn = document.querySelectorAll(".button");
display = document.getElementById("answer");
display.innerHTML= current_num
for(i = 0; i<btn.length; i++){
    btn[i].addEventListener("mousedown", function onClick(event){ event.target.style.backgroundColor = "#A0A0F0"})
    btn[i].addEventListener("click", function onClick(event){display.innerHTML = event.target.innerHTML})
    btn[i].addEventListener("mouseup", function onClick(event){ event.target.style.backgroundColor = "#FAFFE2"})
}

function updateDisplay(operation, num){
    display_value = operate(operation, display_value, num)
}



function add(...nums){
    return nums.reduce((a,b) => a+b)
}

function subtract(...nums){
    return nums.reduce((a,b) => a-b)
}

function multiply(...nums){
    return nums.reduce((a,b) => a*b)
}

function divide(...nums){
    return nums.reduce((a,b) => {
        if(b!=0){
            return a/b;
        } else {
            return "ERR"
        }
    })

}

function operate(operation, nums){
    operation(...nums)
}

