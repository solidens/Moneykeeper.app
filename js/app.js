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
    chooseExpenses: function () {                                               // Ввод обязательных расходов 
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
    },
    detectDayBudget: function () {                                              // Расчет дневного бюджета
        appData.dayBudget = (appData.budget / 30).toFixed(1);
        alert("Дневной бюджет " + appData.dayBudget);
    }, 
    detectLevel: function () {                                                  // Расчет уровня достатка
        if (appData.dayBudget < 200) {
            console.log("Минимальный уровень достатка")
        } else if (appData.dayBudget > 200 && appData.dayBudget < 2000) {
            console.log("Средний уровень достатка")
        } else if (appData.dayBudget > 2000) {
            console.log("Высокий уровень достатка")
        } else {
            console.log("Произошла ошибка")
        }
    },
    checkSavings: function() {                                                  // Ввод накоплений
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с депозита: " +appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {                                            // Ввод необязательных расходов
        for (let i = 0; i < 3; i++) {
            let question = prompt("Статья необязательных расходов?");
    
            console.log("done_opt")
            appData.optionalExpenses[1] = question;
        }
    },
    chooseIncome: function() {                                                  // Ввод дополнительного дохода
        let items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)");

        if (typeof (items) === "string" && items != null && items != "") {
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то ещё?"));
        appData.income.sort();
        } else {
            console.log("Вы вводите что-то не то или вообще ничего не ввели")
        };

       appData.income.forEach (function (item, i) {
           alert("Способы доп.заработка: " + (i+1) + " — " +   item);
       });
    }
};

appData.chooseIncome();

for (const key in appData) {
    console.log("Наша программа включает в себя данные: " + " - " + key );    
    }

let startButton = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value"),
    daybudgetValue = document.getElementsByClassName("daybudget-value"),
    levelValue = document.getElementsByClassName("level-value"),
    expensesValue = document.getElementsByClassName("expenses-value"),
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value"),
    incomeValue = document.getElementsByClassName("income-value"),
    monthSavingsValue = document.getElementsByClassName("monthsavings-value"),
    yearsavingsValue = document.getElementsByClassName("yearsavings-value"),
    expensesItemInput = document.getElementsByClassName("expenses-item"),
    approveButtonExpenses = document.getElementsByTagName("button")[0],
    approveButtonOptional = document.getElementsByTagName("button")[1],
    calculateButtonBudget = document.getElementsByTagName("button")[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    chooseIncome = document.querySelector(".choose-income"),
    checkSavings = document.querySelector("#savings"),
    chooseSum = document.querySelector(".choose-sum"),
    choosePercent = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");