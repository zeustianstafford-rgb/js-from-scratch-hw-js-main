// // Напишите функцию calculateAverage, которая принимает 2 числа и возвращает их среднее арифметическое

// function calculateAverage(object) {
//     let dice1 = Math.randomint;
//     let dice = Math.randomint;
// }
// console.log(calculateAverage(dice1, dice2));

let gold = 100;
let buildingName = 'Tower';
let costgold = 30;

if (gold >= costgold) {
    gold -= costgold;
    console.log(`${buildingName}: work complete!`);
} else {
    console.log(`${buildingName}:work doesnt complete!`);
}

function createBuilding(buildingName, costgold) {
    gold = 110;
    buildingName = 'castle'
    costgold = 120;
    const hasEnoughGold = gold >= costgold;
    if (!hasEnoughGold); {
        return 'castle doesnt complete!';
    }
    return 'castle complete!';
}
console.log(createBuilding(buildingName, costgold));

function increaseResource(currentAmount, increment = 10) {
    return currentAmount + increment
}
 
// Вызов функции без второго параметра
// gold = increaseResource(gold)
// console.log('New amount of gold: ' + gold) // New amount of gold: 80
 
// Вызов функции с параметром
gold = increaseResource(gold, 100)
console.log('New amount of gold: ' + gold) // New amount of gold: 180