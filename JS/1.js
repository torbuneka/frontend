/*Сокращение записи*/

let number;
number = data === true ? 2 : 3;

/*Объясните отличия*/

data = true;

data === '1' /* будет 3, так как булевое значение сравнивается со строкой */
data == '1' /* будет 2, так как происходит преобразование типов*/

/*Создание переменной */

var str = 'abcde';
console.log(str[0]);
console.log(str[1]);
console.log(str[4]);

/*Изменить значение переменной */
var name = 'Анастасия';
name = 'Максим';
console.log(name);

/*Работа с true и false*/
var isOld = confirm("есть ли вам 18?");
console.log(isOld == true ? 'да' : 'нет');

/*Первый скрипт*/
var secInHour = 60 * 60;
alert(secInHour);

/* Работаем с переменными*/

/*alert() не может быть легко подавлен в среде без отладки
console обычно красиво форматирует ваши объекты и позволяет пересекать их
операторы ведения журнала часто имеют интерактивный указатель на код, который выдал оператор ведения журнала
вы не можете просматривать более одного сообщения alert() одновременно*/

/*Первое сложение*/
var a = '15';
undefined
var b = 15;
undefined
var c = 10;
undefined
console.log(a+b+c)
VM1694: 151510 /**счет происходит слева на право, поэтому берется первый тип переменной и к ней уже преобразуются типы и идет сложение */
undefined
console.log(b+c+a);
VM1733: 2515

/*Математические операции с переменными*/
a = 10;
10
b = 2;
2
console.log(a+b)
VM1839: 12
undefined
console.log(a-b)
VM1856: 8
undefined
console.log(a*b)
VM1873: 20
undefined
console.log(a % b)
VM1894: 0
undefined
console.log(a / b)
VM1908: 5

/*Альтернативный способ объявления множественных переменных*/
Альтернативный способ объявления множественных переменных
let k = l = m = 3;
const r = o = p = 3;

let k = 3;
l = k;
m = l;

/*Присвоение значения */
var c=15;
var d = 2;
result = c+d;
console.log(result);
VM2399: 17

/*Работа с консолью */
var a = 10;
var b = 2;
var c = 5;
console.log(a+b+c);
VM2541: 17

/* Математические операции. Часть 2*/
var a = 17;
var b = 10;
var c = a - b;
var d = 7;
var result = c + d;
console.log(result);
VM2765: 14

/*Привет, мир!*/
var str = 'Привет, Мир!';
console.log(str);
VM2838: Привет, Мир!

/*Конкатенация строк*/
var str1 = 'Привет, '; var str2 = 'Мир!';
console.log(str1 + str2);
VM2891:1 Привет, Мир!

/*Интерполяция*/
var name = 'Екатерина';
console.log(`Привет, ${name}!`);
VM3009: Привет, Екатерина!

/*Мои года - моё богатство*/
var age = 24;
console.log(`Мне ${age} лет!`);
VM3070: Мне 24 лет!

/*Взаимодействие с пользователем*/
var userName = prompt('Как вас зовут?');
alert(`Ваше имя ${userName}`);

/*Число, Число, Число..*/
var num = prompt('Назовите любое число');
alert(`Квадрат этого числа ${num*num}`);

/*Уменьшение показателей :)*/
var str = 'HTML';
console.log(str.toLowerCase());
VM3484: html

/* */
/* */
/* */
/* */