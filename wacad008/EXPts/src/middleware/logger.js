"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logger(tipo) {
    if (tipo === 'simples') {
        return function (req, res, next) {
            console.log(new Date().toISOString(), req.url, req.method);
            next();
        };
    }
    else {
        return function (req, res, next) {
            console.log(new Date().toISOString(), req.url, req.method, req.httpVersion, req.get('User-Agent'));
            next();
        };
    }
}
exports.default = logger;
