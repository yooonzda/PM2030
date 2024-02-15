
// * 양수 음수를 구분하는 함수
// * 괄호 안에 있는 조건문이 true 일때 실행
function numberJudgment(){
    var numb = window.prompt('숫자를 입력하세요');
    
    if(numb > 0){
        console.log('양수');
    }else if(numb < 0){
        console.log('음수');
    }else{
        console.log('0 이거나 숫자가 아닙니다.');
    }
}

// todo 짝수와 홀수를 구분하는 함수
function oddOrEven(){
    var numb = 10;
    if(numb>0){
        if(numb%2==0){
            console.log('짝수');
        }else if(numb%2==1){
            console.log('홀수');
        }else{
            console.log('올바른 값을 입력하세요');
        }
    }else{
        console.log('음수');
    }
}
// * 힌트: %
// * 짝수 2 4 6 8 10 2로 나누었을 때 나머지 -> 0
// * 홀수 1 3 5 7 9 2로 나누었을 때 나머지 -> 1
// * 배열 ex> x%4 -> 0 1 2 3

// ! yoon -> 1234 -> true
// ! hour -> 5678 -> true

function userInfoCheck(){
    var userID = '';
    var userPW = '';
}