const numbers = document.getElementsByName("numero");
const operations = document.getElementsByName("operacion");
const deleteNumbers = document.getElementsByName("borrar");
const deleteAll = document.getElementsByName("reiniciar");
const equal = document.getElementById("igual");
let result = document.getElementById("result");
const radioButtons = document.querySelectorAll('.toggle__wrapper input');

let op = "";
let symbol = "";
let newOp ="";
let number1 ="";
let Total = 0;

numbers.forEach(function(boton){
    boton.addEventListener("click", function(){
        if(symbol ==""){
            addNumber(boton.innerText);
        }
        else{
            addNumber2(boton.innerText);
        }
        
    })
})

operations.forEach(function(boton){
    boton.addEventListener("click", function(){
        selectOperation(boton.innerText);
    })
})



deleteNumbers.forEach(function(boton){
    boton.addEventListener("click", function(){
        clearNumber();
        setNumber();
    })
})


deleteAll.forEach(function(boton){
    boton.addEventListener("click", function(){
        clearAll();
        setNumber();
    })
})

function addNumber(num){
    op = op + num;
    setNumber();
}

function addNumber2(num){
    newOp = newOp + num;
    op = op + num;
    setNumber();
    console.log(op);
    console.log(newOp);
    console.log(number1);
}

function setNumber(){
    result.innerHTML = op;
}

function clearNumber(){
    op = op.substring(0, op.length -1);
    setNumber();
}

function clearAll(){
    op = "";
    symbol ="";
    setNumber();
    number1 = 0;
    newOp = "";
}

function selectOperation(operator){
    symbol = operator
    op = op + operator;
    setNumber();
    number1 = parseInt(op);
}

function setResult(){
    result.innerHTML = Total;
}

equal.addEventListener("click", function(){
    if(symbol == "+"){
        Total = number1 + parseInt(newOp);
        setResult();
        Total = 0;
    }else if(symbol == "-"){
        Total = number1 - parseInt(newOp);
        setResult();
        Total = 0;
    }else if(symbol == "x"){
        Total = number1 * parseInt(newOp);
        setResult();
        Total = 0;
    }else{
        Total = number1 /parseInt(newOp);
        setResult();
        Total = 0;
    }
})

for (let i = 0; i < radioButtons.length; i++){
    radioButtons[i].addEventListener('click', (event) => {
        if(document.getElementById('dos').checked){
            document.querySelector('body').classList = 'dos'
        }else if(document.getElementById('tres').checked){
            document.querySelector('body').classList = 'tres'
        }else{
            document.querySelector('body').classList = 'uno';
        }
    })
}
