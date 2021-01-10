let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = +prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
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
    savings: false,
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце");
            b = prompt("Во сколько обойдется?");
    
        if ((typeof (a)) === "string" && typeof (a) != null && typeof (b) != null &&
            a != "" && b != "" && a.length < 50) {
            console.log("done")
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}
chooseExpenses();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let question = prompt("Статья необязательных расходов?");

        console.log("done_opt")
        appData.optionalExpenses[1] = question;
    }
}
chooseOptExpenses();

function detectDayBudget() {
    appData.dayBudget = (appData.budget / 30).toFixed(1);
    alert("Дневной бюджет " + appData.dayBudget);
}
detectDayBudget();

function detectLevel() {
    if (appData.dayBudget < 200) {
        console.log("Минимальный уровень достатка")
    } else if (appData.dayBudget > 200 && appData.dayBudget < 2000) {
        console.log("Средний уровень достатка")
    } else if (appData.dayBudget > 2000) {
        console.log("Высокий уровень достатка")
    } else {
        console.log("Произошла ошибка")
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с депозита: " +appData.monthIncome);
    }
}
checkSavings();