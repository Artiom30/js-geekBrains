// Задание 1
/* 
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
 */
function showElevenNumbers() {
	// console.log('0 - is zero');
	for (let i = 0; i <= 11; i++) {
		(i > 0)
			? (i % 2 == 0)
				? console.log(`${i} - is an odd number`)
				: console.log(`${i} - is an even number`)
			: console.log('0 - is zero');
	}
}
showElevenNumbers();
