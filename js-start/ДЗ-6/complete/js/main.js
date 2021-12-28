'use strick';
let mainBtn = document.getElementById('start'),
	allButton = document.querySelectorAll('button'),
	divBudgetValue = document.querySelector('.budget-value'),
    divDaybudgetValue = document.querySelector('.daybudget-value'),
    divLevelValue = document.querySelector('.level-value'),
    divExpensesValue = document.querySelector('.expenses-value'),
    divOptionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    divIncomeValue = document.querySelector('.income-value'),
    divMonthSavingsValue = document.querySelector('.monthsavings-value'),
    divYearSavingsValue = document.querySelector('.yearsavings-value'),
    inputExpensesItem = document.getElementsByClassName('expenses-item'),
    buttonExpensesItem = document.getElementsByTagName('button')[0],
    buttonOptionalExpenses = document.getElementsByTagName('button')[1],
    buttonCountBudget = document.getElementsByTagName('button')[2],
    inputOptionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    ChooseIncomeText = document.querySelector('#income'),
    savingsCheckbox = document.querySelector('#savings'),
    savingsSum = document.querySelector('#sum'),
    savingsPersent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let yourBudget, timeData, appData = {};


document.addEventListener('DOMContentLoaded', function(){
	allButton.forEach(function(value){
		if(value!=mainBtn){
			value.disabled=true;
			value.style.opacity=0.33;
		}
	});
});



mainBtn.addEventListener('click',function(){
	timeData = prompt ("Ввеліть дату в форматі YYYY-MM-DD", "");
	let newtimeData = new Date(Date.parse(timeData));
	while(isNaN(newtimeData)){
		timeData = prompt ("Ввеліть дату в форматі YYYY-MM-DD", "");
		newtimeData = new Date(Date.parse(timeData));
	}
	yourBudget = +prompt ("Ваш бюджет на місяць?", "");
    while(isNaN(yourBudget) || yourBudget=="" || yourBudget==null){
        yourBudget = +prompt ("Ваш бюджет на місяць?", "");
    }
    appData.yourBudget=yourBudget;
    appData.timeData=new Date(Date.parse(timeData));
	divBudgetValue.textContent = appData.yourBudget.toFixed();
	yearValue.value = appData.timeData.getYear()+1900;
	monthValue.value = appData.timeData.getMonth()+1;
	dayValue.value = appData.timeData.getDate();

	allButton.forEach(function(value){
			value.disabled=false;
			value.style.opacity=1;
	});
});

buttonExpensesItem.addEventListener('click',function(){
	let sumExpenses = 0;
	appData.expenses = {};
	for (let i=0; i<(inputExpensesItem.length/2); i++){
		let a = inputExpensesItem[i*2].value,
			b = +inputExpensesItem[i*2+1].value;
		if ((typeof(a))!=null && (typeof(b))!=null && !isNaN(b) && a!='' && b!='' && a.length<50){
			appData.expenses[a]= b;
			sumExpenses+= b;
		}else{
			alert("Сталась помилка! Попробуйте ще раз");
			inputExpensesItem[i*2].value = '';
			inputExpensesItem[i*2+1].value = '';
		}
	}
	appData.allExpenses = sumExpenses;
	divExpensesValue.textContent = sumExpenses;
	buttonExpensesItem.textContent = "Переутвердить";
});

buttonOptionalExpenses.addEventListener('click', function(){
	appData.optionalExpenses = [];
	for (let i=0; i<inputOptionalExpensesItem.length; i++){
		let opt = inputOptionalExpensesItem[i].value;
		if ((typeof(opt))!=null && opt!=''){
			appData.optionalExpenses[i] = opt;
			divOptionalExpensesValue.textContent += appData.optionalExpenses[i] +' ';
		}
	}
});

buttonCountBudget.addEventListener('click', function(){
	if (appData.yourBudget){
		let allExpenses = 0;
		if(appData.allExpenses){
			allExpenses=appData.allExpenses;
		}
		appData.moneyPerDay = (appData.yourBudget-allExpenses)/30;
		divDaybudgetValue.textContent = appData.moneyPerDay;
		switch(true){
			case appData.moneyPerDay < 100:
				divLevelValue.textContent= "Мінімальний рівень достатку!";
				break;
			case appData.moneyPerDay < 2000:
				divLevelValue.textContent= "Середній рівень достатку!";
				break;
			case appData.moneyPerDay > 2000:
				divLevelValue.textContent= "Високий рівень достатку!";
				break;              
			default:
				divLevelValue.textContent= "Сталась помилка!";
				break;              
		}
	}else {
		divLevelValue.textContent= "Сталась помилка!";
	}
	buttonCountBudget.textContent = "Перерассчитать";
});

ChooseIncomeText.addEventListener('input',function(){
	let items = ChooseIncomeText.value;
	appData.income = items.split(', ');
	divIncomeValue.textContent = appData.income;

});

savingsCheckbox.addEventListener('click', function(){
	if(appData.savings){
		appData.savings = false;
		divYearSavingsValue.textContent = '';
		divMonthSavingsValue.textContent = '';		
	}else{
		appData.savings = true;
		savingsValue();
	}
});

savingsSum.addEventListener('input', function(){
	if(appData.savings){
		savingsValue();
	}

});

savingsPersent.addEventListener('input', function(){
	if(appData.savings){
		savingsValue();
	}
});

function savingsValue(){
	let sum = savingsSum.value,
			percent = savingsPersent.value;
		appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
		divYearSavingsValue.textContent = appData.yearIncome.toFixed(1);
		divMonthSavingsValue.textContent = appData.monthIncome.toFixed(1);
}