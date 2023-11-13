import Swaggerautogen from "swagger-autogen";
import dotenv from "dotenv";
import swaggerAutogen from "swagger-autogen";


dotenv.config()

const doc= {
    info:{
        title:"Api da Loja Virtual",
        description: "'Documentação da Api da Loja Virtual"
    },
    host: "${process.env.HOST}: ${process.env.PORT}",
    definitions: {
        CreateProdutoDto: {
            nome: "Celular Samsung",
            preco: 1299.0,
            estoque: 1,
        },
        LoginDto: {
            email: "Vitor89@gmail.com",
            senha: "12345678",
        },
    },
};

const outputFile = '${__dirname}/swagger-doc.json';
const routers = [`${__dirname}/router/index.ts`];
swaggerAutogen()(outputFile, routers, doc);