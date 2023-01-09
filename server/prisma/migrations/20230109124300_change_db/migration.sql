-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "generalDatas" (
    "id" TEXT NOT NULL,
    "birth" TEXT NOT NULL,
    "cns" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "addresses" (
    "id" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "complemento" TEXT,
    "logradouro" TEXT,
    "municipio" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "professionalDatas" (
    "id" TEXT NOT NULL,
    "crm" TEXT NOT NULL,
    "especialidade" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,
    "numeroConselho" TEXT NOT NULL,
    "rqe" TEXT NOT NULL,
    "ufConselho" TEXT NOT NULL,
    "memed" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "generalDatas_id_key" ON "generalDatas"("id");

-- CreateIndex
CREATE UNIQUE INDEX "generalDatas_cns_key" ON "generalDatas"("cns");

-- CreateIndex
CREATE UNIQUE INDEX "generalDatas_cpf_key" ON "generalDatas"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "generalDatas_email_key" ON "generalDatas"("email");

-- CreateIndex
CREATE UNIQUE INDEX "generalDatas_phone_key" ON "generalDatas"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "generalDatas_rg_key" ON "generalDatas"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "addresses_id_key" ON "addresses"("id");

-- CreateIndex
CREATE UNIQUE INDEX "professionalDatas_id_key" ON "professionalDatas"("id");

-- CreateIndex
CREATE UNIQUE INDEX "professionalDatas_idUser_key" ON "professionalDatas"("idUser");

-- CreateIndex
CREATE UNIQUE INDEX "professionalDatas_numeroConselho_key" ON "professionalDatas"("numeroConselho");

-- AddForeignKey
ALTER TABLE "generalDatas" ADD CONSTRAINT "generalDatas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professionalDatas" ADD CONSTRAINT "professionalDatas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
