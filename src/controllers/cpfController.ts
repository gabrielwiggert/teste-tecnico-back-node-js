import { Request, Response } from "express";
import cpfService from "../services/cpfService.js";

async function addCpf(req: Request, res: Response) {
  const cpf = req.body;
  await cpfService.addCpf(cpf);
  res.sendStatus(201);
}

async function getAllCpfs(req: Request, res: Response) {
  const result = await cpfService.getAllCpfs();
  res.send(result);
}

async function deleteCpf(req: Request, res: Response) {
  let userCpf = { cpf: "" }
  userCpf.cpf = String(req.params.cpf);
  const result = await cpfService.deleteCpf(userCpf);
  res.send(result);
}

async function checkCpf(req: Request, res: Response) {
  let userCpf = { cpf: "" }
  userCpf.cpf = String(req.params.cpf);
  const result = await cpfService.checkCpf(userCpf);
  res.send(result);
}

const cpfController = {
  addCpf,
  getAllCpfs,
  deleteCpf,
  checkCpf
}

export default cpfController;
