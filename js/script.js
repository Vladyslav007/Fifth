let menuItems = document.getElementsByClassName('menu-item');
menuItems[0].after(menuItems[2]);
let menuItem5 = document.createElement('li');
menuItem5.classList.add('menu-item');
menuItem5.textContent = 'Пятый пункт';
menuItems[3].after(menuItem5);
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
let newTitle = document.getElementById('title');
newTitle.textContent = 'Мы продаем только подлинную технику Apple';
let advertising = document.querySelector('.adv');
advertising.remove();
let question = prompt('Как Вы относитесь к технике apple?', ''),
    answer = document.getElementById('prompt');
answer.textContent = question;