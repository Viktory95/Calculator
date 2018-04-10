var firstNumber;
var operation;

function Sqrt(){
    $("input#myText").val((Math.sqrt(parseInt($("input#myText").val(),8))).toString(8));
}    

function Pow(){
    $("input#myText").val((Math.pow(parseInt($("input#myText").val(),8),2)).toString(8));
}

function Clear(){
    $("input#myText").val('0');
    firstNumber = 0;
}

function Operation(sign){
    if(sign === '='){
        var secondNumber;
        secondNumber = parseInt($("input#myText").val(),8);
        $("input#myText").val(doOperation(operation, secondNumber).toString(8));
    }
    else{
        firstNumber = $("input#myText").val()==='-'
                        || $("input#myText").val()==='+'
                        || $("input#myText").val()==='/'
                        || $("input#myText").val()==='*' ? firstNumber : parseInt($("input#myText").val(),8);
        $("input#myText").val(sign);
        operation = sign;
    }
}

function doOperation(sing, secondNumber){
    if(sing === '+'){
        secondNumber = firstNumber + secondNumber;
    }
    else if(sing === '-'){
        secondNumber = firstNumber - secondNumber;
    }
    else if(sing === '*'){
        secondNumber = firstNumber * secondNumber;
    }
    else if(sing === '/'){
        if(secondNumber != 0){
            secondNumber = firstNumber / secondNumber;
        }
        else{
            secondNumber = 0;
        }
    }
    return secondNumber;
}

function NumPressed(number){
    $("input#myText").val($("input#myText").val()==='0' 
                        || $("input#myText").val()==='-' 
                        || $("input#myText").val()==='+'
                        || $("input#myText").val()==='/'
                        || $("input#myText").val()==='*' ? number : $("input#myText").val()+number);
}