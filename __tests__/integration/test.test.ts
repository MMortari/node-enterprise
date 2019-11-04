import request from 'supertest';
import app from './../../src/app';

describe('Test routes', () => {

  it('Should be able to show Hello World', async () => {

    const response = await request(app).get('/');

    expect(response.text).toContain('Hello World')

  })

})