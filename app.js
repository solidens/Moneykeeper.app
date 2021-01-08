let money = +prompt("Ваш бюджет на месяц?", "");
time = +prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

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
};

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце");
//         b = prompt("Во сколько обойдется?");
//     i++;

//     if ((typeof (a)) === "string" && typeof (a) != null && typeof (b) != null &&
//         a != "" && b != "" && a.length < 50) {
//         console.log("done")
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
// };

// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце");
//         b = prompt("Во сколько обойдется?");
//     i++;

//     if ((typeof (a)) === "string" && typeof (a) != null && typeof (b) != null &&
//         a != "" && b != "" && a.length < 50) {
//         console.log("done")
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
// } while (i < 2);

appData.dayBudget = appData.budget / 30;

alert("Дневной бюджет " + appData.dayBudget);

if (appData.dayBudget < 200) {
    console.log("Минимальный уровень достатка")
} else if (appData.dayBudget > 200 && appData.dayBudget < 2000) {
    console.log("Средний уровень достатка")
} else if (appData.dayBudget > 2000) {
    console.log("Высокий уровень достатка")
} else {
    console.log("Произошла ошибка")
};