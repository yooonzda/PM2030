$(document).ready(function(){
    var divs = $('div');
    divs.css("color","#f00");

    $('#btnCheck').click(sayHello);

    $('#btnAddBorder').click(addBorder);

    $('#btnTextChange').click(textChange);
});

// *css -> background-image: url('../images/logo.png');
// *js -> 'images/logo.png'

function sayHello(){
    alert('hello');
}

function addBorder(){
    $(this).css('border','3px solid #ff0');
    $(this).parent().css('border','10px solid #f00');
    // $('#panel').css('border','5px solid #000');
}

function textChange(){
    // $('#panel02').css('font-size','20px');
    // $('#panel02').css('font-weight','700');
    // $('#panel02').css('color','#ff0');
    $('#panel02').css({
        'font-size' : '20px',
        'font-weight' : '700',
        'color' : '#ff0'
    });
}
// * css 속성을 여러개 바꿔야 할때