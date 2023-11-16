import { prisma } from "../src/database.js";

async function main() {
    await prisma.cpf.createMany({
        data: [
          { cpf: "47027284820" },
          { cpf: "47027284821" },
          { cpf: "47027284822" },
          { cpf: "47027284823" }
        ],
        skipDuplicates: true,
      });
  }

main().catch((e) => {
    console.log(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});
