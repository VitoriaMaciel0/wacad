import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import session from "express-session";
import { v4 as uuidv4} from "uuid";
import  SwaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger-output.json";

import validateEnv from "./utils/validateEnv";
import setLangCookie from './middlewares/setLangCookie';

import router from "./router";

declare module "express-session" {
  interface SessionData {
    uid: string;
    tipoUsuario: string;
    carrinhoCompras: string[];
  }
}

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 7777;

app.use(morgan("combined"));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
  genid:() => uuidv4(),
  secret: "fsuhfuhr762398188xosqsnakj",
  resave: true,
  cookie: { maxAge: 10},
  saveUninitialized:true,

})
);

app.use(setLangCookie);
app.use("/api", SwaggerUi.serve, SwaggerUi.setup(swaggerFile));
app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
