let slideIndex = 1,
    sliderItems = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

    function showSlides(index){
        if (index<1){slideIndex=sliderItems.length;}
        if (index>sliderItems.length){slideIndex=1;}
        sliderItems.forEach(function(sliderItem){
            sliderItem.style.display = 'none';
        });
        dots.forEach(function(dot){
            dot.classList.remove('dot-active');
        });
        sliderItems[slideIndex-1].style.display = 'block';
        dots[slideIndex-1].classList.add('dot-active');
    }
    function plusSlide(n=1){
        showSlides(slideIndex += n);
    }
    function currentSlide(n){
        showSlides(slideIndex = n);
    }

    next.addEventListener('click', function(){
        plusSlide();
    });
    prev.addEventListener('click', function(){
        plusSlide(-1);
    });
    dotWrap.addEventListener('click', function(e){
        for (let i=0; i<dots.length+1;i++){
            if(e.target && e.target.classList.contains('dot') && e.target == dots[i-1]){
                currentSlide(i);
            }
        }
    });


    showSlides(slideIndex);
    setInterval( plusSlide, 10000);