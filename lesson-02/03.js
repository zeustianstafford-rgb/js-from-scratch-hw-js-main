/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

// your code
const score = Math.floor(Math.random() * 100) + 1;
function ball(object) {
    if (score >= 0 && score <= 49) {
        return 'F';
    }
    if (score >= 50 && score <= 69) {
        return 'D';
    }

    if (score >= 70 && score <= 79) {
        return 'C';
    }

    if (score >= 80 && score <= 89) {
        return 'B';
    }
    return 'A';

}
let grade = ball;

console.log(ball(grade));