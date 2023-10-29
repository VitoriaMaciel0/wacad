import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createCliente() {
  try {
    const novoCliente = await prisma.cliente.create({
      data: {
        ID_Cliente: 1, 
        NomeCli: 'Fulano de Tal',
        CpfCli: '123.456.789-00',
        celular: '123456789',
        email: 'fulano@example.com',
        Data_nascimento: new Date('1990-01-01'),
      },
    });
    console.log('Novo Cliente:', novoCliente);
  } catch (error) {
    console.error('Erro ao criar Cliente:', error);
  }
}

async function lerCliente() {
  try {
    const clientes = await prisma.cliente.findMany();
    console.log('Clientes:', clientes);
  } catch (error) {
    console.error('Erro ao ler Clientes:', error);
  }
}

async function atualizarCliente() {
  try {
    const clienteAtualizado = await prisma.cliente.update({
      where: { ID_Cliente: 1 }, 
      data: {
        NomeCli: 'Novo Nome',
        
      },
    });
    console.log('Cliente Atualizado:', clienteAtualizado);
  } catch (error) {
    console.error('Erro ao atualizar Cliente:', error);
  }
}

async function deletarCliente() {
  try {
    const clienteDeletado = await prisma.cliente.delete({
      where: { ID_Cliente: 1 }, 
    });
    console.log('Cliente Deletado:', clienteDeletado);
  } catch (error) {
    console.error('Erro ao deletar Cliente:', error);
  }
}

createCliente();
lerCliente();
atualizarCliente();
deletarCliente();
