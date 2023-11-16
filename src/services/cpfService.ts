import { Cpf } from "@prisma/client";
import dotenv from "dotenv";
import * as cpfRepository from "../repositories/cpfRepository.js";
import * as errors from "../utils/errors.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { cpfSchema } from "../schemas/cpfSchema.js";
dotenv.config();

export type addCpfData = Omit<Cpf, 'createdAt'>;

export interface UserCpf {
  cpf: string;
}

async function addCpf(userCpf: UserCpf) {
  const resultCpf = await cpfRepository.findCpf(userCpf.cpf);
  if (resultCpf) {throw errors.conflictError("CPF already exists in the database."); }

  let cpf: addCpfData = {
    cpf:""
  };
  cpf.cpf = userCpf.cpf;

  await cpfRepository.addCpf(cpf);
}

async function getAllCpfs() {
  return await cpfRepository.getAllCpfs();
}

async function deleteCpf(userCpf: UserCpf) {
  validateSchemaMiddleware(cpfSchema);
  const resultCpf = await cpfRepository.findCpf(userCpf.cpf);
  if (!resultCpf) {throw errors.notFoundError("CPF is not found."); }

  return await cpfRepository.deleteCpf(userCpf.cpf);
}

async function checkCpf(userCpf: UserCpf) {
  validateSchemaMiddleware(cpfSchema);
  const resultCpf = await cpfRepository.findCpf(userCpf.cpf);
  if (!resultCpf) {throw errors.notFoundError("CPF is not found."); }

  return resultCpf;
}

const cpfService = {
  addCpf,
  getAllCpfs,
  deleteCpf,
  checkCpf
}

export default cpfService;