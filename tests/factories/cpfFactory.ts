import { faker } from "@faker-js/faker";
import { UserCpf } from "../../src/services/cpfService";

export default function testFactory(): UserCpf {
  return {
    cpf: faker.random.numeric(11)
  };
}