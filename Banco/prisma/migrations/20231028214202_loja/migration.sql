-- CreateTable
CREATE TABLE `Cliente` (
    `ID_Cliente` INTEGER NOT NULL,
    `NomeCli` VARCHAR(191) NULL,
    `CpfCli` VARCHAR(191) NULL,
    `celular` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `Data_nascimento` DATETIME(3) NULL,

    UNIQUE INDEX `Cliente_CpfCli_key`(`CpfCli`),
    PRIMARY KEY (`ID_Cliente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Endereco` (
    `idEndereco` INTEGER NOT NULL,
    `Cidade` VARCHAR(191) NULL,
    `Cep` VARCHAR(191) NULL,
    `Pais` VARCHAR(191) NULL,
    `Rua` VARCHAR(191) NULL,
    `ID_Cliente` INTEGER NULL,

    PRIMARY KEY (`idEndereco`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categoria` (
    `ID_Categoria` INTEGER NOT NULL,
    `Nome` VARCHAR(191) NULL,

    PRIMARY KEY (`ID_Categoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subcategoria` (
    `id_Subcategoria` INTEGER NOT NULL,
    `ID_Categoria` INTEGER NOT NULL,
    `Nome` VARCHAR(191) NULL,

    PRIMARY KEY (`id_Subcategoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto` (
    `idProduto` INTEGER NOT NULL,
    `id_Subcategoria` INTEGER NOT NULL,
    `Modelo` VARCHAR(191) NULL,
    `Fabricante` VARCHAR(191) NULL,
    `Preço` DECIMAL(65, 30) NULL,
    `Quantidade_Disponivel` INTEGER NULL,
    `subcategoriaIdSubcategoria` INTEGER NULL,

    PRIMARY KEY (`idProduto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NumeroDeSerie` (
    `idNumero de Série` INTEGER NOT NULL,
    `idProduto` INTEGER NOT NULL,

    PRIMARY KEY (`idNumero de Série`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Compra` (
    `idCompra` INTEGER NOT NULL,
    `ID_Cliente` INTEGER NULL,
    `Data_Hora` DATETIME(3) NULL,
    `Desconto` DECIMAL(65, 30) NULL,
    `Forma_Pagamento` VARCHAR(191) NULL,
    `Total_Compra` DECIMAL(65, 30) NULL,
    `IdEndereço` INTEGER NULL,

    PRIMARY KEY (`idCompra`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProdutosComprados` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `IdCompra` INTEGER NULL,
    `IdProduto` INTEGER NULL,
    `Quantidade` INTEGER NULL,
    `compraIdCompra` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Endereco` ADD CONSTRAINT `Endereco_ID_Cliente_fkey` FOREIGN KEY (`ID_Cliente`) REFERENCES `Cliente`(`ID_Cliente`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subcategoria` ADD CONSTRAINT `Subcategoria_ID_Categoria_fkey` FOREIGN KEY (`ID_Categoria`) REFERENCES `Categoria`(`ID_Categoria`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_subcategoriaIdSubcategoria_fkey` FOREIGN KEY (`subcategoriaIdSubcategoria`) REFERENCES `Subcategoria`(`id_Subcategoria`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NumeroDeSerie` ADD CONSTRAINT `NumeroDeSerie_idProduto_fkey` FOREIGN KEY (`idProduto`) REFERENCES `Produto`(`idProduto`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Compra` ADD CONSTRAINT `Compra_ID_Cliente_fkey` FOREIGN KEY (`ID_Cliente`) REFERENCES `Cliente`(`ID_Cliente`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Compra` ADD CONSTRAINT `Compra_IdEndereço_fkey` FOREIGN KEY (`IdEndereço`) REFERENCES `Endereco`(`idEndereco`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProdutosComprados` ADD CONSTRAINT `ProdutosComprados_IdProduto_fkey` FOREIGN KEY (`IdProduto`) REFERENCES `Produto`(`idProduto`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProdutosComprados` ADD CONSTRAINT `ProdutosComprados_compraIdCompra_fkey` FOREIGN KEY (`compraIdCompra`) REFERENCES `Compra`(`idCompra`) ON DELETE SET NULL ON UPDATE CASCADE;
