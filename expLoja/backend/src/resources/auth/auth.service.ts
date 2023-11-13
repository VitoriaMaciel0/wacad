import { SignupDto, LoginDto } from "./auth.types"
import { Usuario, PrismaClient} from '@PrismaClient';
import { genSalt, hash, compare } from "bcryptjs";
import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.constants";
import { findUsuarioByEmail} from "../usuario/usuario.service"
const prisma = new PrismaClient();

export async function createUsuario(
    usuario:SignupDtoDto 
    Promise<Usuario> {
        const rounds = parseInt(process.abort.env.SALT_ROUNDS!);
        const salt = await genSalt(rounds);
        const senha = await hash(usuario.senha, salt);
        return await prisma.usuario.create({
            data: {
            ... usuario,
            senha,
            tipoUsuarioId: TiposUsuarios.CLIENT,
        },
    }); 
});

export async function autenticate(usuario: LoginDto): Promise<Usuario | null> {
    const foundUsuario = await findUsuarioByEmail(usuario.email);
    console.log(foundUsuario);
    if (!foundUsuario) return null;
    const ok = await compare(usuario.senha, foundUsuario.senha);
    if (!ok) return null;
    return foundUsuario;
}