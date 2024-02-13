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
    console.log(result);
}

function forcedString(){
    var a = '30';
    var result = 1 + a + 20;
    console.log('result = '+ result + '자료형은' + typeof(result));
}