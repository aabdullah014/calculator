next_num = 0
current_num = 0
display_value = 0
operation = ""

btn = document.querySelectorAll(".button");
display = document.getElementById("answer");
for(i = 0; i<btn.length; i++){
    // Aesthetic button color changes on mousedown and mouseup
    btn[i].addEventListener("mousedown", function onClick(event){ event.target.style.backgroundColor = "#A0A0F0"})
    btn[i].addEventListener("mouseup", function onClick(event){ event.target.style.backgroundColor = "#FAFFE2"})

    // 
    btn[i].addEventListener("click", function onClick(event){
        if(event.target.innerHTML != "+" && event.target.innerHTML != "-" && event.target.innerHTML != "*" && event.target.innerHTML != "/" ){
            display.innerHTML = event.target.innerHTML;
            if(event.target.innerHTML == "="){
                res = operate(operation, current_num, next_num);
                display.innerHTML = res
            } else if(event.target.innerHTML == "C"){
                next_num = 0
                current_num = 0
                display.innerHTML = 0
                operation = ""
                console.log(current_num)
                console.log(next_num)
                console.log(operation)
            } else if(current_num != 0){
                next_num = event.target.innerHTML;
            }
            else{current_num = event.target.innerHTML}
        }else {operation = event.target.innerHTML}

    })
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

function operate(operation, n1, n2){
    num1 = Number(n1)
    num2 = Number(n2)
    if(operation == "+"){
        return add(num1, num2)
    } else if(operation == "-"){
        return subtract(num1, num2)
    } else if(operation == "*"){
        return multiply(num1, num2)
    }else if(operation == "/"){
        return divide(num1, num2)
    } else {display.innerHTML = display_value}
    
}

