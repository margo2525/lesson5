
// Запитати змінну у користувача. Якщо змінна дорівнює числу 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

const userInput = Number(prompt('Введіть  число'));

if (userInput == 10) {
	console.log('Вірно');
} else {
	console.log('Невірно');
}

//	2) Напишіть дві перевірки.
//	Якщо змінна test дорівнює true, виведіть 'Вірно', інакше виведіть 'Невірно'.
//	Якщо змінна test не дорівнює true, то виведіть 'Вірно', інакше виведіть 'Невірно'
//	Перевірте роботу скрипта при test, що дорівнює true, false.

const test = true;
if (test == true) {
	console.log('Вірно');
} else {
	console.log('Невірно');
}
const test = false;
if (test == false) {
	console.log('Вірно');
} else {
	console.log('Невірно');
}

//	3) Обчислити суму покупки з урахуванням знижки. Знижка 3% надається, якщо сума покупки більша за 500 грн., а знижка 5% - якщо сума покупки більша за 800 грн. Суму покупки вводить користувач.

const userInput = Number(prompt('Введіть суму покупки '));

if (userInput > 800) {
	console.log('Знижка 5%');
} else {
	if (userInput > 500) {
		console.log('Знижка 3%');
	} else {
		if (userInput) {
			console.log('Дякую за покупку');
		}
	}

}
//	/************************************************* *****************/
//	Таски на цикли.
//	Кожне завдання вирішити циклами while, for.

//	1) Виведення чисел від 25 до 0 (порядок зменшення).

let number = 25;
const numberlast = 0;

while (number >= numberlast) {
	console.log(number--);
}


//	2) Виведення чисел від 10 до 50, які кратні 5.

const limit = 50;
for (let i = 10; i <= 50; i += 5) {
	console.log(i);
}

//	3) Знайти суму чисел в межах від 1 до 100.

let sum = 0;
for (let i = 1; i <= 100; i++) {
	sum = sum + i;
}
console.log('sum :>> ', sum);

//Створіть дві змінні a та b. Виведіть у консоль результат їх множення.
//const a = 3;
//const b = 2;
//const t = a * b;
//console.log('t :>> ', t);
// Створіть дві змінні c та d. Виведіть у консоль результат ділення першого на друге.
//const c = 10;
//const d = 2;
//const w = c / d;
//console.log('w :>> ', w);


// Створіть дві змінні e та f. Виведіть у консоль результат додавання.
//const e = 1;
//const f = 2;
//const k = e + f;
//console.log('k :>> ', k);

// Визначте змінні зі значеннями 11, true, "java script", "100" і виведіть їх в консоль
//const Number = 11;
//const g = true;
//const Name = "java script";
//const nut = "100";

//console.log('Number :>> ', Number);
//console.log('g :>> ', g);
//console.log('Name :>> ', Name);
//console.log('nut :>> ', nut);


// Переробіть наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --
//num = num + 11;
//const num = 1;
//num += 11;
//console.log('num :>> ', num);
//num = num – 11;
const num = 1;
num -= 11;
console.log('num :>> ', num);
//num = num * 11;
//const num = 1;
//num *= 11;
//console.log('num :>> ', num);
//num = num / 11;
//const num = 1;
//num /= 11;
//console. log('num :>> ', num);
//num = num ++ 1;
//const num = 1;
//num += 1;
//console.log('num :>> ', num);
//num = num –- 1;
//const num = 1;
//num -= 1;
//console.log('num :>> ', num);

//Таски на prompt (вводити з допомогою prompt, виводити з допомогою alert):

//1) Запитати число у користувача, піднести його до квадрату і вивести результат.
//const inputValue = number(prompt('Введіть число:'));
//const alert = inputValue ** 2;
//console.log('alert :>> ', alert);




//2) Вивести середнє арифметичне двох чисел. Числа запитувати у користувача.
//const a = +prompt('input value');
//const b = number(prompt('input value'));
//const result = (a + b) / 2;
//console.log('You summ is ', result);


//3) Перевести кількість хвилин на секунди та вивести результат. Число хвилин запитувати у користувача.
//const a = number(prompt('input value'));
//const result = a * 60;
//console.log('You summ is ', result);



//4) Створіть змінну greeting зі значенням 'Hello,' і оголосіть змінну userName . Запитайте ім'я користувача та внесіть це значення у змінну userName. Виведіть повідомлення з привітанням, наприклад, 'Hello, Vasya!'. (згадайте про конкатенацію)
const userName = (prompt('input value'));
const greeting = "Hello " + userName + " )!";
console.log('greeting :>> ', greeting);

