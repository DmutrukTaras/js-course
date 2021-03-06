window.addEventListener('DOMContentLoaded',function(){
    'use strict';
    let tabBlock = document.querySelector('.info-header');
    let tabInfo = document.querySelectorAll('.info-header-tab');
    let tabContent = document.querySelectorAll('.info-tabcontent');
    function hideTabContent(a){
        for( let i =a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);
    function showTabContent(b){
        if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.add('show');
            tabContent[b].classList.remove('hide');
        }
    }
    tabBlock.addEventListener('click',function(e){
        if (e.target && e.target.matches('.info-header-tab')){
            for(let i = 0; i < tabInfo.length; i++){
                if(e.target == tabInfo[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

});