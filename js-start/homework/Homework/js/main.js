$(document).ready(function(){
    $('.main_btn').on('click', openModal);
    $('.main_btna').on('click', openModal);
    $('.main_nav>nav>ul>li:eq(1)').on('click', openModal);
    

    $('.close').on('click', closeModal);


    function openModal(){
        $('.overlay').fadeIn();
        $('.modal').animate({
            height: "show"
        },1500);
    }
    function closeModal(){
        $('.modal').animate({
            height: "hide"
        },1500);
        $('.overlay').fadeOut();
    }

});