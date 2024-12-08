const axios = require('axios')
const baseUrl = 'https://jsonplaceholder.typicode.com';

describe('Test posts', () => {
    
    test("Get all posts (there are 100 posts)", async () => {
        const response = await axios.get(`${baseUrl}/posts`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        expect(response.status).toEqual(200);
        expect(response.data.length).toEqual(100);
    })

    test("Get first post", async () => {
        const response = await axios.get(`${baseUrl}/posts/1`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        expect(response.status).toEqual(200);
        expect(response.data.title).toEqual('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
    })

    test("Get all comments from fist post", async () => {
        const response = await axios.get(`${baseUrl}/posts/1/comments`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        expect(response.status).toEqual(200);
        expect(response.data[0].name).toEqual('id labore ex et quam laborum');
    })

    test("Get all comments from fist post (endpoint with parameters)", async () => {
        const response = await axios.get(`${baseUrl}/comments?postId=1`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        expect(response.status).toEqual(200);
        expect(response.data[0].email).toEqual('Eliseo@gardner.biz');
    })

    test("Create a new post", async () => {
        const response = await axios.post(`${baseUrl}/posts`, {
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                title: 'a new article',
                body: 'body',
                userId: 777,
            }
        });

        expect(response.status).toEqual(201);
        expect(response.data.id).toEqual(101);
        expect(response.data.body.title).toEqual('a new article');
    })

    test("Update all elements of the existing post", async () => {
        const response = await axios.put(`${baseUrl}/posts/1`, {
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                id: '1',
                title: 'updated post title',
                body: 'updated post body',
                userId: 1,
            }
        });

        expect(response.status).toEqual(200);
        expect(response.data.body.title).toEqual('updated post title');
        expect(response.data.body.body).toEqual('updated post body');
    })

    test("Update title of the existing post", async () => {
        const response = await axios.patch(`${baseUrl}/posts/1`, {
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                title: 'updated post title',
            }
        });

        expect(response.status).toEqual(200);
        expect(response.data.body.title).toEqual('updated post title');
    })

    test("Delete the post", async () => {
        const response = await axios.delete(`${baseUrl}/posts/1`);

        expect(response.status).toEqual(200);
    })
});
