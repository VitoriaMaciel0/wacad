"use strict";
class Aluno {
    constructor(nome, idade, altura, peso) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.id = Aluno.contadorAlunos++;
    }
}
Aluno.contadorAlunos = 1;
class Turma {
    constructor(id = 1, nome = "Turma A") {
        this.alunos = [];
        this.id = id;
        this.nome = nome;
    }
    adicionarAluno(nome, idade, altura, peso) {
        const alunoExistente = this.alunos.find((aluno) => aluno.nome === nome);
        if (alunoExistente) {
            return alunoExistente;
        }
        const aluno = new Aluno(nome, idade, altura, peso);
        this.alunos.push(aluno);
        return aluno;
    }
    editarAluno(id, nome, idade, altura, peso) {
        const aluno = this.alunos.find((aluno) => aluno.id === id);
        if (aluno) {
            aluno.nome = nome;
            aluno.idade = idade;
            aluno.altura = altura;
            aluno.peso = peso;
        }
    }
    apagarAluno(id) {
        const alunoIndex = this.alunos.findIndex((aluno) => aluno.id === id);
        if (alunoIndex !== -1) {
            this.alunos.splice(alunoIndex, 1);
        }
    }
    getNumAlunos() {
        return this.alunos.length;
    }
    getMediaIdades() {
        const totalIdades = this.alunos.reduce((acc, aluno) => acc + aluno.idade, 0);
        return totalIdades / this.alunos.length;
    }
    getMediaAlturas() {
        const totalAlturas = this.alunos.reduce((acc, aluno) => acc + aluno.altura, 0);
        return totalAlturas / this.alunos.length;
    }
    getMediaPesos() {
        const totalPesos = this.alunos.reduce((acc, aluno) => acc + aluno.peso, 0);
        return totalPesos / this.alunos.length;
    }
    getAlunos() {
        return this.alunos;
    }
}
const turma = new Turma();
const adicionarAlunoForm = document.getElementById("adicionar-aluno-form");
const listaAlunos = document.getElementById("lista-alunos");
const editarAlunoForm = document.getElementById("editar-aluno-form");
const cancelarEdicaoButton = document.getElementById("cancelar-edicao");
function atualizarEstatisticas() {
    const numAlunosElement = document.getElementById("num-alunos");
    const mediaIdadesElement = document.getElementById("media-idades");
    const mediaAlturasElement = document.getElementById("media-alturas");
    const mediaPesosElement = document.getElementById("media-pesos");
    numAlunosElement.textContent = turma.getNumAlunos().toString();
    mediaIdadesElement.textContent = turma.getMediaIdades().toFixed(2);
    mediaAlturasElement.textContent = turma.getMediaAlturas().toFixed(2);
    mediaPesosElement.textContent = turma.getMediaPesos().toFixed(2);
}
function atualizarListaAlunos() {
    listaAlunos.innerHTML = ""; // Limpa a lista de alunos atual
    const alunos = turma.getAlunos();
    alunos.forEach((aluno) => {
        const alunoItem = document.createElement("li");
        alunoItem.innerHTML = `
                ID: ${aluno.id}, Nome: ${aluno.nome}, Idade: ${aluno.idade}, Altura: ${aluno.altura}m, Peso: ${aluno.peso}kg
                <button onclick="editarAluno(${aluno.id})">Editar</button>
                <button onclick="apagarAluno(${aluno.id})">Apagar</button>
            `;
        listaAlunos.appendChild(alunoItem);
    });
}
// Evento de clique no botão "Editar"
function adicionarAluno(nome, idade, altura, peso) {
    const aluno = turma.adicionarAluno(nome, idade, altura, peso);
    atualizarListaAlunos();
    atualizarEstatisticas();
    return aluno;
}
function editarAluno(id) {
    const aluno = turma.getAlunos().find((aluno) => aluno.id === id);
    if (aluno) {
        // Preenche o formulário de edição com os dados do aluno
        const alunoIdEdit = document.getElementById("aluno-id-edit");
        const nomeEdit = document.getElementById("nome-edit");
        const idadeEdit = document.getElementById("idade-edit");
        const alturaEdit = document.getElementById("altura-edit");
        const pesoEdit = document.getElementById("peso-edit");
        alunoIdEdit.value = aluno.id.toString();
        nomeEdit.value = aluno.nome;
        idadeEdit.value = aluno.idade.toString();
        alturaEdit.value = aluno.altura.toString();
        pesoEdit.value = aluno.peso.toString();
        // Mostra o formulário de edição e o botão "Cancelar"
        editarAlunoForm.style.display = "block";
        cancelarEdicaoButton.style.display = "block";
    }
}
function apagarAluno(id) {
    // Encontra o índice do aluno pelo ID
    const alunoIndex = turma.getAlunos().findIndex((aluno) => aluno.id === id);
    if (alunoIndex !== -1) {
        // Remove o aluno da lista
        turma.getAlunos().splice(alunoIndex, 1);
        // Atualiza a lista de alunos
        atualizarListaAlunos();
        // Atualiza as estatísticas
        atualizarEstatisticas();
        // Oculta o formulário de edição e o botão "Cancelar"
        editarAlunoForm.style.display = "none";
        cancelarEdicaoButton.style.display = "none";
    }
}
adicionarAlunoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const aluno = turma.adicionarAluno(nome, idade, altura, peso);
    adicionarAluno(nome, idade, altura, peso);
    // Resto do seu código para atualizar a lista de alunos e estatísticas
    atualizarListaAlunos();
    adicionarAlunoForm.reset();
});
document.addEventListener("DOMContentLoaded", () => {
    var _a;
    // Evento de clique no botão "Editar"
    (_a = document.getElementById("editar-aluno-button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        // Mostrar o formulário de edição e o botão "Cancelar"
        editarAlunoForm.style.display = "block";
        cancelarEdicaoButton.style.display = "block";
    });
    // Evento de clique no botão "Cancelar"
    cancelarEdicaoButton === null || cancelarEdicaoButton === void 0 ? void 0 : cancelarEdicaoButton.addEventListener("click", () => {
        // Ocultar o formulário de edição e o botão "Cancelar"
        editarAlunoForm.style.display = "none";
        cancelarEdicaoButton.style.display = "none";
    });
    // Evento de envio do formulário de edição
    editarAlunoForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        // Obtenha os novos valores do formulário de edição
        const alunoIdEdit = parseInt(document.getElementById("aluno-id-edit").value);
        const nomeEdit = document.getElementById("nome-edit").value;
        const idadeEdit = parseInt(document.getElementById("idade-edit").value);
        const alturaEdit = parseFloat(document.getElementById("altura-edit").value);
        const pesoEdit = parseFloat(document.getElementById("peso-edit").value);
        // Chame a função para editar o aluno com os novos valores
        turma.editarAluno(alunoIdEdit, nomeEdit, idadeEdit, alturaEdit, pesoEdit);
        // Atualize a lista de alunos e estatísticas
        atualizarListaAlunos();
        atualizarEstatisticas();
        // Oculte o formulário de edição e o botão "Cancelar"
        editarAlunoForm.style.display = "none";
        cancelarEdicaoButton.style.display = "none";
    });
    // Restante do seu código, incluindo as funções editarAluno e apagarAluno
    atualizarListaAlunos();
    atualizarEstatisticas();
});
