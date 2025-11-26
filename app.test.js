const request = require('supertest');
const app = require('./app');

describe('Express App Tests', () => {

  // describe('GET /', () => {
  //   test('should return Hello World', async () => {
  //     const res = await request(app).get('/');
  //     expect(res.statusCode).toBe(200);
  //     expect(res.text).toBe('Hello World');
  //   });
  // });

  describe('GET /health', () => {
    test('should return healthy status', async () => {
      const response = await request(app).get('/health');
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ status: 'healthy' });
    });
  });

});
