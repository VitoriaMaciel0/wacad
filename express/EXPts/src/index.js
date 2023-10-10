"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var logger_1 = require("./middleware/logger");
var dotenv_1 = require("dotenv");
var validEnv_1 = require("./utils/validEnv");
var router_1 = require("./router/router");
dotenv_1.default.config();
(0, validEnv_1.default)();
var PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3333;
var app = (0, express_1.default)();
app.use((0, logger_1.default)('complexo'));
app.use('/img', express_1.default.static('${_dirname}/../public/img'));
app.use('/js', express_1.default.static('${_dirname}/../public/js'));
app.use(router_1.default);
app.listen(PORT, function () {
    console.log("Express app iniciada na porta ".concat(PORT, "."));
});
