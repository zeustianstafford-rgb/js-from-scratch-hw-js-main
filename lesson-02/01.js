/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
// const isAdmin = true
// const isVerifiedUser = true
// const hasSpecialPermission = true
// const hasTemporaryPass = false
const user = {
    username: 'Admin Without Permission and Pass',
    isAdmin: true,
    isVerifiedUser: true,
    hasSpecialPermission: true,
    hasTemporaryPass: false,
}
const pechkin = {
    username: 'Admin Without Permission and Pass',
    isAdmin: true,
    isVerifiedUser: true,
    hasSpecialPermission: true,
    hasTemporaryPass: false,
}


function getResours(object) {

    const notIsAdminOrIsVerifiedUser = (object.isAdmin || object.isVerifiedUser);
    const notHasPermissonOrHasPass = (object.hasSpecialPermission || object.hasTemporaryPass);
    const isAccess = (notIsAdminOrIsVerifiedUser && notHasPermissonOrHasPass);

    if (!isAccess) {
        return 'Доступ запрещен'
    }

    return 'Доступ разрешен';

}
console.log(getResours(user))
