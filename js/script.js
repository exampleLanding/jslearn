// унарный + перед строкой или выражение превращает строку или выражение в число
// let num = 50;

/* switch (num) {
    case num < 49: // Если переменная нам меньше 49, то выполняется условие ниже. 
        console.log("Wrong");
        break;
    case num > 100:
        console.log("Too much");
        break;
    case num > 80:
        console.log("A bit more");
        break;
    case 50:
        console.log("Right!");
        break;
    default: // выполняется когда ни одно из условий не выполнено
        console.log("Something went wrong");
        break;
}

for (let i = 0; i < 9; i++) {
    if (i == 7) {
        continue; // если i = 7 то оно его пропустит и будет дальше выводить числа
    }
    console.log(i);
}


// let calc = (a,b) => a + b;

// let str = "test";
// console.log(str.length);

//let twlv = "12.2";
//console.log(Math.round(twlv));

// let twlv = "12.2px";
// console.log(parseInt(twlv));
// console.log(parseFloat(twlv));

/* let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

options.bool = false;
options.colors = {
    background: "#000"
};

delete options.bool;

for (let key in options) {
    console.log("Свойство " + key + " имеет значение " + options[key]);
};
console.log(Object.keys(options).length); */

/* let arr = [1, 2, 3, 4, 5];

arr.forEach(function(item, index, massive) { // 1 аргумент - это элемент массива, 2 аргумент - это его индекс в массиве(номер), 3 аргумент - это сам массив
    console.log('позиция ' + index + ': ' + item + ' (содержится в масссиве: ' + massive + ')');
}); */

// let ans = prompt("", "");
//     arr = [];
// arr = ans.split(",");
// console.log(arr);

// let arr = [1,15,4],
//     i = arr.sort(cN);

// function cN(a,b) {
//     return a-b;
// }
// console.log(arr);

// object oriented

// let solder = {
//     health: 400,
//     armour: 100
// }

// let john = {
//     health: 100
// };

// john.__proto__ = solder;

// console.log(john);
// console.log(john.armour);

// for (let key in appData) {
//     console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
// } */

// !!!!!!!!!!!! ДОМ !!!!!!!!!!!!

// let div = document.createElement('div'),
//     div1 = document.querySelectorAll('.first'),
//     wrapper = document.querySelector('.wrapper'),
//     btn = document.querySelector('.btn');
    
// // document.body.appendChild(div);
// // wrapper.appendChild(div);

// document.body.insertBefore(div, wrapper);
// wrapper.removeChild(div1[4]);

// document.body.replaceChild(div, btn);
// div.textContent = "hi";

// let btn1 = document.querySelectorAll('.btn1');
// // btn1.addEventListener('mouseenter', function(e) {
// //     console.log('Произошло событие: ' + e.type
// //     + ' на элементе' + ' ' + e.target);
// // });

// btn1.forEach(function(item) {
//     item.addEventListener('click', function() {
//         console.log('fuck!');
//     });
// });

// !!!!!!!! Регулярные выражения !!!!!!!!!!

    // new RegExp('pattern', 'flags')
    // /pattern/
    // let ans = prompt('Ваше имя');

    // let reg = /n/gi;

    // i флаг говорит что независимо от регистра найти букву n 

    // g флаг говорит что ищет все буквы n тоесть глобально

    // console.log(ans.search(reg));  метод серч ищет букву n в ответе от пользователя и выводит позицию данной буквы 
    
    // console.log(ans.match(reg));  метод матч также выводит позицию но в виде массива

    // console.log(reg.test(ans)); // возваритит true или false в зависимости от того есть ли буква n в ответе

    // \d - искать цифры \D - не искать цифры
    // \w - искать буквы \W - не искать буквы
    // \s - найти пробелы \S - не искать пробелы

    // let pass = prompt('Введите пароль');

    // console.log(pass.replace(/./g, "*")); // . означает поменять все символы и g поменять глобально тоесть все заменить на *
    // alert("12-12-12".replace(/-/g, "lol"));

    // let ans = prompt('Ваше число');

    // let reg = /\d/g;

    // console.log(ans.match(reg));

    // let str = 'my name is R2D2';

    // чтобы найти * $ / и так далее в паттерне вначале нужно поставить \ перед символом который нужно найти

    // console.log(str.match(/\w\d\w\d/i));

// !!!!!!!!!!!!!!! Интервалы, анимация !!!!!!!!!!!!!!!

//  let timerId = setTimeout(sayHello, 3000);
//  clearTimeout(timerId);

// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);

//  function sayHello() {
//      console.log('hello');
//  }

// let timerId = setTimeout(function log() {
//     console.log('hello');
//     setTimeout(log, 2000);
// }); Рекурсивный вызов функции. Тоесть если бы программа работала по времени дольше чем установленный интервал то он бы подождал пока она завершиться и только потом будет отсчитывать время

// let btnWrapp = document.querySelector('.btn-wrp');

// Делегирование

// btnWrapp.addEventListener('click', function(event) {
//     if (event.target && event.target.tagName == 'BUTTON') {
//         console.log('hello');
//     }
// });

// let btnWrapp = document.querySelector('.btn-wrp');

// btnWrapp.addEventListener('click', function(event) {
//     if (event.target && event.target.matches('button.class1')) {
//         console.log('hello');
//     }
// });

// !!!!!!!!!!!! скроллы
// scrollBy(0, 200) переместит на 200 пикселей вниз при вызове
// scrollTo(0, 200) переместит на соотетствующую координату на странице
// scrollTop - значение которое содержит число едениц которые были пролистнуты относительно верха страницы
// getBoundingClientRect() - получит все координаты элемента

// !!!!!!!!!!!!!! Конструкторы и классы

// По старому стандарту

// function User(name, id) {
//     this.name = name; this ссылается на только что созданный объект
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello! ' + this.name);
//     }
// }

// User.prototype.exit = function(name) {
//     console.log('Пользователь ' + this.name + ' ушел');
// }

// let ivan = new User('Ivan', 25), Конструктор (new) - this = новый созданный объект
//     alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// По новому стандарту

// class User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }

//     hello() {
//         console.log(`Hello! ${this.name}`)
//     }

//     exit() {
//         console.log(`Пользователь ${this.name} ушел`)
//     }
// }

// let ivan = new User('Ivan', 25);
// let alex = new User('Alex', 20);
// console.log(ivan);
// console.log(alex);
// ivan.hello();
// alex.hello();

// !!!!!!!!!!!!!!!!!!!! this

// function showThis(a, b) {
//     console.log(this);

//     function sum() {
//         console.log(this); // this в функии внутри другой функции тоже будет window.
//         return a + b;
//     }

//     console.log(sum());
// }

// showThis(4, 5);
// showThis(5, 5);

// let obj = { 
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this); // this = сам объект

//         function shout() {
//             console.log(this); // this = window
//         }
//         shout();
//     }
// }
// obj.sum();

// !!!!!!!!!!!!!! bind call apply

// let user = {
//     name: 'John'
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// console.log(sayName.call(user, 'Smith')); // метод call связывает объект и функцию тем самым this становится объект user. Первый аргумент переменная с которой хотим связвать и второй параметр который передаем. 
// console.log(sayName.apply(user, ['Snow'])); // метод apply так же связывает но можно передать несколько параметров через массив

// function count(number) {
//     return this * number;
// }

// let double = count.bind(2); // функция bind жестко с помозью аргумента приаязывает контекст вызова. тоесть делает this равным двум
// console.log(double(3)); // аргумент переменной this это передаваемый параметр в параметр функции count которая привязана с помощью bind
// console.log(double(10));

// let btn = document.querySelector('.class2');

// btn.addEventListener('click', function() {
//     console.log(this); // в дом контекстом вызова тот элемент на котором применяется событие
//     this.style.background = 'yellow';
// });

// интерполяция

// let name = 'Ivan',
//     age = 30,
//     mail = 'ex@mail.ru';
// document.write(`Пользлвателю ${name} ${age} лет. Его почтовый адрес: ${mail}`);

// let

// function makeArray() {
//     var items = [];

//     for (let i = 0; i < 10; i++) { 
//         var item = function() {
//             console.log(i);
//         };
//         items.push(item);
//     }

//     return items;
// }

// var arr = makeArray();

// arr[1](); // если использовать var то будет 10 а если let то 1 3 7 тоесть она возвратит все числа от 0 до 10 и можно выбрать любое
// arr[3]();
// arr[7]();

// стрелочные функции

// let func = () => {
//     console.log(this);
// };

// func();

// let obj = {
//     number: 5,
//     sayNumber: function() {
//         let say = () => {
//             console.log(this); // у стрелочной функции нет контекста вызова поэтому она его берет у родителя и получается не виндоу и объект obj
//         }
//         say();
//     }
// }

// obj.sayNumber();

// параметры по умолчанию

// function calcOrDouble(number, basis = 2) { // тоже самое но новый стандарт
//     // basis = basis || 2; // если воторой аргумент не передан то по умолчанию ставится 2 (старый стандарт ES5)

//     console.log(number*basis);
// }
// calcOrDouble(3,5);
// calcOrDouble(6);

// классы

// class Options {
    //     constructor(height, width, bg, fontSize, textAlign) {
    //         this.height = height;
    //         this.width = width;
    //         this.bg = bg;
    //         this.fontSize = fontSize;
    //         this.textAlign = textAlign;
    //     }
    
    //     createDiv() {
    //         let elem = document.createElement('div');
    //         document.body.appendChild(elem);
    //         let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
    //         elem.style.cssText = param; // Свойство cssText позволяет задать CSS стили массово одной строкой. При этом все содержимое атрибута style перезаписывается.
    //     }
    // }
    
    // const item = new Options(300, 350, "red", 14, "center");
    
    // item.createDiv();

// class Rectangle {
//     constructor(height, width = 20) {
//         this.height = height;
//         this.width = width;
//     }
//     calcArea() {
//         return this.height * this.width;
//     }
// }

// const square = new Rectangle(10);

// console.log(square.calcArea());

// Spread-операторы

// let video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook']; // ... - оператор, который разбивает массив на элементы которые находятся в нем

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// let numbers = [2, 5, 7];
// log(...numbers);

// !!!!!!!!!!!!!!!!!!!!!!! JSON

// let options = {
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font: {
//         size: '16px',
//         color: '#fff'
//     }
// };

// console.log(JSON.parse(JSON.stringify(options))); // чтобы отправить объект на сервер нужно его преобразовать в формат JSON с помощью метода stringify. С помощью метода parse формат объекта JSON преобразуется в обычный джаваскриптовый объект

// !!!!!!!!!!!!!!!! AJAX

// let inputRub = document.getElementById('rub'),
//     inputUsd = document.getElementById('usd');

// inputRub.addEventListener('input', () => {
//     let request = new XMLHttpRequest();

//     // request.open(method, url, async, login, pass); method бывает 2 типов - GET и POST. Гет получает данные с сервера и пост отправляет данные на сервер. url - путь к серверу(это может быть локальный файл или облачный). async отвечает за асинхронность запроса по умолчанию true(если поставить false то пользователь не сможет взаимодействовать со страницей пока не ответит сервер). login, pass - логин и пароль для доступа к серверу или файлу 

//     request.open('GET', 'js/current.json');

//     // http запрос востоит из заголовков и тела. Тело у запросов бывает тогда, когда мы берем с клиентской части информацию и отправляем на сервер

//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // настройка http запросов. контент - формат JSON в кодировке utf-8

//     // request.send(body); // body передается тогда когда получаем инфу от клиента

//     request.send();

//     // status (статус сервера (код) например 404, 203 итд)
//     // statusText статус сервера - текстовый ответ
//     // responseText / response - сам ответ сервера
//     // readyState - текущее состояние запроса

//     request.addEventListener('readystatechange', function() { // readystatechange отслеживает все изменения состояния запроса. если важен просто ответ положиетльный или отрицательынй без подробностей о можно использовать load

//         if (request.readyState === 4 && request.status == 200) {
//             let data = JSON.parse(request.response);

//             inputUsd.value = (inputRub.value / data.usd).toFixed(2); // получаем значение свойста usd после того как спарсили ответ сервера в джаваскриптовый код
//         } else {
//             inputUsd.value = "Что-то пошло не так :(";
//         }

//     });

// });

// Promise

// let drink = 1;

// function shoot(arrow, headshot, fail) {
//     console.log('Вы сделали выстрел..');

//     setTimeout(function() {
//         Math.random() > .5 ? headshot({}) : fail("Вы промахнулись"); 
//     }, 3000)
// };

// function win() {
//     console.log('Вы победили!');
//     (drink == 1) ? buyBeer() : giveMoney();
// }

// function buyBeer() {
//     console.log('Вам купили пиво!');
// }

// function giveMoney() {
//     console.log('Вам заплатили!');
// }

// function loose() {
//     console.log('Вы проиграли!');
// }

// shoot({}, 
//         function(mark) {
//             console.log('Вы попали в цель!');
//             win(mark, buyBeer, giveMoney);
//         },
//         function(miss) {
//             console.error(miss);
//             loose();
//         }
// )

// let drink = 1;

// function shoot(arrow) {
//     console.log('Вы сделали выстрел..');

//     let promise = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             Math.random() > .5 ? resolve({}) : reject("Вы промахнулись"); 
//         }, 3000)
//     });

//     return promise;

// };

// function win() {
//     console.log('Вы победили!');
//     (drink == 1) ? buyBeer() : giveMoney();
// }

// function buyBeer() {
//     console.log('Вам купили пиво!');
// }

// function giveMoney() {
//     console.log('Вам заплатили!');
// }

// function loose() {
//     console.log('Вы проиграли!');
// }

// shoot({})
//         .then(mark => console.log('Вы попали в цель!'))
//         .then(win)
//         .catch(loose)

// Конвертер валют на Promise


// let inputRub = document.getElementById('rub'),
//     inputUsd = document.getElementById('usd');

// inputRub.addEventListener('input', () => {

//     function catchData() {

//         return new Promise(function(resolve, reject){
//             let request = new XMLHttpRequest();
//             request.open("GET", "js/current.json");
        
//             request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//             request.send();
        
//             request.onload = function() {
//                 if(request.readyState === 4) {
//                         if(request.status == 200) {
//                             resolve(this.response)
//                         }
//                         else {
//                             reject();
                        
//                         }
//                 }
//             }
//         });
//     };

//     catchData()
//     .then(response => {
//         console.log(response);
//         let data = JSON.parse(response);
//         inputUsd.value = inputRub.value / data.usd;
//     })
//     .then(() => console.log(5000))
//     .catch(() => inputUsd.value = "Что-то пошло не так")


// });

// local storage

// localStorage.setItem("number", 1); // создает "ключ", значение в application

// console.log(localStorage.getItem("number")); // получить значение ключа number

// localStorage.removeItem("number"); // удалить ключ и значение

// localStorage.clear(); // очистить все хранилище


// // программа которая проверяет оставил ли пользователь галочку при регестрации и если да то при следующим заходе она автоматически будет стоять в отмеченном положении
// // let checkbox = document.getElementById('rememberMe');

// // if (localStorage.getItem("isChecked") === "true") {
// //     checkbox.checked = true;
// // }

// // checkbox.addEventListener('click', function() {
// //     localStorage.setItem("isChecked", true);
// // });

// let person = {
//     name: 'Alex',
//     age: 25,
//     tech: ['mobile', 'laptop']
// }

// let serializedPerson = JSON.stringify(person);
// localStorage.setItem("Alex", serializedPerson);

// try/catch

// let json = '{"id":2}'

// try {
//     let user = JSON.parse(json);
//     console.log(user);

//     if (!user.name) {
//         throw new Error("В этих данных нет имени"); // создаем свою ошибку
//     }
// } catch(error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// } finally {
//     console.log('executed always'); // всегда выполняется по дефолту
// }

// jQuery

// $(document).ready(function() {
//     $('.list-item:first').hover(function() {
//         $(this).toggleClass('active'); // при наведении мышки на 1 кнопку добавляется класс active а при убирании убирается
//     });

//     //eq()-указать конкретный номер элемента с данным классом
//     //even - получить четный элемент
//     //odd - нечетный

//     $('.list-item:eq(1)').on('click', function() {
//         $('.image:even').fadeToggle('slow');
//     });

//     $('.list-item:eq(3)').on('click', function() {
//         $('.image:odd').animate(
//             {
//                 opacity: 'toggle', // toggle - при 1 клике появляется, при 2 - исчезает
//                 height: 'toggle'
//             }, 500
//         );
//     });
    
// });

// $(document).ready(function() {

//     $('.main_btna, .main_btn, a[href="#sheldure"]').click(function() {
//         $('.overlay').fadeIn(1000);
//         $('.modal').slideDown(1000);
//     });

//     $('.close').click(function() {
//         $('.modal').slideUp(1000);
//         $('.overlay').fadeOut(1000);
//     });

// });

// инкапсуляция

// function User(name, age) {
//     this.name = name;
//     // this.age = age;
//     let userAge = age; // использование инкапсуляции. теперь нельзя получить и изменить эту переменную извне

//     this.say = function() {
//         console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`)
//     }

//     this.getAge = function() {
//         return userAge;
//     }

//     this.setAge = function(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age; // поменять значение переменной userAge
//         } else {
//             console.log('Недопустимое значение');
//         }
//     }
// }

// let ivan = new User('Ivan', 25);

// // console.log(ivan.age);
// // console.log(ivan.userAge);

// console.log(ivan.getAge());
// ivan.setAge(30);
// console.log(ivan.getAge());
// ivan.say();

// модули

// 1 способ

// let number = 1;

// (function() {
//     let number = 2;
//     console.log(number);

//     return console.log(number + 3);
// }()); // анонимная самовызвающаяся функция. У нее создается своя собственная область видимости. Модуль - функциональное выражение

// console.log(number);

// //2 способ

// let user = (function() {
//     let privat = function() {
//         console.log('privated');
//     }

//     return {
//         sayHello: function() {
//             console.log('hello');
//         }
//     }
// }());

// console.log(user);
// console.log(user.sayHello());

// // 3 способ

// let user = (function() {
//     let privat = function() {
//         console.log('privated');
//     }

//     let sayHello = function() {
//         console.log('hello');
//     }

//     return {
//         sayHello: sayHello
//     }
// }());

// console.log(user);
// console.log(user.sayHello());

function myModule() {
    this.hello = function() {
        return 'hello';
    }

    this.goodbye = function() {
        return 'goodbye';
    }
}

module.exports = myModule; // экспортируем модуль