/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = true
const isVerifiedUser = false
const hasSpecialPermission = true
const hasTemporaryPass = false

const isAccess = (isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass);
if (isAccess) {
   console.log("Доступ разрешен!")
} else {
    console.log("Доступ запрещен!");
}
// else {
//     alert("Доступ запрещен!")
// };
// console.log(isAccess);



// const user = {
//     username: 'Admin Without Permission and Pass',
//     isAdmin: true,
//     isVerifiedUser: true,
//     hasSpecialPermission: true,
//     hasTemporaryPass: false,
// }


// const pechkin = {
//     username: 'Admin Without Permission and Pass',
//     isAdmin: false,
//     isVerifiedUser: false,
//     hasSpecialPermission: false,
//     hasTemporaryPass: false,
// }

// function getResourse(object) {

//     const isAdminOrIsVerifiedUser = (object.isAdmin || object.isVerifiedUser);
//     const hasPermissonOrHasPass = (object.hasSpecialPermission || object.hasTemporaryPass);
//     const isAccess = (isAdminOrIsVerifiedUser && hasPermissonOrHasPass);

//     if (!isAccess) {
//         return 'Доступ запрещен'
//     }

//     return 'Доступ разрешен';
// }
// console.log(getResourse(user));
// console.log(getResourse(pechkin));