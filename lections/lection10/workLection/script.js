// Функции в JSON

// Функция JSON.stringify() - преобразовывает обьект в строку

const obj = { "first_name": "John", "last_name": "Smith" };
const stringObj = JSON.stringify(obj); // В JSON - будет строка

// Функция JSON.parse()

const Data = JSON.parse(stringObj); //  В JSON Данные сформируются в обьект
