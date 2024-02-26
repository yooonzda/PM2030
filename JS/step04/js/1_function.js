/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/
// * 1차
// document.write('안녕','<br>');
// document.write('안녕','<br>');
// document.write('안녕','<br>');

// * 2차
// var testContent = '안녕';
// for(var i=1; i<=3; i++){
//     document.write(testContent,'<br>');
// }

// * 3차
function textFunction(text,numb){
    var testContent = text;
    for(var i=1; i<=numb; i++){
        document.write(testContent+'<br>');
    }
}
// * 매개변수 (parameter)

// todo 숫자 두개를 "전달받아" 두개의 숫자를 더하는 함수 
function sumParam(numb1,numb2){
    var result = numb1 + numb2;
    console.log(result);
}
// * sumParam(1,2);

function sumAll(){
    var result = 0;
    for(var i=0; i<arguments.length; i++){
        result += arguments[i];
    }
    console.log(result);
}

function sumReturn(numb1, numb2){
    var result = numb1 + numb2;
    return result;
}

function sumFunction(){
    alert(sumReturn(1,2));
}


// * '숫자' '연산자' '숫자' 를 전달 받아 계산해 주는 함수
function calculator(num1,num2,op){
    var result = '';
    switch (op){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    console.log(result);
}
// * calculator(1,2,+); => 3

// * 1. calculator2(op); -> 매개변수 자리가 없지만 매개변수를 받아야한다.
function calculatorTodo1(op){
    var result = '';
    switch (op){
        case '+':
            result = arguments[1] + arguments[2];
            break;
        case '-':
            result = arguments[1] - arguments[2];
            break;
        case '*':
            result = arguments[1] * arguments[2];
            break;
        case '/':
            result = arguments[1] / arguments[2];
            break;
    }
    console.log(result);
}

// * 2. calculator3(num1,num2,op);
// * case '+':
// *        result = add(num1,num2);
function calculatorTodo2(num1,num2,op){
    var result = '';
    switch (op){
        case '+':
            result = add(num1,num2);
            break;
        case '-':
            result = sub(num1,num2);
            break;
        case '*':
            result = mul(num1,num2);
            break;
        case '/':
            result = div(num1,num2);
            break;
    }
    console.log(result);
}
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a - b;
}
function mul(a,b){
    return a * b;
}
function div(a,b){
    return a / b;
}

// * 1초 마다 매개변수 값으로 넘긴 익명함수 호출
function loopStart(){
    setInterval(function(){
        document.write('안녕');
    },1000);
}

// * 함수를 매개변수로 전달받을 수 있다.
function callFunction(otherFunction){
    for(var i=0; i<10; i++){
        otherFunction();
    }
}
// ? 실행식 -> callFunction(justFunction);

function justFunction(){
    document.write('안녕','<br>');
}

function createHello(){
    function hello(user){
        document.write(user+"'안녕'");
    }
    return hello;
}

var result = createHello();

// todo num 을 매개변수로 구구단을 출력하는 함수
function printGugudan(num){
    // var num = 5;
    for(var i=2; i<=num; i++){
        document.write(i + '단 출력','<br>');
        for(var j=1; j<=num; j++){
            document.write(i + 'X' + j + '=' + (i*j), '<br>');
        }
        document.write('<br>');
    }
}
// * i = 단 / j = 곱해지는 수
