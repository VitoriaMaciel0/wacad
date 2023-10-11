import express from 'express';
import logger from './middleware/logger';
import dotenv from 'dotenv';
import validEnv  from './utils/validEnv';
import router from "./router/router"
import { engine } from 'express-handlebars';
import sass from 'node-sass-middleware';

dotenv.config();
validEnv();

const PORT = process.env.PORT ?? 3333;

const app = express();

app.use(sass({
  src: `${__dirname}/../public/scss`,
  dest: `${__dirname}/../public/css`,
  outputStyle: "compressed",
  prefix: "/css",
 }));
 
app.engine("handlebars", engine({
  helpers: require(`${__dirname}/views/helpers/helpers.ts`)
}));

app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

app.use(logger('complexo'));

app.use('/img', express.static('${_dirname}/../public/img'));
app.use('/css', express.static('${_dirname}/../public/css'));
app.use('/webfonts', express.static('${_dirname}/../node_modules/@fortawesome'));
app.use('/js', [
  express.static(`${__dirname}/../public/js`),
  express.static(`${__dirname}/../node_modules/bootstrap/dist/js/`)
  ]);


app.use(router);



app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});

