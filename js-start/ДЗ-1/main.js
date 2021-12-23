var appData = {
    yuorBudget: 0,
    timeData: '',
    expenses: {},
    optionalExpenses: {},
    income: 0,
    savings: false
};
let yuorBudget = +prompt ("Ваш бюджет на місяць?"),
    timeData = prompt ("Ввеліть дату в форматі YYYY-MM-DD");

    appData.yuorBudget=yuorBudget;
    appData.timeData=timeData;
    

    for (let i=1; i<3; i++){
        let answer1 = prompt ("Введіть обов'язкову статтю витрат цього місяця"),
            answer2 = prompt ("Скільки коштуватиме?");
        if ((typeof(answer1))!=null && (typeof(answer2))!=null
        && answer1!='' && answer2!='' && answer1.length<50){
            appData.expenses[answer1]=Number(answer2);
            console.log("Done!");
        }else{
            i--;
            console.log("Wrong!");
        }
    }

let allExpenses = 0;

for (let expense of Object.values(appData.expenses)) {
    allExpenses+=expense;
  }
let oneDayBudget = (appData.yuorBudget+appData.income-allExpenses)/30;
let moneyPerDay = parseInt((appData.yuorBudget)/30);
alert("Щоб досягти цілі, ваш бюджет на 1 день - "+
        parseInt(oneDayBudget)+" грн");

alert("Щоденний бюджет - "+ parseInt(moneyPerDay)+" грн");

switch(true){
    case moneyPerDay < 100:
        console.log("Мінімальний рівень достатку");
        break;
    case moneyPerDay < 2000:
        console.log("Середній рівень достатку");
        break;
    case moneyPerDay > 2000:
        console.log("Високий рівень достатку");
        break;              
    default:
        console.log("Сталась помилка");
        break;              

}

console.log(appData);
