// Завдання 4: Обчислення площі та об'єму

// Завдання 4.1
// Створіть змінну radius і присвойте їй числове значення радіуса кола.
// Обчисліть площу кола за формулою π * radius^2 і виведіть результат.
// Округліть кожне отримане значення до 2 значень після крапки

const radiusOfCircle = 12;
const formulaAreaOfCircle = Math.PI * Math.pow(radiusOfCircle, 2);

console.log('Area of circle -> ' + formulaAreaOfCircle.toFixed(2));

// Завдання 4.2
// Створіть змінну length і присвойте їй числове значення довжини прямокутника.
// Створіть змінну width і присвойте їй числове значення ширини прямокутника.
// Обчисліть площу прямокутника за формулою length * width і виведіть результат.
// Округліть кожне отримане значення до 2 значень після крапки

const length = 30;
const width = 15;
const formulaAreaOfRectangle = length * width;

console.log('Area of rectangle -> ' + formulaAreaOfRectangle.toFixed(2));

// Завдання 4.3
// Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
// Створіть змінну height і присвойте їй числове значення висоти циліндра.
// Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
// Округліть кожне отримане значення до 2 значень після крапки

const radiusOfCylinder = 10;
const height = 24;
const formulaVolumeOfCylinder = Math.PI * Math.pow(radiusOfCylinder, 2) * height;

console.log('Volume of cylinder -> ' + formulaVolumeOfCylinder.toFixed(2));
