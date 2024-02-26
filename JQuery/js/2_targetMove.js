$(document).ready(function(){
    $('#btnMoveCircle').click(moveCircle);
});
// div(circle) -> position 으로 움직이고 있다.

function moveCircle(){
    // ? 선언부
    var circle = $('.circleWrap .circle');
    var xpos = window.prompt('0 ~ 380 사이의 숫자를 입력하세요');
    // * box width 430px / circle width 50px 
    // * 원을 상자 안에서만 움직이게 하기 위해 (430-50) 을 최대값으로 한다.
    // * prompt -> string -> number 형변환 하기

    // ? 처리
    xpos = parseInt(xpos);
    // todo 처리 조건을 완성하여 출력하기 (xpos가 0~380 일때만 출력하기)
    if(xpos>=0 && xpos<=380){
        // ? 출력
        circle.css('left',xpos);
    }else{
        alert('잘못된 수치입니다.');
    }
}