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
dotenv_1.default.config();
(0, validEnv_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3333;
const app = (0, express_1.default)();
app.use((0, logger_1.default)('complexo'));
app.use('/img', express_1.default.static('${_dirname}/../public/img'));
app.use('/js', express_1.default.static('${_dirname}/../public/js'));
app.use(router_1.default);
app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});
