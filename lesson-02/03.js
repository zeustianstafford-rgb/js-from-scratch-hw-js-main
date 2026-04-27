/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

// your code
const score = Math.floor(Math.random() * 100) + 1;
let grade = score;
function ball(object) {
    if (object >= 0 && object <= 49) {
        return 'F';
    }
    if (object >= 50 && object <= 69) {
        return 'D';
    }

    if (object >= 70 && object <= 79) {
        return 'C';
    }

    if (object >= 80 && object <= 89) {
        return 'B';
    }
    return 'A';

}
console.log(ball(grade), score);

