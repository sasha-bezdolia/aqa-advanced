const axios = require('axios');

const baseUrl = 'https://demoqa.com';
const userName = 'zorka';
const password = '123!@#qweQWE';
let userID;
let token;

describe('User creation and login', () => {
	test('User should be created', async () => {
		const response = await axios.post(
			`${baseUrl}/Account/v1/User`,
			{
				userName,
				password,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);

		userID = response.data.userID;
		expect(response.status).toEqual(201);
	});

	test('User should login successfully with valid data', async () => {
		const response = await axios.post(
			`${baseUrl}/Account/v1/Login`,
			{
				userName,
				password,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);

		expect(response.status).toEqual(200);
	});

	test('Token should be generated', async () => {
		const response = await axios.post(
			`${baseUrl}/Account/v1/GenerateToken`,
			{
				userName,
				password,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);

		token = response.data.token;
		expect(response.status).toEqual(200);
	});
});

describe('Bookstore', () => {
	test('Should show all books', async () => {
		const response = await axios.get(`${baseUrl}/BookStore/v1/Books`, {
			headers: {
				'Content-Type': 'application/json',
			},
		});

		expect(response.status).toEqual(200);
		expect(response.data.books[0].title).toEqual('Git Pocket Guide');
		expect(response.data.books[0].subTitle).toEqual('A Working Introduction');
	});
});

describe('User deletion', () => {
	test('User should be deleted', async () => {
		const response = await axios.delete(`${baseUrl}/Account/v1/User/${userID}`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});

		expect(response.status).toEqual(204);
		// in documentetion says that success status code is 200, but it is 204 (if I understood it correctly)
	});
});
