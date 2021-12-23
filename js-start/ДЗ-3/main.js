let yourBudget,
    timeData;
let appData = {
        yourBudget: 0,
        timeData: '',
        expenses: {},
        optionalExpenses: {},
        income: 0,
        savings: true
    };

function start(){
    yourBudget = +prompt ("Ваш бюджет на місяць?");
    timeData = prompt ("Ввеліть дату в форматі YYYY-MM-DD");

    while(isNaN(yourBudget) || yourBudget=="" || yourBudget==null){
        yourBudget = +prompt ("Ваш бюджет на місяць?");
    }
    appData.yourBudget=yourBudget;
    appData.timeData=timeData;
}

    
function chooseExpenses(){
    for (let i=1; i<3; i++){
        let answer1 = prompt ("Введіть обов'язкову статтю витрат цього місяця №"+i),
            answer2 = prompt ("Скільки коштуватиме?");
        if ((typeof(answer1))!=null && (typeof(answer2))!=null && answer1!='' && answer2!='' && answer1.length<50){
            appData.expenses[answer1]=Number(answer2);
            console.log("Done!");
        }else{
            i--;
            console.log("Wrong!");
        }
    }
}

function OptionalExpenses(){
    for (let i=1; i<4; i++){
        let answer1 = prompt ("Введіть статтю необов'язкових витрат №"+i),
            answer2 = prompt ("Скільки коштуватиме?");
        if ((typeof(answer1))!=null && (typeof(answer2))!=null && answer1!='' && answer2!='' && answer1.length<50){
            appData.optionalExpenses[answer1]=Number(answer2);
            console.log("Done!");
        }else{
            i--;
            console.log("Wrong!");
        }
    }
}    



function allExpensesCalc(){
    let allExpenses = 0;
    for (let expense of Object.values(appData.expenses)) {
        allExpenses+=expense;
      }
    let oneDayBudget = (appData.yourBudget+appData.income-allExpenses)/30;
      return oneDayBudget;
}

function detectDayBudget(){
    appData.moneyPerDay = parseInt((appData.yourBudget)/30);
    showMessageMoney(appData.moneyPerDay);
    return appData.moneyPerDay;
}

function showMessageMoney(text){
    alert("Щоденний бюджет - "+ parseInt(text)+" грн");
}

function detectLevel(money){
    switch(true){
        case money < 100:
            console.log("Мінімальний рівень достатку");
            break;
        case money < 2000:
            console.log("Середній рівень достатку");
            break;
        case money > 2000:
            console.log("Високий рівень достатку");
            break;              
        default:
            console.log("Сталась помилка");
            break;              

    }
}
function ckeckSavings(){
    if (appData.savings == true){
        let save = +prompt("Яка сума заощаджень?"),
            persent = +prompt("Під який процент?");
        
        appData.monthIncome = save/100/12*persent;
        alert("Місячний дохід - "+ parseInt(appData.monthIncome));

    }
}



start();
chooseExpenses();
OptionalExpenses();
detectDayBudget();
ckeckSavings();
detectLevel(appData.moneyPerDay);
console.log(appData);

let oneDayBudget = allExpensesCalc();
console.log("Щоб досягти цілі, ваш бюджет на 1 день - "+
parseInt(oneDayBudget)+" грн");
