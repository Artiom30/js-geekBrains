//  Задание 2
/*
1.  Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.
2.  С помощью созданной вами функции выведите в консоль сумму значений этих переменных.

						let param1 = 1;
						let param2 = 2;
						let param3 = 3;

3.  Дана фукнция

					function func(num = 5) {
					console.log(num \* num);
					}

		Расскажите, каким будет результат каждого из вызовов функции.

							func(2);
							func(3);
							func();
*/

// 1
/*
function sumOfNumbers(a, b, c) {
	return a + b + c;
}
 */
/*

const a = +prompt('Input number A');
const b = +prompt('Input number B');
const c = +prompt('Input number C');

alert(sumOfNumbers(a, b, c));
 */

// 2
/*
let param1 = 1;
let param2 = 2;
let param3 = 3;
console.log(sumOfNumbers(param1, param2, param3));
 */

// 3
/* 
function func(num = 5) {   // = 5 - это defoult значение , для тех случаев когда не поступает аргументов
	console.log(num * num);
}

func(2); // 4
func(3); // 9
func(); // 25
 */