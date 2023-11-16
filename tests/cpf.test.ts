import { faker } from "@faker-js/faker";
import supertest from "supertest";

import app from "../src/app";
import { prisma } from "../src/database.js";
import cpfFactory from "./factories/cpfFactory.js";
import invalidCpfFactory from "./factories/invalidCpfFactory.js";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE cpfs`;
});

const agent = supertest(app);

afterAll(async () => {
  await prisma.$disconnect();
});


describe('Tests POST /cpf - Add CPF', () => {
  it('Should return status code 201, if a correctly formatted CPF is added', async () => {
    const cpf = await cpfFactory();
    const result = await supertest(app).post('/cpf').send(cpf);

    expect(result.status).toBe(201);
  });

  it('Should return status code 422, if the provided CPF is in an invalid format', async () => {
    const cpf = await invalidCpfFactory();
    const result = await supertest(app).post('/cpf').send(cpf);

    expect(result.status).toBe(422);
  });

  it('Should return status code 409, if the provided CPF already exists on the list', async () => {
    const cpf = await cpfFactory();
    await supertest(app).post('/cpf').send(cpf);
    const result = await supertest(app).post('/cpf').send(cpf);

    expect(result.status).toBe(409);
  });
});

describe('Tests GET /cpf - Find All CPFs', () => {
  it('Should return all CPFs in an array format', async () => {
    const result = await supertest(app).get('/cpf');

    expect(result.body).toBeInstanceOf(Array);
  });
});

describe('Tests GET /cpf/{cpf} - Check CPF', () => {
  it('Should return an object containing the CPF that was searched', async () => {
    const cpf = await cpfFactory();
    await supertest(app).post('/cpf').send(cpf);

    const result = await supertest(app).get(`/cpf/${cpf}`);

    expect(result.body).toBeInstanceOf(Object);
  });

    it('Should return status code 404 if the searched CPF does not exist', async () => {
    const cpf = await cpfFactory();

    const result = await supertest(app).get(`/cpf/${cpf}`);

    expect(result.status).toBe(404);
  });
});

describe('Tests DELETE /cpf/{cpf} - Remove CPF', () => {
    it('Should return status code 404 if the given CPF does not exist', async () => {
    const cpf = await cpfFactory();

    const result = await supertest(app).delete(`/cpf/${cpf}`);

    expect(result.status).toBe(404);
  });
});