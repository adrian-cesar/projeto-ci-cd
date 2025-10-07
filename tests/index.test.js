const request = require('supertest');
const app = require('../index');

describe('Teste da rota principal', () => {
  it('Deve retornar status 200 e mensagem correta', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Servidor funcionando corretamente');
  });
});