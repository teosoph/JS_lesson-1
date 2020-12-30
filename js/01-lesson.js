// 1 lesson ===============================
'use strict'

// Вывести алерт
const a = 5;
// alert(a);

// вывести в консоль
console.log(a);




// Посчитать количество
const dogPaw = 4
const catPaw = 4
const monkeyPaw = 2
let total = 0

const totalPaws = dogPaw + catPaw + monkeyPaw

console.log(totalPaws, '---totalPaws')


// Тип стринг
const firstName = 'John'
const secondName = "wick"

// old version
// const fullName = firstName + " " + secondName

// new version - шаблонная строка 
const fullName = `My full name: ${firstName} ${secondName}`

console.log(fullName);



// Boolean

const isAvailable = true
const hasSalary = false

const canWork = isAvailable && hasSalary
const maybeCanWork = isAvailable || hasSalary
const canNotWork = Boolean(0) && hasSalary

// falsy: 0, ' ', null, NaN, undefined

console.log(canWork);
console.log(maybeCanWork);
console.log(canNotWork);

// Константы

const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000

console.log(DAY_IN_MILLISECONDS);

// оператор typeof
console.log(typeof DAY_IN_MILLISECONDS);

// prompt example
// const userAge = prompt("Please, enter your age")
// console.log(userAge);
// console.log(+userAge);
// console.log(typeof userAge);

// const userAge1 = Number(prompt("Please, enter your age"))
// const userAge2 = Number(prompt("Please, enter your age"))
// console.log(Number(typeof userAge1, typeof userAge2));
// console.log(Number (userAge1, userAge2));
// console.log(Number(userAge1 == userAge2));

// задачка banana
const bar = 'ba' + Number('dasd') + 'a'
console.log(bar)
console.log(bar.toLocaleLowerCase())

// задачка 2
const baaz1 =     5 * '5111'
console.log(baaz1);

const baaz2 =     5 * 'a5111'
console.log(baaz2);

// Остаток от деления
const value = 10 % 2
console.log(value);

const value1 = 10 % 3
console.log(value1);

const userInput = prompt('Введите число')
if (userInput % 3 === 0) {
    alert('Красавчик')
}   else if (userInput % 5 === 0) {
    alert('а ты герой')
}   else {
    alert ("Повезет в любви")

} 
console.log(userInput);


//  типы запросов
const isComing = confirm('Please confirm hotel reservation');
console.log(isComing);

const hotelName = prompt('Please enter desired hotel name:');
console.log(hotelName);