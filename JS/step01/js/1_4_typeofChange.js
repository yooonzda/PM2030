/*
    ? 형변환
    * JS - "10" + "10" = 1010 / 사람 - "10" + "10" = 20 - 이런 인식차를 해결하기위함.
    ! 암시적형변환 - js Engine이 자동으로 변환.  /  명시적 형변환 - 개발자가 직접 지정 변환.

    ? 암시적 형변환 CASE
    * 1. 숫자 + 문자 = 문자.
    * 2. 불린 + 숫자 = 숫자.
    * 3. 불린 + 문자 = 문자.
    
    ? 명시적 형변환
    * method 나 lib Core func를 이용하여 강제로 숫자 -> 문자 로 변환.
*/

function agePlus(){
    var age = window.prompt();
    // ! console.log(typeof(age));
    // * 문자 -> 숫자 
    var result = parseInt(age) + 20;
    // * parseInt 로 형변환을 하기 전에는 문자 + 숫자 -> 문자로 출력
    console.log(result);
}

// * 숫자 + 문자 -> 문자 (13020)
function forcedString(){
    var a = '30';
    var result = 1 + a + 20;
    console.log('result = '+ result + '자료형은' + typeof(result));
}

// * 숫자 + 불린 -> 숫자 (3)
function forcedNumber(){
    var a = true;
    var result = 2 + a;
    console.log(result);
}

// * 불린 + 문자 -> 문자 (true2)
function forcedString2(){
    var a = true;
    var b = '2';
    console.log(typeof(a+b));
}

// * 명시적 형변환 : 숫자 -> 문자
function stringNumber(){
    var a = 15;
    var result = String(a);
    console.log(typeof(result)+ '=' + result);
}
function stringtoNumber(){
    var a = 20;
    var result = a.toString();
    console.log(typeof(result)+ '=' + result);
}

// * 명시적 형변환 : 문자 -> 숫자
function numbString(){
    var a = '200.456';
    var result = parseInt(a) + 10;
    console.log(parseInt(a)); // * 200 parseInt() 숫자로 형변환 할 때 정수로 반환
    console.log('result = ' + result);
}
// * parseInt(value) -> 정수
// * parseFloat(value) -> 실수
// * Number(value) -> 구분 없이 형변환

// ! 변수 test 에 들어있는 숫자 100을 문자형으로 변환 (3가지)
// ! 1. 암시적 형변환
// ! 2. 전역함수 
// ! 3. 꼬리함수

function todo1(){
    var test = 100;
    var result = ;
    console.log(typeof(result) + '=' + result);
}
function todo2(){
    var test = 100;
    var result = ;
    console.log(typeof(result) + '=' + result);
}
function todo3(){
    var test = 100;
    var result = ;
    console.log(typeof(result) + '=' + result);
}

// ! 변수 test 에 들어가있는 문자형을 숫자로 형변환하여 연산이 가능하게 만들기  (2가지)
// ! 1. parse
// ! 2. Number

function todo4(){
    var test = '100.51';
    var result = test + 150 + "20";
    console.log(typeof(result) + '=' + result);
}

function todo5(){
    var test = '100.51';
    var result = test + 150 + "20";
    console.log(typeof(result) + '=' + result);
}