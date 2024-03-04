var count = 0; // ? 점수
var score = null; // ? 점수를 출력하는 공간
var circle = null; // ? click 대상 (원)
var playState = true; // ? 게임 실행 조건
var resetBtn = null; // ? 게임 리셋 버튼
// * 모든 함수에서 해당 변수들을 사용 가능
// * 어려운 경우 함수를 나누지 않고 한 개의 함수로 작성해도 무방

$(document).ready(function(){
    init(); // ? 선언함수
    scoreCount(count,score,circle,playState);
    resetBtn.click(restart);
});

function init(){
    resetBtn = $('.resetBtn');
    score = $('#score');
    circle = $('#circle');
}
function scoreCount(count,score,circle,playState){
    // ? 1.원을 눌렀을 때 count 가 증가
    circle.click(function(){
        if(playState==true){
            count++;
            score.text(count+'점');
        }
    });

    // ? 2. 시간제한하기 (5초 동안 진행되는 게임)
    setTimeout(function(){
        alert('게임종료');
        playState = false;
    },5000);
}

// ? 3. reset 시키기
function restart(){
    count = 0; // ? 점수를 0 으로 초기화
    score.text(count+'점'); // ? 초기화 된 점수를 반영
    playState = true;
    scoreCount(count,score,circle,playState);
}