/*
    ? while
    while 반복문은 조건이 참일 경우 무한 반복한다.
    (물론 조건이 정해진다면 for문 처럼도 사용 가능하지만, 
        **********용도를 구분지어 사용하는 것이 좋다.)
    정해진 횟수만큼의 반복은 for를 사용하지만, 무한반복처리, 파일 읽고쓰기 및 
    전송(java,php...), DB데이터 출력하기.
*/

function whileCheck(){
    while(true){
        console.log(1);
    }
}

// * 비밀번호가 맞을 때까지 계속 물어보는 무한 루프
function pwCheck(){
    while(true){
        var userPW = window.prompt('비밀번호를 입력하세요');
        if(userPW == '1234'){
            alert('접속승인');
            break;
        }else{
            alert('잘못된 비밀번호 입니다.');
        }
    }
}

function whileCount(){
    var i = 1;
    while(i<=10){
        console.log(i);
        i++;
    }
    console.log('최종 i의 값은? =' + i);
}

// * 1) i++ -> i=2;
// * 2) i++ -> i=3;
// * 9) i++ -> i=10;
// * ... 10) i++ -> i=11;


// todo 1~10 까지 더해서 그 결과값을 알려주는 함수
function whileSum(){
    var i = 1;
    var result = 0;
    while(i<11){
        result = result + i;
        i++;
    }
    console.log('최종 값은? ' + result); // ! result = 55
}

// * i = 1
// * result(new) = result(before) + i;
// * i++ -> i=2;

// * i = 2
// * result(new) = result(before) + i;
// * i++ -> i=3;

// * i = 3
// * result(new) = result(before) + i;
// * i++ -> i=4;

// * i =4
// * result(new) = result(before) + i;
// * i++ -> i=5;

function whileLog(){
    var userName = 'yoon';
    var i = 1;
    while(i<11){
        console.log(userName + i + '번째 이름 출력');
        i++;
    }
}
// * console 10번의 이름 출력
// * console.log( userName + i + '번째 이름 출력');
// ? yoon 1번째 이름출력
// ? yoon 2번째 이름출력
// ? yoon 3번째 이름출력 ...
// ? yoon 10번째 이름출력