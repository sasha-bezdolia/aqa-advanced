// Завдання 1

// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

function calcTriangleArea(width, height) {
	return width * height;
}

const calcTriangleArea2 = function (width, height) {
	return width * height;
};

const calcTriangleArea3 = (width, height) => width * height;

console.log(calcTriangleArea(5, 10));
console.log(calcTriangleArea2(5, 10));
console.log(calcTriangleArea3(5, 10));
