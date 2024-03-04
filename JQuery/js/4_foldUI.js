$(document).ready(function(){
    imgAlignHori();

    imgAlignMix();
});

function imgAlignHori(){
    var img = $('.imgContainer img');
    var xpos = 0;
    // ? 선언
    
    $('.alignHori').click(function(){
        for(var i=0; i<img.length; i++){
            var image = img.eq(i);
            xpos = img.width()*i;
            // ? 처리
            image.css('left',xpos); 
        }
    });
    $('.reset').click(function(){
        // ? 처리
        img.css('left',0);
    });
}

function imgAlignMix(){
    var img = $('imgContainerMix img');
    var xpos = 0;
    var ypos = 0;

    // * x 좌표는?
    // * 0 200 400
    // * 0 200 400
    // * 0 200 400
    // * 3개를 단위로 바뀜 -> 3으로 나누었을 때의 나머지

    // * y 좌표는?
    // * 0 0 0 -> i/3 = 0.xxxx parseInt() -> 정수변환
    // * 200 200 200 -> i/3 = 1.xxxx
    // * 400 400 400 -> i/3 = 2.xxxx

    $('.alignMix').click(function(){
        for(var i=0; i<img.length; i++){
            var image = img.eq(i);
            xpos = (image.width())*(i%3);
            //* i=0 / i%3 = 0
            //* i=1 / i%3 = 1
            //* i=2 / i%3 = 2
            //* i=3 / i%3 = 0
            ypos = (image.width())*parseInt(i/3);
            image.css({
                'left': xpos,
                'top': ypos
            });
            console.log(image);
        }
    });
}

