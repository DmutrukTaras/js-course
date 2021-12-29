window.addEventListener('DOMContentLoaded',function(){
    'use strict';
    
    let deadline = '2022-01-01';

    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date());
        let sec = Math.floor((t/1000)%60),
            min = Math.floor((t/1000/60)%60),
            hour = Math.floor((t/1000/60/60)),
            timer = {
                'total':t, 
                'seconds':sec, 
                'minutes':min, 
                'hours':hour
            };

            return timer
    }

    function formatDate(t){
        for (let x in t){
            if(t[x]<10){
                t[x] = '0'+t[x];
            }
        }
        return t;
    }

    function setTimer(id, deadline){
        let timer = document.getElementById(id);
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');

        let timerInterval = setInterval(UpdateTimer, 1000);

        function UpdateTimer(){
            let time = formatDate(getTimeRemaining(deadline));
            //console.log(timer);
            hours.textContent = time.hours;
            minutes.textContent = time.minutes;
            seconds.textContent = time.seconds;

            if(time.total<0){
                clearInterval(timerInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }        
    }

    setTimer('timer', deadline);
});