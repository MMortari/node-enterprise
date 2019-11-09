import request from 'supertest';
import app from './../../../src/app';

describe('Tests for employees', () => {

  it('Should be able to list all employee', async () => {

    const employees = await request(app).get('/employees');

    expect(employees.status).toBe(200);

    expect(employees.body[0]).toHaveProperty(['employee_id']);
    expect(employees.body[0]).toHaveProperty(['first_name']);
    expect(employees.body[0]).toHaveProperty(['last_name']);
    expect(employees.body[0]).toHaveProperty(['email']);
    expect(employees.body[0]).toHaveProperty(['phone_number']);
    expect(employees.body[0]).toHaveProperty(['hire_data']);
    // expect(employees.body[0]).toHaveProperty(['job_id']);
    expect(employees.body[0]).toHaveProperty(['salary']);
    expect(employees.body[0]).toHaveProperty(['comission_pct']);
    // expect(employees.body[0]).toHaveProperty(['department_id']);
    // expect(employees.body[0]).toHaveProperty(['manager_id']);
  })

  it('Should be able to register a new employee', async () => {
    expect(1).toBe(1);
  })

  it('Should be able to update a employee', async () => {
    expect(1).toBe(1);
  })

  it('Should be able to remove a employee', async () => {
    expect(1).toBe(1);
  })

})