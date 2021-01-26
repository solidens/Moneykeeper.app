let startButton = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],

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

let money, time, sumExpenses;


startButton.addEventListener("click", function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed() + " ₽";
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

approveButtonExpenses.addEventListener("click", function () {
    if (appData.budget != undefined) {
    sumExpenses = 0;

    for (let i = 0; i < expensesItemInput.length; i++) {
        let a = expensesItemInput[i].value,
            b = expensesItemInput[++i].value;

        if ((typeof (a)) === "string" && typeof (a) != null && typeof (b) != null &&
            a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
            sumExpenses += +b;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sumExpenses + " ₽";
} else {
    expensesValue.textContent = "Для начала нажми «Начать расчёт»";
}
});

approveButtonOptional.addEventListener("click", function () {
    if (appData.budget != undefined) {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let question = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = question;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
} else {
    optionalExpensesValue.textContent = "Для начала нажми «Начать расчёт»";
}
});

calculateButtonBudget.addEventListener("click", function () {

    if (appData.budget != undefined) {

        appData.dayBudget = ((appData.budget - sumExpenses) / 30).toFixed();
        dayBudgetValue.textContent = appData.dayBudget + " ₽";

        if (appData.dayBudget < 500) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.dayBudget > 501 && appData.dayBudget < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.dayBudget > 2001) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Для начала нажми «Начать расчёт»";
    }
});

chooseIncome.addEventListener("input", function () {
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener("click", function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener("input", function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.monthIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1) + " ₽";
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1) + " ₽";
    }
});

choosePercent.addEventListener("input", function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1) + " ₽";
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1) + " ₽";
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
