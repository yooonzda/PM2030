/*
    ?for
    *특정구문을 정해진 횟수 만큼 반복해야 할 경우 사용하는 반복문.
    실무사용의 예
    1. 게시판의 게시글 목록 불러올 때
    2. 구글 맵, 네이버 맵 등의 정보를 출력 할 때
    3. 메뉴의 항목(관리자제어가능한) 출력 할 때
    4. 갤러리의 이미지 목록을 출력 할 때 -> css background-image
    5. os 등의 파일 탐색기의 파일 목록 출력 할 때...

    *루프
    ! 1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 
    ! 3. 참일경우 문장 실행 > 4. 종결식 실행 > 5. 2단계
*/

// * 이름을 열번 출력하는 함수 
function forLogName(){
    var userName = 'yoon';
    for (var i=1; i<11; i++){
        console.log(userName + i + '번째 이름 출력');
    }
}

function forCount(){
    for(var i=1; i<11; i++){
        console.log(i);
    }
    console.log('최종 i 값은? '+ i);
}

function forSum(){
    var result = 0;
    for(var i = 1; i<11; i++){
        result = result + i;
    }
    console.log('최종 값은? ' + result); // ! result = 55
}

function oneToTen(){
    for(var i=1; i<11; i++){
        console.log(i);
    }
    // ? 실행문이 총 몇 번 실행 되었나? 10번 실행
}

function oneToTen2(){
    for(var i=0; i<10; i++){
        console.log(i+1);
    }
}

function oneToTen3(){
    for(var i=10; i>0; i--){
        console.log(11-i);  
    }
}
function oneToTen4(){
    for(var i=20; i>10; i--){
        console.log(21-i); // todo 1 ~ 10 까지 출력
    }
}

function oneToTen5(){
    for(var i=1; i<=10; i+=2){
        console.log(i); // todo 1 ~ 10 까지 출력
        console.log(i+1);
        // ? 실행문이 총 몇 번 실행 되었나? 5번 실행
    }
}
// 1
// 2
// 3
// 4 ...
// 10


// * 다중 for문
function halfPyramid(){
    var star = ''; // * 문자열이 들어갈 변수에 "미리" 들어갈 문자형을 알려줌
    // string -> ''
    // number -> 0
    for(var i=1; i<=10; i++){
        for(var j=0; j<i; j++){
            // console.log('현재 i = ' + i + ', 현재 j = ' + j);
            star = star + '*';
        }
        star += '<br>';
    }
    document.write(star);
}

// * ' ' -> &nbsp
// ? i=1 false: 9 true: 1 false: 9
// ? false -> &nbsp
// ? ture -> *

// i loop 10 / j loop 19

function pyramid(){
    for(var i=1; i<=10; i++){
        var star = '';
        for(var j=1; j<=19; j++){
            if(j>=(10 + 1 - i) & j<=(10 - 1 + i)){
                star += '*';
            }else{
                star += ' ';
            }
            // (j>=(10 + 1 - i) & j<=(10 - 1 + i)) ? star += '*' : star+=' ';
        }
        console.log(star);
    }
}
// ? i=1 10 *
// ? i=2 9 10 11 * j >= 9 & j <= 11
// ? i=3 8 9 10 11 12 * (10 + 1 - i) & (10 - 1 + i)
// ? .. i=9 2 3 4 5 .. 13 14 15 16 17 18 *
// ? i=10 1 ~ 19 *


function favorFluit(){
    var fluitArray = ['딸기','포도','수박','사과'];
    for(var i=0; i<fluitArray.length; i++){
        console.log(fluitArray[i]);
    }
}

function reversefavorFluit(){
    var fluitArray = ['딸기','포도','수박','사과'];
    for(var i=fluitArray.length-1; i>=0; i--){
        console.log(fluitArray[i]);
    }
}
// * 가지고 있는 숫자 => array.length
// * 만들어야 하는 숫자 => 3 (array.length-1)