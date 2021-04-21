/*Разбить на массив
Дана строка 'Гуляю по городу и вижу солнце'. Сделайте так, чтобы каждое слово было отдельным элементом массива.*/
var str = 'Гуляю по городу и вижу солнце';
var arr = str.split(' ');

/*Разбить на строку
Дана массив ['Гуляю','по','городу', 'и', 'вижу', 'cолнце'] Сделайте иэ этого массива строку.*/
var strin = arr.join(' ');

/*И снова консоль..*/
var a = 5;
var b = 5;
console.log(`a + b = ${a+b}`);
VM412: a + b = 10

/*Совмещаем методы и цикл
Сделайте каждую первую букву в предложении 'я тебя очень люблю и ценю' Заглавной.*/
var str = 'я тебя очень люблю и ценю';
undefined
var arr = str.split(' ');
    
undefined
for item in arr {
VM334:1 Uncaught SyntaxError: Unexpected identifier
for item in arr { item[0] = item[0].toUpperCase();}
VM396:1 Uncaught SyntaxError: Unexpected identifier
for (item in arr) { item[0] = item[0].toUpperCase();}
"5"
for (item in arr) { let itemm = item[0].toUpperCase() + item.slice(1); array.push(itemm);}
VM540:1 Uncaught ReferenceError: array is not defined
    at <anonymous>:1:72
(anonymous) @ VM540:1
var array = [];
undefined
for (item in arr) { let itemm = item[0].toUpperCase() + item.slice(1); array.push(itemm);}
6

/*Фильтр массива
Вам дан массив имен: ['Ольга', 'Никита', 'Анастасия', 'Оксана', 'Олег', 'Семён', 'Дмитрий']. Используя цикл, создайте новый массив, в котором будут имена, в которых как минимум 6 символов.*/
var array = ['Ольга', 'Никита', 'Анастасия', 'Оксана', 'Олег', 'Семён', 'Дмитрий'];
var newArr = [];
for (item in array){
    if(array[item].length >= 6) {
        newArr.push(array[item])
    }
}

/*Методы строк в цикле
Вам дан массив брендов машин: ['BMW', 'Mersedes', 'Opel', 'Mazda', 'FIAT', 'Ferarri', 'Reno']. Найдите в этом массиве только те бренды, в которых название состоит из заглавных букв и поместите их в новый массив.*/
var cars = ['BMW', 'Mersedes', 'Opel', 'Mazda', 'FIAT', 'Ferarri', 'Reno'];
var newArr = []; for (item in cars){
    if(cars[item].toUpperCase() === cars[item]) {
        newArr.push(cars[item])
    }
}

/*Объединение
Даны два массива: [10, 30, 40] и [1, 3, 12]. Объедините их вместе.*/
var a = [10, 30, 40]; 
var b = [1, 3, 12];
a.concat(b);

/*Реверс массива
Дан массив ['Саша', 'Петя', 'Оксана'], сделайте из него, изменяя исходный массив, ['Оксанa', 'Петя', 'Саша']. Решите данную задачу двумя способами.*/



/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/