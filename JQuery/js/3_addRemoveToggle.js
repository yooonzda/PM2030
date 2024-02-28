$(document).ready(function(){
    $('.menu').click(testFunction);

    toggleCheck();

    togglePW();
    changText();
});

function testFunction(){
    $(this).text('close');
}

// * input:checkbox -> custom 불가능
// * check_box_outline_blank (현재 span의 text)
// * check_box (클릭했을 때 바꿀 text)

function toggleCheck(){
    // ? 선언
    var label = $('.label.checkLabel'); // 클릭해야하는 대상
    var target = $('.material-symbols-outlined.checkIco'); // 클릭 했을 때 변화할 대상
    var checkStatus = false; // toggle의 "상태"를 담고 있는 변수

    label.click(function(){
        checkStatus = !checkStatus;
        if(checkStatus==true){
            target.text('check_box');
        }else{
            target.text('check_box_outline_blank');
        }
    });
}

// todo 1. 눈 아이콘 바꾸기
// ? 2. input type : password -> text
function togglePW(){
    var target = $('.toggleVisible');
    var toggleInput = $('#userPW');
    var toggleStatus = false;

    target.click(function(){
        toggleStatus = !toggleStatus;
        if(toggleStatus == true){
            target.text('visibility');
            toggleInput.attr('type','text');
        }else{
            target.text('visibility_off');
            toggleInput.attr('type','password');
        }
    });

    // $('tag').attr('어떤 속성','어떤 값으로');
    // $('tag').css('어떤 속성','어떤 값으로');

}
// todo input:button 을 클릭(toggle)하면 div 의 text(before->after) 와 font-size(16px->40px)를 바꾸는 함수

function changText(){
    var target = $('.changeBtn');
    var changeDiv = $('.changeText');
    var toggleStatus = false;

    target.click(function(){
        toggleStatus = !toggleStatus;
        changeDiv.toggleClass('active');

        if(toggleStatus == true){
            changeDiv.text('after');
            // changeDiv.css('font-size','40px');
            // changeDiv.addClass('active');
        }else{
            changeDiv.text('before');
            // changeDiv.css('font-size','16px');
            // changeDiv.removeClass('active');
        }
    });
}