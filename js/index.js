
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


