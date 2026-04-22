/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = Math.floor(Math.random()*100) + 1; // тестовое значение, можно изменять
console.log (score);
// let grade = score;
function pechkin(object) {
//   let f = (grade <= 49);
//   let D = (grade = 50 <= 69);
//   let C = (grade = 70 <= 79);
//   let B = (grade = 80 <= 89);
//   let A = (grade = 90 <= 100);
 }
while (grade <= 49) {
    console.log('Оценка F')
    if (grade <=69)
        console.log('Оценка D')
   else if(grade <= 79){
        console.log('Оценка C')
    }
    else if (grade <= 89){
        console.log('Оценка B')
    }
   else  {console.log('Оценка 100')}
}

console.log(pechkin);
//   if (grade <= 49){
//     return ('Оценка F')
//     if else (grade <= )
// }



// your code
