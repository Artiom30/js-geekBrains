//  Задание 1
/*
				<div id="block">
					<p>1</p>
					<p>2</p>
				</div>

1.  Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
2.  Получите ссылку на первый абзац с классом www. и вывести его в консоль

				<p class="www">text 1</p>
				<p class="www">text 2</p>
*/

// 1
const pEl = document.querySelector('#block p:first-child');
// #block p:first-child - это значит что в перемену будет записан первый дочерний <p> с элемента с id="block"
console.log(pEl);

//2 

const wwwText = document.getElementsByClassName('www'); // Создаст переменную с NodeList - а NodeList - это псевдомассив .
const pOne = wwwText[0];//  обращаться к элементам массива нужно соответственно через []
console.log(pOne);
