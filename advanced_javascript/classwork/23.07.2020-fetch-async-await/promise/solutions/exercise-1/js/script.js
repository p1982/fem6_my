/*
Напишите 4 функции: 
   1. createArrToUpperCase - эта функция переводит все слова в переданном ей в качестве аргумента массиве в нижний регистр. Если аргумент - не массив, возвращает ошибку с текстом "Not Array".
   2. sortFromLongToShort - сортирует переданный ей в качестве аргумента массив строк по принципу "большие слова - в самом начале".
   3. createNumList - Превращает массив строк в нумерованный список, и возвращает его в виде HTML-разметки.
   4. showHTML - Получает 2 аргумента:
        - HTML-разметку; 
        - ссылку н DOM-элемент;
        функциия выводит в переданный ей DOM-элемент полученную в первом аргументе HTML-разметку, не удаляя его содержимое.

    Напишите для этого цепочку then, передавая результат работы каждой функции в следующий then. В качестве элемента, в который нужно вывести список, используйте div с id="root"

*/
const rootElement = document.getElementById("root");

const arrWords = ["Мы не сеем", "Несгибаемые. Несломленные. Непокоренные.", "Услышь мой рёв", "Нам ярость", "Зима близко!", "пламя и кровь!"];

const result = createArrToUpperCase(arrWords);
result
    .then(sortFromLongToShort)
    .then(createNumList)
    .then(list => showHTML(list, rootElement))
    .catch(error => showHTML(error.message, rootElement));

function createArrToUpperCase(arr) {
    const promise = new Promise((resolve, reject)=> {
        if(Array.isArray(arr)) {
            const arrUpperCase = arr.map(item => item.toLowerCase());
            resolve(arrUpperCase);                    
        }
        else {
            const error = new Error("Not Array");
            reject(error);
        }
    });
    return promise;
}

function sortFromLongToShort(arr) {
    const sortArr = arr.sort((str1, str2) =>  str1.length < str2.length);
    return sortArr;
}

function createNumList(arr) {
    const numList = arr.map(item => `<li>${item}</li>`).join("");
    return (`<ul>${numList}</ul>`);
}

function showHTML(html, element) {
    element.insertAdjacentHTML("beforeend", html);
}