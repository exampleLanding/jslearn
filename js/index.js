let myModule = require('./script'); // кладем в переменную то что экспортировали

let newModule = new myModule(); // в переменной модуль будет объект со всеми методами которые есть в script.js файле

console.log(newModule.hello());
console.log(newModule.goodbye());