var appData = {};
let yuorBudget = Number(prompt ("Ваш бюджет на місяць?")),
    timeData = prompt ("Ввеліть дату в форматі YYYY-MM-DD"),
    answer1 = prompt ("Введіть обов'язкову статтю витрат цього місяця"),
    answer2 = Number(prompt ("Скільки коштуватиме?")),
    optionalExpenses = {},
    income = 0,
    savings = false;

let expenses = {
    [answer1]: answer2
    };


appData = {
    yuorBudget: yuorBudget,
    timeData: timeData,
    expenses: expenses,
    optionalExpenses: optionalExpenses,
    income: income,
    savings: savings 
};

let allExpenses = 0;

for (let expense of Object.values(expenses)) {
    allExpenses+=expense;
  }
  let oneDayBudget = (yuorBudget+income-allExpenses)/30;

alert("Щоб досягти цілі, ваш бюджет на 1 день - "+
        parseInt(oneDayBudget)+" грн");

console.log(appData);
