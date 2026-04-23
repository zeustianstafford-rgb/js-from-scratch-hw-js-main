/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
let isWinningDouble = false;


if (dice1 === dice2 && dice1 >= 3) {
  isWinningDouble = true
};
console.log(isWinningDouble, dice1, dice2)
console.log('Первый бросок: ' + dice1)
console.log('Второй бросок: ' + dice2)

if (!isWinningDouble){
  return ('Проигрышный дубль.')
}
return ('Выигрышный дубль.')
