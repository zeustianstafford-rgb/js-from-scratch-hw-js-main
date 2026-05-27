/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/
// const isAdmin = false
// const isVerifiedUser = true
// const hasSpecialPermission = true
// const hasTemporaryPass = false



// // your code
// const A = isAdmin || isVerifiedUser
// const B = hasSpecialPermission || hasTemporaryPass
// let isAccess = A && B
// тестовые данные (значения можно менять)

// const isAdmin = false;
// const isVerifiedUser = true;
// const hasSpecialPermission = true;
// const hasTemporaryPass = false;

// // const isAdminOrIsVerifiedUser = (isAdmin || isVerifiedUser);
// // const hasPermissonOrHasPass = (hasSpecialPermission || hasTemporaryPass);
// // const isAccess = (isAdminOrIsVerifiedUser && hasPermissonOrHasPass);

//  let isAccess
// if ((isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass)) {
//     isAccess = true
//     console.log("Доступ разрешен!")
// }
// else {
//     isAccess = false
//     console.log("Доступ запрещен!");
// }

// const isAdmin = false
// const isVerifiedUser = true
// const hasSpecialPermission = true
// const hasTemporaryPass = false



// // your code
// const A = isAdmin || isVerifiedUser
// const B = hasSpecialPermission || hasTemporaryPass
// let isAccess = A &&  B
// const isAdminOrIsVerifiedUser = (isAdmin || isVerifiedUser);
// const hasPermissonOrHasPass = (hasSpecialPermission || hasTemporaryPass);
// const isAccess = (isAdminOrIsVerifiedUser && hasPermissonOrHasPass);
// const isVerifiedUser = false
// const hasSpecialPermission = true
// const hasTemporaryPass = false

// }
// else {
//     a("Доступ запрещен!")
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



const isAdmin = false
const isVerifiedUser = true
const hasSpecialPermission = true
const hasTemporaryPass = false

let isAccess

// your code 
// Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
// * Полученное булево значение сохраните в переменной isAccess.

// * Условия доступа:
// * - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
// * - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)

// (isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass)

if (isAdmin || isVerifiedUser && hasSpecialPermission  || hasTemporaryPass) {
    isAccess = true
    console.log('Доступ разрешен')
} else {
    console.log('Accesse denied permission')
    isAccess = false;
};