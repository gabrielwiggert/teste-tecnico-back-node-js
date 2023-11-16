import { prisma } from "../database.js";
import { addCpfData } from '../services/cpfService';

export async function addCpf(cpf: addCpfData) {
  return prisma.cpf.create({
    data: cpf
  });
}

export async function findCpf(cpf: string) {
  return prisma.cpf.findUnique({
    where: {
      cpf: cpf
    }
  });
}

export async function getAllCpfs() {
  return await prisma.cpf.findMany();
}

export async function deleteCpf(cpf: string) {
  return prisma.cpf.delete({
    where: {
      cpf: cpf
    }
  });
}