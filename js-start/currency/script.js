let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();
    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    request.addEventListener('readystatechange', function () {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);
            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = "Что-то пошло не так!";
        }
    });
});
let json = 'current.json';

inputUsd.addEventListener('input', () => {
    function calcCurrency(json) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('GET', json);
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
            request.addEventListener('readystatechange', function () {
                if (request.readyState < 4) {} else if (request.readyState === 4 && request.status === 200) {
                    resolve(this.response);
                } else {
                    reject();
                }
            });
        });
    }
    calcCurrency(json)
        .then((response) => {
            let data = JSON.parse(response);
            inputRub.value = inputUsd.value * data.usd;
        })
        .catch(() => {
            inputRub.value = "Что-то пошло не так!";
        })
});