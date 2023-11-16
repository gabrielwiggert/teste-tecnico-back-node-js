-- CreateTable
CREATE TABLE "cpfs" (
    "id" SERIAL NOT NULL,
    "cpf" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cpfs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cpfs_cpf_key" ON "cpfs"("cpf");
