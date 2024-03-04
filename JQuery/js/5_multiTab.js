$(document).ready(function(){
    tabMenu('#tabMenuDepth0 li');
    tabMenu('#tabMenuDepth1 li');
    tabMenu('#tabMenuDepth2 li');
});
// function tabMenu(target){
//     var selectMenu = $(target);
//     $(selectMenu).click(function(){
//         $(selectMenu).removeClass('activated');
//         $(this).addClass('activated');
//     }); 
// }

// * 1. tabNumb -> ul li 전체
function tabMenu(tabNumb){
    var selectMenu = null;
    $(tabNumb).click(function(){
        if(selectMenu != null){
            selectMenu.removeClass('activated');
        }
        selectMenu = $(this);
        selectMenu.addClass('activated');
    });
}