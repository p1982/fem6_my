console.log(getInfo("Геральт"));
// console.log(getInfo("Трисс"));

/* Представьте себе, что у вас есть функция, которая получает имя персонажа и возвращает всю информацию о нем спустя 1 сек. Проблема в том, что JS - асинхронный, а значит он не ждет, пока setTimeout что-то сделает, а идет дальше, и, дойдя до конца функции, делает return. А если у функции нет явно инструкции return, то вернет она underfined. И return внутри setTimeout уже не сработает, потому что "никто его ждать не будет".
Чтобы решить такую проблему (когда нужно вернуть из функции результат операции, который может занять некоторое время) и были придуманы промисы. Promise - это объект, который получает в качестве аргумента при создании фунцию, результата выполнения которой нужно дождаться. 
*/

// function getInfo(name) {
//     setTimeout(() => {
//         const users = [{
//             age: 51,
//             name: "Геральт",
//             home: "Ривия"
//         }, {
//             age: 40,
//             name: "Лютик",
//             home: "Редания"
//         }];
//         const result = users.find(user => user.name === name);
//         if(result) {
//             return result;
//         }
//         else {
//             return false;
//         }
//     }, 1000);
// }




const user1 = getInfo("Геральт");
console.log(user1); // выведет Promise {<pending>} - промис в режиме ожидания

// then срабатывает когда Promise переходит из режима ожидания (<pending>) в режим выполнен (<fulfilled>)
user1.then(result => console.log(result)). // а это - только третьим
    catch(error => console.log(error));
  console.log("After Promise"); // это сообщение выведется в консоль вторым 
const user2 = getInfo("Трисс");
user2.then(result => console.log(result)).
    catch(error => console.log(error)); // catch же сработает когда Promise        

function getInfo(name) {
    // создаем Promise - объект, который будет дожидаться выполнения функции
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = [{
                age: 51,
                name: "Геральт",
                home: "Ривия"
            }, {
                age: 40,
                name: "Лютик",
                home: "Редания"
            }];
            const user = users.find(user => user.name === name);
            if (user) {
                resolve(user);
            } else {
                reject("Пользователь не найден");
            }
        }, 1000);

    });
    return promise; // возвращаем Promise в режиме ожидания
}
