"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTech2 = exports.listProfs = void 0;
function listProfs(profs) {
    const list = profs.map((p) => `<li>${p.nome}-${p.sala}</li>`);
    return `<ul>${list.join('')}</ul>`;
}
exports.listProfs = listProfs;
function listTech2(technologies) {
    const list = technologies.filter((t) => t.poweredByNodejs === true).map((p) => `<li>${p.name}-${p.type}</li>`);
    return `<ul>${list.join('')}</ul>`;
}
exports.listTech2 = listTech2;
