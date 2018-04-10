function Operation(sign){
    if(sign === '+' || sign === '-' || sign === '*' || sign === '/'){
        $("input#operation").val(sign);
    }
    else if(sign === 'OK'){
        if(calc() == $("input#personResult").val()){
            $("h1#result").text("RIGHT!");
            $("h1#result").css("color", "#00AA00");
        }
        else{
            $("h1#result").text("WRONG!");
            $("h1#result").css("color", "#AA0000");
        }
    }
    else if(sign === '?'){
       $("input#programmResult").val(calc());
    }
}

function calc(){
    let result = 0;
    if($("input#operation").val() === '+'){
        result = (parseInt($("input#first").val(),8) + parseInt($("input#second").val(),8)).toString(8);
    }
    else if($("input#operation").val() === '-'){
        result = (parseInt($("input#first").val(),8) - parseInt($("input#second").val(),8)).toString(8);
    }
    else if($("input#operation").val() === '*'){
        result = (parseInt($("input#first").val(),8) * parseInt($("input#second").val(),8)).toString(8);
    }
    else if($("input#operation").val() === '/'){
        if(parseInt($("input#second").val(),8) == 0){
            result = 0;
        }
        else{
            result = (parseInt($("input#first").val(),8) / parseInt($("input#second").val(),8)).toString(8);
        }
    }
    return result;
}

function  SetInterval(min, max){
    $("input#first").val(Math.round(Math.random() * (max - min) + min,0).toString(8));
    $("input#second").val(Math.round(Math.random() * (max - min) + min,0).toString(8));
}

function NumPressed(number){
    $("input#personResult").val($("input#personResult").val()+number);
}

function Clear() {
    $("input#personResult").val('');
}