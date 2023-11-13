import { PrismaClient, Compra, CompraProduto } from "@prisma/client";

const prisma = new PrismaClient();

export async function registrarCompra(carrinho: string[], usuarioId: string){
    const compra = await prisma.compra.create({ 
        data: {
        usuarioId,
    },
});

 carrinho.forEach(async(produtoId) => {
    await prisma.CompraProduto.create({
        data: {
            compraId: compra.id,
            produtoId,
            quantidade: 1,
        },
    });
 });
}