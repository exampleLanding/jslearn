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

*/
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
    savings: true
};

function chooseExpenses() {
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
};

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;

        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = prompt("Введите необязательную статью расходов в этом месяце", '');
        let b = prompt("Во сколько обойдется?", '');
    
        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
            && a != '' && b != '' && a.length < 50) {
                console.log("done successfully");
                appData.optionalExpenses[a] = b;
        } else {
            console.log ("bad result");
            i--;
        }
    
    }
};

chooseOptExpenses();

// let calc = (a,b) => a + b;

// let str = "test";
// console.log(str.length);

//let twlv = "12.2";
//console.log(Math.round(twlv));

// let twlv = "12.2px";
// console.log(parseInt(twlv));
// console.log(parseFloat(twlv));