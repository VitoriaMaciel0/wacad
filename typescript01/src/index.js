"use strict";
function salvarLembretesNoLocalStorage(lembretes) {
    localStorage.setItem('lembretes', JSON.stringify(lembretes));
}
class ToDoList {
    constructor() {
        this.lembretes = [];
    }
    adicionarLembrete(lembrete) {
        this.lembretes.push(lembrete);
        salvarLembretesNoLocalStorage(this.lembretes); // Salvar os lembretes no LocalStorage
        this.atualizarListaLembretes();
    }
    editarLembrete(index, lembrete) {
        if (index >= 0 && index < this.lembretes.length) {
            this.lembretes[index] = lembrete;
            salvarLembretesNoLocalStorage(this.lembretes); // Salvar os lembretes no LocalStorage
            this.atualizarListaLembretes();
        }
        else {
            console.log("Índice inválido.");
        }
    }
    removerLembrete(index) {
        if (index >= 0 && index < this.lembretes.length) {
            this.lembretes.splice(index, 1);
            salvarLembretesNoLocalStorage(this.lembretes); // Salvar os lembretes no LocalStorage
            this.atualizarListaLembretes();
        }
        else {
            console.log("Índice inválido.");
        }
    }
    listarLembretes() {
        return this.lembretes;
    }
    atualizarListaLembretes() {
        const listaLembretes = document.getElementById("lista-lembretes");
        listaLembretes.innerHTML = "";
        this.lembretes.forEach((lembrete, index) => {
            var _a, _b;
            const li = document.createElement("li");
            li.innerHTML = `
        <strong>Título:</strong> ${lembrete[0]}<br>
        <strong>Data de Inserção:</strong> ${lembrete[1].toLocaleString()}<br>
        <strong>Data Limite:</strong> ${lembrete[2].toLocaleString()}<br>
        <strong>Descrição:</strong> ${lembrete[3]}<br>
        <button class="editar-button" data-index="${index}">Editar</button>
        <button class="remover-button" data-index="${index}">Remover</button>
      `;
            listaLembretes.appendChild(li);
            // Adicionar ouvintes de evento para os botões "Editar" e "Remover"
            (_a = li.querySelector(".editar-button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
                const tituloEditado = prompt("Novo título:") || ""; // Se o valor for null, use uma string vazia
                const dataInsercaoEditada = new Date(prompt("Nova data de inserção:") || ""); // Se o valor for null, use uma string vazia
                const dataLimiteEditada = new Date(prompt("Nova data limite:") || ""); // Se o valor for null, use uma string vazia
                const descricaoEditada = prompt("Nova descrição:") || ""; // Se o valor for null, use uma string vazia
                const lembreteEditado = [tituloEditado, dataInsercaoEditada, dataLimiteEditada, descricaoEditada];
                this.editarLembrete(index, lembreteEditado);
            });
            (_b = li.querySelector(".remover-button")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
                this.removerLembrete(index);
            });
        });
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const adicionarForm = document.getElementById("adicionar-form");
    const lembretesArmazenados = localStorage.getItem('lembretes');
    const toDoList = new ToDoList();
    if (lembretesArmazenados) {
        const lembretes = JSON.parse(lembretesArmazenados);
        lembretes.forEach((lembrete) => {
            toDoList.adicionarLembrete(lembrete);
        });
        toDoList.atualizarListaLembretes();
    }
    adicionarForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const titulo = document.getElementById("titulo").value;
        const dataInsercao = new Date(document.getElementById("data-insercao").value);
        const dataLimite = new Date(document.getElementById("data-limite").value);
        const descricao = document.getElementById("descricao").value;
        const lembrete = [titulo, dataInsercao, dataLimite, descricao];
        toDoList.adicionarLembrete(lembrete);
        adicionarForm.reset();
    });
});
