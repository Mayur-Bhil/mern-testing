import { describe, it, expect ,test } from 'vitest';
import request from 'supertest';
import { app } from '../index';

describe('POST /sum', () => {
    it('should return the sum of two numbers', async () => {
        const response = await request(app)
        .post('/sum')
        .send({ a: 5, b: 10 });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ result: 15 });
    });

    it('should return 422 for invalid input', async () => {
        const response = await request(app)
        .post('/sum')
        .send({ a: 'five', b: 10 });
        expect(response.status).toBe(422);
        expect(response.body).toEqual({ error: 'Invalid input' });
    });
});

describe('POST /multiply', () => {
    it('should return the product of two numbers', async () => {
        const response = await request(app)     
        .post('/multiply')
        .send({ a: 5, b: 10 });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ result: 50 });
    });

    it('should return 422 for invalid input', async () => {
        const response = await request(app)
        .post('/multiply')                      
        .send({ a: 5, b: 'ten' });
        expect(response.status).toBe(422);
        expect(response.body).toEqual({ error: 'Invalid input' });
    });
});



describe("/get /health", () => {
    test("It should respond with 200 status code", async () => {
        const response = await request(app).get("/health");
        expect(response.status).toBe(200);
        expect(response.body).toEqual({status: "Server IS Running"});
    });
});