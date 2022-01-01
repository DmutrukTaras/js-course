//modal timer

let moreBtn = document.querySelector('.more'),
    modalPopup = document.querySelector('.overlay'),
    modalPopupClose = document.querySelector('.popup-close');

moreBtn.addEventListener('click', function(){
    modalPopup.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';

});

//modals tab
let tabBlock = document.querySelector('.info');

tabBlock.addEventListener('click',function(e){
    if (e.target && e.target.matches('.description-btn')){
        modalPopup.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }
});



modalPopupClose.addEventListener('click', function(){
    modalPopup.style.display = 'none';
    moreBtn.classList.remove('more-splash');
    document.body.style.overflow = '';

});