

// 2 lesson ===============================
'use strict'

// const userAge = prompt("Enter your age")

// if (userAge >= 18) {
//     console.log('Welcome to our site');
// } 
// else if (userAge >=25){    console.log("You are still young");
// }
//   else if (userAge >=45){    console.log("You are renesance man");
// }  
// else {
//     console.log("Do homework");
// }



// const userAge = prompt("Enter your age")

// if (userAge >= 45) {
//     console.log('You are renesance man ');
// } 
// else if (userAge >=25){    console.log("You are still young");
// }
//   else if (userAge >=18){    console.log("Welcome to our site");
// }  
// else {
//     console.log("Do homework");
// }


// const carType = prompt("Enter car type")

// if (carType === 'audi') {
//     console.log("good choise");
// } else if (carType === 'bmw') {
//     console.log("audi is better");
// }else if (carType === 'ford') {
//     console.log("bad choise");
// }

// switch (carType) {
    
//     case "audi":
//         console.log("good choise");
//         break;
    
//     case 'bmw':
//         console.log("audi is better");
//         break;

//     case 'ford':
//         console.log("bad choise");
//         break;
    
//     default:
//         console.log("luck in love");
// }


// Тернарные операторы ================================================

const carType = prompt("Enter car type")
// const isCarExpensive = carType === 'bugatti' ? true : false;
const isCarExpensive = carType === 'bugatti';


let myMoney;
if (isCarExpensive) {
    myMoney = 0;
}
else {
    myMoney = 5000;
}

// упрощенно
// const myMoney = isCarExpensive ? 0 : 5000;
    
console.log(`my money ${myMoney}`);
