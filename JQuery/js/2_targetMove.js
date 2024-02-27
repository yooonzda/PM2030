$(document).ready(function(){
    $('#btnMoveCircle').click(moveCircle);

    $('#btnDetailMove').click(detailMoveCircle);

    keyControl();
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

function detailMoveCircle(){
    // ? 선언
    var circle = $('.circleDetail');
    var xpos = $('#xpos').val(); 
    var ypos = $('#ypos').val();

    // todo 처리
    console.log(typeof(xpos));
    // * input value 가져오면 typeof -> string
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);

    if(xpos>=0 && xpos<=380 && ypos>=0 && ypos<=380){
        // todo 출력
        circle.css({
            "left": xpos,
            "top": ypos
        });
    }else{
        alert('잘못된 값입니다.');
    }
}
// * xpos -> left
// * ypos -> top
// * x y 둘중에 하나라도 값이 조건에 맞지 않는다면 실행되지 않는다.
// ! <-> 모든 조건을 충족할 때에만 출력을 실행

function keyControl(){
    // ? 선언
    var circle = $('.circleKey');
    var range = 50;
    var currentXpos = 0;
    var currentYpos = 0;
    
    $(document).keydown(function(e){
        // console.log(e.keyCode);
        switch(e.keyCode){ 
            case 87:
                currentYpos -= range;
                break;
            case 65:
                currentXpos -= range;
                break;
            case 83:
                currentYpos += range;
                break;
            case 68:
                currentXpos += range;
                break;
        }
        // * w (up) : 87 / a (left) : 65 / s (down) : 83 / d (right) : 68
        // todo 원을 상자안에서만 움직이도록 조건 넣어주기

        // * 1. currentXpos < 0 
        if(currentXpos<0){
            currentXpos = 0;
        }
        if(currentXpos>380){
            currentXpos = 380;
        }
        if(currentYpos<0){
            currentYpos = 0;
        }
        if(currentYpos>380){
            currentYpos = 380;
        }
        // * 원이 "50씩" 움직이기 때문에 좌표값이 350 -> 400 최대값인 380을 제한값으로 정한다.
        // ? 출력
        circle.css('left',currentXpos);
        circle.css('top',currentYpos);
    });
}