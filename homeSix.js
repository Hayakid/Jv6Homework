// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
// []()
const id = document.getElementById('super_link')
console.log("first ")
console.log(id)
// Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// []()
const cardLink =document.querySelector('.card-link');
cardLink.textContent = 'ссылка';
console.log(cardLink)
// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// []()
const parents = document.querySelectorAll('.card-body')
const child =document.querySelectorAll('.card-link')

console.log('num3')
console.log(child)

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
// []()
// const datanum= document.querySelectora('#data-number');
// console.log(datanum)
// Выведите содержимое тега title в консоль.
// []()
// const five = document.querySelectorAll('data-number');
// 5.Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// []()
// const contentq = document.querySelectorAll('.card-title')
// content.appendChild(contentq);
//Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card"
//8. Удалите тег h6 на странице.


