
//const agee = 18;
//console.log('age > 18 :>>', age > 18);
//console.log('age < 18 :>>', age < 18);
//console.log('age >= 18 :>>', age >= 18);
//console.log('age >= 18 :>>', age >= 18);
//console.log('age == 18 :>>', age == 18);


//const age = 18;
//const isVactinated = true;
//if (age < 18) {
//	console.log('Wellcome');
//} else {
//	if (isVactinated)
//		console.log('Wellcome');
//}else {
//	console.log('Please do to vactination');
//}
//const userInput1 = Number(prompt("Введіть перше число"));
//const userInput2 = Number(prompt("Введіть друге число"));
//if (userInput1 > userInput2) {//
//console.log("більше число = ", userInput1);
//} else if (userInput1 < userInput2) {
//	console.log("більше число = ", userInput2);
//} else if (userInput1 === userInput2) {
//console.log("Вони еквівалентні", userInput1 + ' = ' + userInput2);
//}
//const a = Number(prompt("Input number a"));
//const b = Number(prompt("Input number b"));
//if (a === b) {
//console.log("a=b");
//} else if (a > b) {
//console.log("a>b");
//} else {
//console.log("a<b");
//}
// if - розгалуження

// if (умова) {
//   гілка true;
// } else {
//   гілка false;
// }

// Булевські змінні імунуємо з is...

// const isLogged = false;

// if (isLogged) {
//   console.log('You are logged in))))');
// } else {
//   console.log('Try again(((');
// }

// Задана змінна

// const isEnoughMoney = true;

// Якщо грошей достатньо, вивести “Операцію схвалено)”
// Якщо недостатньо, то вивести “Операцію відхилено(”

// const isEnoughMoney = true;

// if (isEnoughMoney) {
//   console.log('Операцію схвалено)))');
// } else {
//   console.log('Операцію не схвалено(((');
// }

// Перевірити, чи скінченне число ввів користувач і видати відповідне повідомлення.

// const inputValue = Number(prompt('Input number')); // => 55, Infinity, NaN

// if (Number.isFinite(inputValue)) {
//   console.log('number');
// } else {
//   console.log('not a finite number');
// }

// Умовні операці

// const age = 18;

// console.log('age > 18 :>> ', age > 18);
// console.log('age < 18 :>> ', age < 18);
// console.log('age >= 18 :>> ', age >= 18);
// console.log('age <= 18 :>> ', age <= 18);

// Нестрога рівність / нерівність - ПОГАНО!
// console.log('age == 18 :>> ', age == 18);
// console.log('age == "18" :>> ', age == '18');
// console.log('age != 18 :>> ', age != 18);
// console.log('age != "18" :>> ', age != '18');

// Строга / нерівність рівність
// console.log('age === 18 :>> ', age === 18);
// console.log('age === "18" :>> ', age === '18');
// console.log('age !== 18 :>> ', age !== 18);
// console.log('age !== "18" :>> ', age !== '18'); // 18!=='18'

// Якщо користовач повнолітній, то привітати, якщо ні - то доступ заборонений

// const age = 20;

// if (age >= 18) {
//   console.log('Wellcome!');
// } else {
//   console.log('Access is denied');
// }

// Скорочена форма if

// При вході перевірити, чи користувач повнолітній
// Якщо ні - то видати попередження про обмежений доступ
// Вивести привітання

// if (умова) {
//   гілка true;
// }

// const age = 18;

// if (age < 18) {
//   console.log('Деякі функції будуть обмежені');
// }

// console.log('Вітаємо на сайті!)');

// если пользователь несовершеннолетний, то "Wellcome"
// иначе если сертификат есть, то "Wellcome"
// иначе вакцинироваться

//const age = 18;
//const isVactinated = true;

//if (age < 18) {//
// console.log('Wellcome)');
//} else {
//  if (isVactinated) {
//    console.log('Wellcome)');
//  } else {
//    console.log('Please go to vactination');
//  }
//}

// if (умова) {
//   гілка true;
// } else if (умова) {
//   гілка ;
// } else if (умова) {
//   гілка ;
// } else {
//   гілка false;
// }

//if (age < 18) {
//  console.log('Wellcome');
//} else if (isVactinated) {
//  console.log('Wellcome');
//} else {
//  console.log('Please go to vactination');
//}

// Ввести 2 числа. Вивести з них більше
// Ввести 2 числа. Вивести що вони рівні, а якщо ні, то більше з них
//  Виконати перевірку, що числа коректні

//const userInput1 = Number(prompt('Введіть перше число'));
//const userInput2 = Number(prompt('Введіть друге число'));

//if (userInput1 > userInput2) {//
//  console.log('більше число = ', userInput1);
//} else if (userInput1 < userInput2) {
//  console.log('більше число = ', userInput2);
//} else {
//  console.log('Вони еквівалентні', userInput1 + ' = ' + userInput2);
//}
//if (age < 18) {
//  console.log('Wellcome');
//} else if (isVactinated) {
//  console.log('Wellcome');
//} else {
//  console.log('Please go to vactination');
//const age = 18;
//const isVactinated = true;

//if (age < 18 || isVactinated) {
//	console.log('Wellcome');
//} else {
//	console.log('Please go to vactination');
//}
//console.group(" tebel &&")
//console.log('true && true :>> ', true && true);
//console.log('false && true :>> ', false && true);
//console.log('true && true :>> ', true && true);
//console.log('false && true :>> ', false && true);

// Вивести нагадування, якщо парне число випало на п'ятницю
//const day = 'Friday';
//const date = 15;
//if (day === 'Friday' && date % 2 === 0) {
//	console.log('Wellcome');
///} else {
//	console.log('Please go to');
//}
//console.group(" tebel &&")
//console.log('true && true :>> ', true && true);
//console.log('false && true :>> ', false && true);
//console.log('true && true :>> ', true && true);
//console.log('false && true :>> ', false && true);
//const userAge = 20;
//const userChildAge = 5;
//if (userAge >= 60 || userChildAge < 18) {
//	console.log("Znigki)");
//}
// У пользователя есть книга с pageCount страниц    5
// 1) Вывести номера страниц с 1й по последнюю      1 2 3 4 5
// 2) * Вывести четные номера страниц по последнюю  2 4

//const limit = 16;
//for (let i = 2; i <= 16; i += 2) {
//	console.log(i);
//}
