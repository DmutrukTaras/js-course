// 1     
let menuItems = document.querySelectorAll('.menu-item'),
    menuList = document.querySelector('.menu'),
    itemToChange = menuItems[1].innerHTML,
    menuLi = document.createElement("li"),                 // Create a <li> node
    menuLiText = document.createTextNode("Пятый пункт");

menuList.insertBefore(menuItems[2], menuItems[1]);
menuLi.appendChild(menuLiText);
menuLi.classList.add('menu-item');
menuList.appendChild(menuLi);

//2
document.body.style.background = 'url(../img/apple_true.jpg) center no-repeat';

//3
let newTitle = document.getElementById('title'),
    newTitleText = newTitle.innerHTML,
    titleWords = newTitleText.split('технику');

    newTitleText = titleWords[0].concat('подлинную технику',titleWords[1]);
    document.getElementById('title').textContent = newTitleText;
    
//4
let adw = document.querySelector('.adv'),
    promptNewTag = document.createElement("p"),                 // Create a <li> node
    answer = prompt ("Як ви выдноситися до техніки Apple?", ""),
    promptNewText = document.createTextNode(answer);

    adw.remove();
    promptNewTag.appendChild(promptNewText);
    document.getElementById('prompt').appendChild(promptNewTag);


