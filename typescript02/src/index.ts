class Aluno {
    private static contadorAlunos = 1;
    public id: number;

    constructor(
        public nome: string,
        public idade: number,
        public altura: number,
        public peso: number
    ) {
        this.id = Aluno.contadorAlunos++;
    }
}

class Turma {
    private alunos: Aluno[] = [];
    private id: number;
    private nome: string;

    constructor(id: number = 1, nome: string = "Turma A") {
        this.id = id;
        this.nome = nome;
    }

    adicionarAluno(nome: string, idade: number, altura: number, peso: number): Aluno | undefined {
        const alunoExistente = this.alunos.find((aluno) => aluno.nome === nome);

        if (alunoExistente) {
            return alunoExistente;
        }

        const aluno = new Aluno(nome, idade, altura, peso);
        this.alunos.push(aluno);
        return aluno;
    }

    editarAluno(id: number, nome: string, idade: number, altura: number, peso: number): void {
        const aluno = this.alunos.find((aluno) => aluno.id === id);
        if (aluno) {
            aluno.nome = nome;
            aluno.idade = idade;
            aluno.altura = altura;
            aluno.peso = peso;
        }
    }

    apagarAluno(id: number): void {
        const alunoIndex = this.alunos.findIndex((aluno) => aluno.id === id);
        if (alunoIndex !== -1) {
            this.alunos.splice(alunoIndex, 1);
        }
    }

    getNumAlunos(): number {
        return this.alunos.length;
    }

    getMediaIdades(): number {
        const totalIdades = this.alunos.reduce((acc, aluno) => acc + aluno.idade, 0);
        return totalIdades / this.alunos.length;
    }

    getMediaAlturas(): number {
        const totalAlturas = this.alunos.reduce((acc, aluno) => acc + aluno.altura, 0);
        return totalAlturas / this.alunos.length;
    }

    getMediaPesos(): number {
        const totalPesos = this.alunos.reduce((acc, aluno) => acc + aluno.peso, 0);
        return totalPesos / this.alunos.length;
    }

    getAlunos(): Aluno[] {
        return this.alunos;
    }
}


    const turma = new Turma();
    const adicionarAlunoForm = document.getElementById("adicionar-aluno-form") as HTMLFormElement;
    const listaAlunos = document.getElementById("lista-alunos") as HTMLUListElement;
    const editarAlunoForm = document.getElementById("editar-aluno-form") as HTMLFormElement;
    const cancelarEdicaoButton = document.getElementById("cancelar-edicao") as HTMLButtonElement;
    function atualizarEstatisticas() {
        const numAlunosElement = document.getElementById("num-alunos") as HTMLSpanElement;
        const mediaIdadesElement = document.getElementById("media-idades") as HTMLSpanElement;
        const mediaAlturasElement = document.getElementById("media-alturas") as HTMLSpanElement;
        const mediaPesosElement = document.getElementById("media-pesos") as HTMLSpanElement;
        numAlunosElement.textContent = turma.getNumAlunos().toString();
        mediaIdadesElement.textContent = turma.getMediaIdades().toFixed(2);
        mediaAlturasElement.textContent = turma.getMediaAlturas().toFixed(2);
        mediaPesosElement.textContent = turma.getMediaPesos().toFixed(2);
    }
    function atualizarListaAlunos() {
        listaAlunos.innerHTML = ""; 
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
    function adicionarAluno(nome: string, idade: number, altura: number, peso: number) {
        const aluno = turma.adicionarAluno(nome, idade, altura, peso);
        atualizarListaAlunos();
        atualizarEstatisticas();
        return aluno;
    }
    function editarAluno(id: number) {
        const aluno = turma.getAlunos().find((aluno) => aluno.id === id);
        if (aluno) {
            const alunoIdEdit = document.getElementById("aluno-id-edit") as HTMLInputElement;
            const nomeEdit = document.getElementById("nome-edit") as HTMLInputElement;
            const idadeEdit = document.getElementById("idade-edit") as HTMLInputElement;
            const alturaEdit = document.getElementById("altura-edit") as HTMLInputElement;
            const pesoEdit = document.getElementById("peso-edit") as HTMLInputElement;
            alunoIdEdit.value = aluno.id.toString();
            nomeEdit.value = aluno.nome;
            idadeEdit.value = aluno.idade.toString();
            alturaEdit.value = aluno.altura.toString();
            pesoEdit.value = aluno.peso.toString();
            editarAlunoForm.style.display = "block";
            cancelarEdicaoButton.style.display = "block";
        }
    }
    function apagarAluno(id: number) {
        const alunoIndex = turma.getAlunos().findIndex((aluno) => aluno.id === id);
        if (alunoIndex !== -1) {
            turma.getAlunos().splice(alunoIndex, 1);
            atualizarListaAlunos();
            atualizarEstatisticas();
            editarAlunoForm.style.display = "none";
            cancelarEdicaoButton.style.display = "none";
        }
    }
    adicionarAlunoForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const nome = (document.getElementById("nome") as HTMLInputElement).value;
        const idade = parseInt((document.getElementById("idade") as HTMLInputElement).value);
        const altura = parseFloat((document.getElementById("altura") as HTMLInputElement).value);
        const peso = parseFloat((document.getElementById("peso") as HTMLInputElement).value);
        const aluno = turma.adicionarAluno(nome, idade, altura, peso);
        adicionarAluno(nome, idade, altura, peso);
        atualizarListaAlunos();
        adicionarAlunoForm.reset();
    });
    document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("editar-aluno-button")?.addEventListener("click", () => {
        editarAlunoForm.style.display = "block";
        cancelarEdicaoButton.style.display = "block";
    });
    cancelarEdicaoButton?.addEventListener("click", () => {
        editarAlunoForm.style.display = "none";
        cancelarEdicaoButton.style.display = "none";
    });
    editarAlunoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const alunoIdEdit = parseInt((document.getElementById("aluno-id-edit") as HTMLInputElement).value);
    const nomeEdit = (document.getElementById("nome-edit") as HTMLInputElement).value;
    const idadeEdit = parseInt((document.getElementById("idade-edit") as HTMLInputElement).value);
    const alturaEdit = parseFloat((document.getElementById("altura-edit") as HTMLInputElement).value);
    const pesoEdit = parseFloat((document.getElementById("peso-edit") as HTMLInputElement).value);
    turma.editarAluno(alunoIdEdit, nomeEdit, idadeEdit, alturaEdit, pesoEdit);

    atualizarListaAlunos();
    atualizarEstatisticas();

 
    editarAlunoForm.style.display = "none";
    cancelarEdicaoButton.style.display = "none";
});
    atualizarListaAlunos();
    atualizarEstatisticas();
});