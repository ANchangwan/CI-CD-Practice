const request = require('supertest');
const app = require('./app'); // 서버를 시작하지 않고 app만 import

describe('Express App Tests', () => {
  test('GET / should return Hello World message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: '테스트 argoCD' });
  });

  test('GET /health should return healthy status', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'healthy!!' });
  });
});