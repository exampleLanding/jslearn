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

/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();
    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", '');
            let b = prompt("Во сколько обойдется?", '');
        
            if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
                && a != '' && b != '' && a.length < 50) {
                    console.log("done successfully");
                    appData.expenses[a] = b;
            } else {
                console.log ("bad result");
                i--;
            }
        
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
    
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let opt = prompt("Введите необязательную статью расходов в этом месяце", '');
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополниельный доход? (Перечислите через запятую)", '');
        if (typeof(items) != 'string' || items == '' || typeof(items) == null) {
            prompt("Что принесет дополниельный доход? (Перечислите через запятую)", '');
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }

        appData.income.forEach(function(item, i) {
            alert("Способы дополнительного заработка: " + (i+1) + " - " + item);
        });
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
} */

