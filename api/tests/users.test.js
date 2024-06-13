import server from '../src/app.js';
import request from 'supertest';


describe('Tests for User routes', () => {
    describe('GET /users/echo', () => {
        test('should respond 200 ok status', async () => {
            const response = await request(server).get('/users/echo').send();
            expect(response.status).toBe(200);
        });
    });

    describe('GET /users', () => {
        test('should respond 200 ok status', async () => {
            const response = await request(server).get('/users').send();
            expect(response.status).toBe(200);
        });

        test('should response type must be an array', async () => {
            const response = await request(server).get('/users').send();
            expect(response.body).toBeInstanceOf(Array);
        });
    });

    describe('GET /users/:user_id', () => {
        test('should respond 200 ok status if id type is a number', async () => {
            const response = await request(server).get('/users/1').send();
            expect(response.status).toBe(200);
        });

        test('should respond an object', async () => {
            const response = await request(server).get('/users/1').send();
            expect(response.body).toBeInstanceOf(Object);
        });

        test('should respond an object with id propery', async () => {
            const response = await request(server).get('/users/1').send();
            expect(response.body).toHaveProperty('id');
        });

        test('should respond an object with arroz propery', async () => {
            const response = await request(server).get('/users/1').send();
            expect(response.body).not.toHaveProperty('password');
        });

        test('should respond 400 bad request if id type is not a number', async () => {
            const response = await request(server).get('/users/test_string').send();
            expect(response.status).toBe(400);
        });
    });
});