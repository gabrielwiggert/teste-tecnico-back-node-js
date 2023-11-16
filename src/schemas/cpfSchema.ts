import Joi from "joi";

export const cpfSchema = Joi.object({
  cpf: Joi.string().length(11).pattern(/^[0-9]+$/).required()
});