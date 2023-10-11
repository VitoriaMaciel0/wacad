"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lorem_ipsum_1 = require("lorem-ipsum");
const hb1 = (req, res) => {
    res.render('main/hb1', {
        mensagem: 'Olá, você está aprendendo Express + HBS!',
    });
};
const hb2 = (req, res) => {
    res.render('main/hb2', {
        poweredByNodejs: true,
        name: 'Express',
        type: 'Framework',
    });
};
const hb3 = (req, res) => {
    const profes = [
        { nome: 'David Fernandes', sala: 1238 },
        { nome: 'Horácio Fernandes', sala: 1233 },
        { nome: 'Edleno Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1231 }
    ];
    res.render('main/hb3', { profes });
};
const hb4 = (req, res) => {
    const technologies = [
        { name: 'Express', type: 'Framework', poweredByNodejs: true },
        { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
        { name: 'React', type: 'Library', poweredByNodejs: true },
        { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
        { name: 'Django', type: 'Framework', poweredByNodejs: false },
        { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
        { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
    ];
    res.render('main/hb4', { technologies });
};
const img = (req, res) => {
    res.send('main/PaginaComImagem');
};
const lorem = (req, res) => {
    res.send((0, lorem_ipsum_1.loremIpsum)({
        count: parseInt(req.params.paragrafos),
        format: "html",
        paragraphLowerBound: 3,
        paragraphUpperBound: 7,
        random: Math.random,
        sentenceLowerBound: 5,
        sentenceUpperBound: 15,
        suffix: "\n",
        units: "paragraph", // paragraph(s), "sentence(s)", or "word(s)"
    }));
};
const sobre = (req, res) => {
    res.send("main/Pagina Sobre");
};
const ui = (req, res) => {
    res.render("main/ui");
};
exports.default = { hb1, hb2, hb3, hb4, lorem, sobre, img, ui };
