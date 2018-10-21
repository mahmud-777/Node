function addFunction(firstNumber,secondNumber){
    return firstNumber+secondNumber;

}

function subtractFunction(firstNumber,secondNumber){
    return firstNumber-secondNumber;
    
}

function divisionFunction(firstNumber,secondNumber){
    if(secondNumber == 0){
        return 0;
    }
    
    return firstNumber/secondNumber;
    
}

function multiplyFunction(firstNumber,secondNumber){
    return firstNumber*secondNumber;
    
}

module.exports={
    calculatorObj:{

        add:addFunction,
        subtraction:subtractFunction,
        division:divisionFunction,
        multiply:multiplyFunction


    }
}
