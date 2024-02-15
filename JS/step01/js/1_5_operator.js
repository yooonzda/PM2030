/* 
    ? 기본사칙(숫자열) 연산자
    * +, -, *, / 나누기, % 나머지, () 우선
    * 10 / 3 = 3
    * 10 % 3 = 1
    * 20 % 6 = 2

    ? 문자열 연산자
    * + 문자열을 합친다.

    ? 복합 대입 연산자		
    * += 기존 변수의 값에 값을 더함 , -= 기존 변수의 값에 값을 뺌
    * *= 기존 변수의 값에 값을 곱함 , /= 기존 변수의 값에 값을 나눔
    * %= 기존 변수의 값에 나머지를 구함. 	
    * ex> a = a + 10; 
    *     a += 10;

    ? 증감 연산자
    * ++ 1씩 증가, -- 1씩 감소
    * number++ / number--

    ? 조건비교 연산자 ->  boolean
    * >= 좌변이 우변보다 크거나 같다.
    * <= 우변이 좌변보다 크거나 같다.
    * > 좌변이 크다.
    * < 우변이 크다.
    
    * == 좌변과 우변이 같다.
    * a = true ; 
    * a == true ; true or false
    
    * != 좌변과 우변이 다르다.
    * 1 == true; true (두개의 값이 같으면 true / 다르면 false)
    * 1 != true; false (두개의 값이 다르면 true / 같으면 false)
    * ex> 
    if(273 < 52){
        alert('273은 52보다 작습니다.');
    }
    if(273 > 52){
        alert('273은 52보다 큽니다.');
    }
    참이면 실행하고 거짓이면 무시한다.

    ? 논리 연산자
    * &&(곱) 그리고, ||(합, verticalBar) 이거나
    * 조건을 판별할때 사용 
    * 합집합 과 교집합
    * and / or 
    ? 논리 부정연산자
    * !
    * ex>
    alert(!true); -> false
    alert(!false); -> true
    참을 거짓으로, 거짓을 참으로 바꾼다.

    ? 접근 연산자
    * .
*/

function numbOP1(){
    var a = 10;
    var result = a + 20 + 30;
    console.log(result);
}

function numbOP2(){
    var a = 50;
    var b = 20;
    var result = a*b%3; 
    console.log(result);
}

function numberPlusAfter(){
    var number = 10;
    alert(++number); // 11 -> 10
    alert(++number); // 12 -> 11
    alert(++number); // 13 -> 12
    console.log(number);
}

function numberPlusTodo(){
    var number = 10;
    alert(number++); //? 출력 : 10/ 현재변수 : 11- 서술. 
    alert(--number); //? 출력 : 10/ 현재변수 : 10- 서술. 
    alert(++number); //? 출력 : 11/ 현재변수 : 11- 서술. 
    alert(number--); //? 출력 : 11/ 현재변수 : 10- 서술. 
    console.log(number); //? 출력 : 10/ 현재변수 : 10- 서술. / 최종 number - 10. 
}

function compareOperator1(){
    var a = 20;
    var b = 30;
    var result = a>b; // false
    console.log('20 > 30 = ' + result );
}

function compareOperator2(){
    var a = 10;
    var b = 20;
    var result = a!=b; // true
    console.log('10 != 20 ?' + result );
}

function logicalOperator1(){
    var a = '남자';
    var b = '웹디자이너';
    var result = (a=='여자')&&(b=='웹디자이너'); // 여자이면서 웹디자이너 여야 true 가 나옴
    console.log('result = '+ result);
}

// * ID 와 PW 가 일치 할 때만 true
function logicalOperator2(){
    var userID = 'yoon';
    var userPW = '1234';
    var result = (a=='yoon')&&(b=='1234');
    console.log('로그인' + result);
}

function operatorEX(){
    var list = '';
    list += '<ul>';
    list += '   <li>hello</li>';
    list += '   <li>JS</li>';
    list += '</ul>';
    document.body.innerHTML = list;
}

function commpareOperator3(){
    console.log(30>20 && 20>10); // * true , 1 -> 실제 : false
    // * 30>20 을 먼저 판단 -> true
    // * true > 10 을 판단 -> false
    // * 30>20>10
}