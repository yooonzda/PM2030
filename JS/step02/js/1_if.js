
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
    var userID = window.prompt('ID를 입력하세요');
    var userPW = window.prompt('password 를 입력하세요');
    var userInfoID = ['yoon', 'hour'];
    
    if(userID == 'yoon' && userPW == '1234'){
        console.log('로그인 완료');
    }

    if(userID == 'yoon'){
        if(userPW == '1234'){
            console.log('로그인 완료');
        }else{
            console.log('비밀번호가 틀렸습니다.');
        }
    }
}

// *삼항처리
function userInfoCheck2(){
    var userID = window.prompt('사용자의 아이디');
    var userPW = window.prompt('사용자의 패스워드');

    (userID=='yoon'&&userPW=='1234')?alert('로그인 되었습니다.') : alert('ID 혹은 Password 가 틀렸습니다.');
}
// ! () ?() :();

/*
    ? 조건문
    
    실무사용의 예
    1. 로그인 시 아이디와 패스워드가 서버에 저장된 정보와 같은지 비교 후 같다면 승인, 아니라면 오류메세지를 띄운다.
    2. 게임같은 경우 자신이 공격을 했을 때 상대방을 타격 했는지 여부를 판별 할 수 있다.
    3. 경품추첨시 유저가 뽑은 번호에 따라 경품 당첨 여부를 따질 수 있다.
    4. 삭제작업 수행시 사용자가 yes를 눌렀을 때와 no 를 눌렀을 때 수행할지 말지를 결정 할 수있다.
    5. slide 같은 ui component 의 좌, 우 방향으로 최대치로 이동 하였는지 판별 할 수있다.

	if(273 < 100){
		//표현식 "273 < 100" 이 참일때 실행 = 거짓이기때문에 당연히 실행안함.
		 alert('273<100=>true');
	}
	alert('종료');
    
*/

// todo 음수를 제외한 양수에서 자릿수를 알려주는 함수
function numberCount(){
    var numb = window.prompt('숫자를 입력하세요');
    
    alert('입력하신 숫자의 자릿수는? ' + numb.length);
}
// * 1. 한자리 ~ 세자리 
// * if가 만능 X
// * string.length -> 글자의 갯수