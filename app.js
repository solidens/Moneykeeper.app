"use strict";

let money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let answerItem = prompt("Введите обязательную статью расходов в этом месяце"),
    answerValue = prompt("Во сколько обойдется?");

let appData = {
    budget : +money,
    timeData : +time,
    expenses : {
        answerItem : +answerValue
    },
    optionalExpenses : {},
    income : [],
    savings : false,
};

let dayBudget = (appData.budget - appData.expenses.answerItem)/30;
    alert(dayBudget);




