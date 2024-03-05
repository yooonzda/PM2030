// ? 게임시작 버튼을 누르면 게임시작
// ? 원을 클릭하면 점수 +1
// ? 정해진 시간이 지나면 게임이 종료
// ? 게임이 종료되면 자동으로 점수 reset\

var count = 0; // ? 점수
var score = null; // ? 점수가 표시되는 공간
var circle = null; // ? target
var playState = false; // ? 게임 진행 여부
var btnStart = null; // ? 시작 버튼
var panel = null; // ? 원을 가두는 공간 
var timerID = 0; // ? 시간을 관리하는 변수

$(document).ready(function(){
    init();
    initEvent();
});

function init(){
    score = $("#score");
    circle = $("#circle");
    btnStart = $("#btn_start");
    panel = $(".panel");
}

function initEvent(){
    btnStart.click(gameStart); // ? 게임이 시작 되는 상황을 만들어주는 함수
    circle.click(scoreCount);
}

function scoreCount(){
    if(playState == true){
        count++;
        score.text(count);
    }
}

function gameStart(){
    playState = true;
    if(playState == true){
        gameEnd();
        timerID = setInterval(moveCircle,500);
    }
}

function gameEnd(){
    setTimeout(function(){
        playState = false;
        clearInterval(timerID); // *timerID 라는 "변수에서" 반복되는 함수를 불러 종료 시킨다
        alert('게임종료! 너의 점수는 '+ count + '점');
        count = 0;
        score.text(count);
    },10000);
}

function moveCircle(){
    circle.css({
        'left': Math.floor(Math.random()*(panel.width()-circle.width())),
        'top': Math.floor(Math.random()*(panel.height()-circle.height()))
    });
}
// * 원이 움직이는 방식 = position -> css 처리되어 있음
// * Math.random() = "0 ~ 1" 사이의 숫자를 랜덤으로 출력
// * 원이 panel 을 넘어가지 않아야한다. == 제한값이 존재
// * (0.xxx) * (7) = ?? 소숫점으로 출력 -> 올림 & 내림
// ! "0.xx" 를 곱했을 때 곱해지는 수를 넘을 수 없다.
// * 0 * 7 = 0
// * 1 * 7 = 7  
// ? random 함수로 숫자를 출력하고 그 숫자에 제한 값을 곱한다.
// ? Math.floor(); = 내림
// ? Math.ceil(); = 올림
// ? Math.round(); = 반올림
