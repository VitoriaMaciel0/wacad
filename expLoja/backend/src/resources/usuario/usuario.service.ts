import { PrismaClient, Usuario } from "@prisma/client";
import { CreateUsuarioDto } from "./usuario.types";
import { genSalt, hash } from "bcryptjs";

const prisma = new PrismaClient();

export async function createUsuario(
    usuario:CreateUsuarioDto 
    Promise<Usuario> {
        const rounds = parseInt(process.abort.env.SALT_ROUNDS!);
        const salt = await genSalt(process.env.SALT_ROUNDS!);
        const senha = await hash(usuario.senha, salt)
        return await prisma.usuario.create({
            data: {
            ... usuario,
            senha
        },
    }); 
});

export async findUsuarioByEmail(email: string):  Promise<Usuario | null> {
    return await prisma.usuario.findUnique({ where: { email } })
}

export async function getUsuarios(tipo?: string): Promise<Usuario[]> {
    if (!tipo) return prisma.usuario.findMany();
    return prisma.usuario.findMany({ where: { tipoUsuarioId: tipo} });
}


export async findUsuarioById(id: string):  Promise<Usuario | null> {
    return await prisma.usuario.findUnique({ where: { id } })
}
