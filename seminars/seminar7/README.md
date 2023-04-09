# Что на уроке

# Задание 1

    	<div class="block">

    	</div>

1.  Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили

        	Цвет текста синий
        	Рамка сплошная черная
        	Цвет фона #f8f8f8
        	Внутренний отступ 16px

2.  Добавить данному блоку класс item_1 (использовать setAttribute)

# Задание 2

Дан код

    	<div class="elem">
    		<img src="photo.png" alt="photo">
    		<div class="content">
    			<h2 class="heading">Lorem, ipsum dolor.</h2>
    			<p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
    		</div>
    	</div>

Необходимо с помощью querySelector найти параграф с классом text

1. Вывести в консоль соседний элемент h2
2. Вывести в консоль родительский элемент content
3. Вывести в консоль картинку
4. Вывести в консоль родительский элемент elem

# Задание 3

    	<div class="item">
    		<div class="elem">
    			<div class="info">
    				<h2 class="subtitle">Lorem, ipsum dolor.</h2>
    			</div>
    		</div>
    	</div>

С помощью querySelector найти элемент h2 и вывести в консоль всех его родителей

# Задание 4

    	<form action="#">
    		<input type="text">
    		<button class="btn">Отправить</button>
    	</form>

1. Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
2. Цвет у рамки сделать красным
