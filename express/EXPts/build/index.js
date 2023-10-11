"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./middleware/logger"));
const dotenv_1 = __importDefault(require("dotenv"));
const validEnv_1 = __importDefault(require("./utils/validEnv"));
const router_1 = __importDefault(require("./router/router"));
const express_handlebars_1 = require("express-handlebars");
const node_sass_middleware_1 = __importDefault(require("node-sass-middleware"));
dotenv_1.default.config();
(0, validEnv_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3333;
const app = (0, express_1.default)();
app.use((0, node_sass_middleware_1.default)({
    src: `${__dirname}/../public/scss`,
    dest: `${__dirname}/../public/css`,
    outputStyle: "compressed",
    prefix: "/css",
}));
app.engine("handlebars", (0, express_handlebars_1.engine)({
    helpers: require(`${__dirname}/views/helpers/helpers.ts`)
}));
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);
app.use((0, logger_1.default)('complexo'));
app.use('/img', express_1.default.static('${_dirname}/../public/img'));
app.use('/css', express_1.default.static('${_dirname}/../public/css'));
app.use('/webfonts', express_1.default.static('${_dirname}/../node_modules/@fortawesome'));
app.use('/js', [
    express_1.default.static(`${__dirname}/../public/js`),
    express_1.default.static(`${__dirname}/../node_modules/bootstrap/dist/js/`)
]);
app.use(router_1.default);
app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});
