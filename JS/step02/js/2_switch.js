
/*
    ?switch
    * switch는 조건식의 결과가 case에 걸리는 경우, 비교할때 사용한다.
    * ( >,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)
*/

function switchGrammar(){
    var numb = prompt('숫자를 입력하세요');
    // prompt 로 받은 값은 string
    numb = parseFloat(numb);

    switch (numb%2){
        case 0:
            alert('짝수');
            break;
        case 1:
            alert('홀수');
            break;
        default:
            alert('짝, 홀수를 구분 할 수 없습니다.');
            break;
    }
}


// * 복권
// * 1등 -> 10억 / 2등 -> 1억 / 3등 -> 5000만원 / 나머지 -> 낙첨
function lotto(){
    var numb = window.prompt('당신의 번호는?');

    switch(numb){
        case '1':
            alert('1등 당첨! 10억입니다.');
            break;
        case '2':
            alert('2등 당첨! 1억입니다.');
            break;
        case '3':
            alert('3등 당첨! 5000만원입니다.');
            break;
        default:
            alert('낙첨입니다.');
            break;
    }
}

function lottoIF(){
    var numb = window.prompt('당신의 번호는?');

    if(numb == '1'){
        console.log('1등 당첨! 10억입니다.');
    }else if(numb == '2'){
        console.log('2등 당첨! 1억입니다.');
    }else if(numb == '3'){
        console.log('3등 당첨! 5000만원입니다.');
    }else{
        console.log('낙첨입니다.');
    }
}

// * 사칙연산이 가능한 계산기
function calcuator(){
    var firstNumb = window.prompt('첫번째 숫자 입력');
    var operator = window.prompt('사칙연산 연산자 중 하나를 입력하세요 (+, -, *, /)');
    var lastNumb = window.prompt('두번째 숫자 입력');

    firstNumb = parseFloat(firstNumb);
    lastNumb = parseFloat(lastNumb);

    switch(operator){
        case '+':
            alert(firstNumb + lastNumb);
            break;
        case '-':
            alert(firstNumb - lastNumb);
            break;
        case '*':
            alert(firstNumb * lastNumb);
            break;
        case '/':
            alert(firstNumb / lastNumb);
            break;
        default:
            alert('연산자가 잘못 입력되었습니다.');
            break;
    }
}

// * WASD 를 눌렀을 때 해당 방향을 출력하는 함수
function downKey(){
    var x = '';
    document.addEventListener('keydown',function(e){
        x = 87;
        switch(x){
            case 87:
                console.log('위');
                break;
            case 65:
                console.log('왼쪽');
                break;
            case 83:
                console.log('아래');
                break;
            case 68:
                console.log('오른쪽');
                break;
        }
    });
}
// * e -> event 감지에 대한 정보를 담은 매개변수
// * W = 87 / A = 65 / S = 83 / D = 68
// * console.log('위 up');

// * 1) w 를 눌렀다.
// * 2) x 라는 변수에 87이 들어간다.
// * 3) case 87 일때 그에 맞는 출력을 한다.