-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `users_id_key`(`id`),
    UNIQUE INDEX `users_username_key`(`username`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `generalDatas` (
    `id` VARCHAR(191) NOT NULL,
    `birth` VARCHAR(191) NOT NULL,
    `cns` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `rg` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `generalDatas_id_key`(`id`),
    UNIQUE INDEX `generalDatas_cns_key`(`cns`),
    UNIQUE INDEX `generalDatas_cpf_key`(`cpf`),
    UNIQUE INDEX `generalDatas_email_key`(`email`),
    UNIQUE INDEX `generalDatas_phone_key`(`phone`),
    UNIQUE INDEX `generalDatas_rg_key`(`rg`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `addresses` (
    `id` VARCHAR(191) NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `complemento` VARCHAR(191) NULL,
    `logradouro` VARCHAR(191) NULL,
    `municipio` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `uf` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `addresses_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `professionalDatas` (
    `id` VARCHAR(191) NOT NULL,
    `crm` VARCHAR(191) NOT NULL,
    `especialidade` VARCHAR(191) NOT NULL,
    `idUser` VARCHAR(191) NOT NULL,
    `numeroConselho` VARCHAR(191) NOT NULL,
    `rqe` VARCHAR(191) NOT NULL,
    `ufConselho` VARCHAR(191) NOT NULL,
    `memed` BOOLEAN NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `professionalDatas_id_key`(`id`),
    UNIQUE INDEX `professionalDatas_idUser_key`(`idUser`),
    UNIQUE INDEX `professionalDatas_numeroConselho_key`(`numeroConselho`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `generalDatas` ADD CONSTRAINT `generalDatas_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `addresses` ADD CONSTRAINT `addresses_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `professionalDatas` ADD CONSTRAINT `professionalDatas_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
