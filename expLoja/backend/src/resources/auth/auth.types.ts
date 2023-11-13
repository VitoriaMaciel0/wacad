import { Usuario } from '@prisma/client';

export type signupDto = Pick<Usuario, 'nome' | 'email' |'senha'>;
export type LoginDto = Pick<Usuario, "email" | "senha">;