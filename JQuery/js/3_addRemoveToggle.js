$(document).ready(function(){
    $('.menu').click(testFunction);

    toggleCheck();
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

function togglePW(){
    
}