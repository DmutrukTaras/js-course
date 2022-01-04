let massage = {
    loading: "Завантаження ...",
    success: "Дякую! Скоро ми з вами зв'яжемось",
    failure: "Щось пышло не так"
};

let form = document.querySelector('.main-form'),
    inputs = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

statusMessage.classList.add('status');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open('POST', 'http://localhost/js-course/www/js-start/project1/server.php');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    let formData = new FormData(form);

    let obj = {};
    formData.forEach(function (value, key) {
        obj[key] = value;
    });
    let jsonObj = JSON.stringify(obj);
    request.send(jsonObj);



    request.addEventListener('readystatechange', function () {
        if (request.readyState < 4) {
            statusMessage.innerHTML = `${massage.loading}`;
        } else if (request.readyState === 4 && request.status === 200) {
            statusMessage.innerHTML = `${massage.success}`;
        } else {
            statusMessage.innerHTML = `${massage.failure}`;
        }
    });

    for (let input of inputs) {
        input.value = '';
    }
});


let formContacts = document.querySelector('#form'),
    inputsContacts = formContacts.getElementsByTagName('input');

formContacts.addEventListener('submit', function (event) {
    event.preventDefault();
    formContacts.appendChild(statusMessage);


    let formData = new FormData(formContacts);
    let obj = {};
    formData.forEach(function (value, key) {
        obj[key] = value;
    });
    let jsonObj = JSON.stringify(obj);
    let server = 'http://localhost/js-course/www/js-start/project1/server.php';
    
    function postData(data,server) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('POST', server );
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send(data);

            request.addEventListener('readystatechange', function () {
                if (request.readyState < 4) {
                    resolve();
//                    statusMessage.innerHTML = `${massage.loading}`;
                } else if (request.readyState === 4 && request.status === 200) {
                    resolve();
 //                   statusMessage.innerHTML = `${massage.success}`;
                } else {
                    reject();
//                  statusMessage.innerHTML = `${massage.failure}`;
                }
            });
        });
    }

    postData(jsonObj,server)
    .then(() =>{statusMessage.innerHTML = `${massage.loading}`;console.log(massage.loading)})
    .then(() =>statusMessage.innerHTML = `${massage.success}`)
    .catch(() =>statusMessage.innerHTML = `${massage.failure}`)
    .finally(clearInput(inputsContacts));


    function clearInput(inputs) {
        for (let input of inputs) {
            input.value = '';
        }
    }

});