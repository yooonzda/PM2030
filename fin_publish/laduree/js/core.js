$(document).ready(function(){
    $('header ul li input').click(activePanel);
    $('#cartHave ul li dl+input').click(activePanel);
    $('#cartHave>input:first-of-type').click(closePanel);
    $('#cartEmpty>input').click(closePanel);
    $('header div:first-of-type input[type="button"]').click(closeParent);
    $('.detailContainer ol li').click(changeData);
});

function activePanel(){
    closeFunction('[class^=panel]');

    var panelName = '';
    panelName = "#"+getData(this,'data-panelName');

    activeFunction(panelName);
}

function closePanel(){
    closeFunction('[class^=panel]');

    var panelName = '';
    panelName = "#"+getData(this,'data-panelName');
    
    closeFunction(panelName);
}

function getData(actionTag,attrName){
    var targetName = $(actionTag).attr(attrName);
    return targetName;
}

function closeParent(){
    var target = $(this).parent();
    closeFunction(target);
}

function activeFunction(target){
    $(target).addClass('active');
}

function closeFunction(target){
    $(target).removeClass('active');
}

function changeData(){
    var imageSrc = $(this).attr('data-src');
    $('.detailContainer>div:first-of-type>img').attr('src',imageSrc);
}