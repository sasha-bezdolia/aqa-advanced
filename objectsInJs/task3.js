// Завдання 3

//     Створіть об'єкт car1 з такими властивостями:

//     brand: рядок, представляє марку автомобіля.
//     model: рядок, представляє модель автомобіля.
//     year: число, представляє рік випуску автомобіля.

//     Створіть об'єкт car2 з такими властивостями:

//     brand: рядок, представляє марку автомобіля.
//     model: рядок, представляє модель автомобіля.
//     owner: число, представляє рік випуску автомобіля.

//     Створіть об'єкт car3. Використайте оператор spread щоб додати всі властивості що є в car1 та car2 до об’єкту car3.
//     Виведіть об'єкт car3 в консоль.

const car1 = {
	brand: 'Subaru',
	model: 'Outback',
	year: 2022,
};

const car2 = {
	brand: 'Toyota',
	model: 'RAV-4',
	owner: 'Stepan Bandera',
};

const car3 = { ...car1, ...car2 };
console.log(car3);
