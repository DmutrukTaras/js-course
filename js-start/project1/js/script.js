window.addEventListener('DOMContentLoaded',function(){
    'use strict';
    let blockInfoHeader = document.querySelector('.info-header');
    let tabInfoHeader = document.querySelectorAll('.info-header-tab');
    let tabContant = document.querySelectorAll('.info-tabcontent');
    function hideTabContent(a){
        for( let i =a; i < tabContant.length; i++){
            tabContant[i].classList.remove('show');
            tabContant[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b){
        if (tabContant[b].classList.contains('hide')){
            tabContant[b].classList.add('show');
            tabContant[b].classList.remove('hide');
        }
    }
    blockInfoHeader.addEventListener('click',function(e){
        if (e.target && e.target.matches('.info-header-tab')){
            for(let i = 0; i < tabInfoHeader.length; i++){
                if(e.target == tabInfoHeader[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    })

});