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