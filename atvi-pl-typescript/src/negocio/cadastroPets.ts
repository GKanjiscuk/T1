import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Cadastro from "./cadastro";

export default class CadastroPets extends Cadastro {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do pet`);

        if (this.clientes.length === 0) {
            console.log("Nenhum cliente cadastrado. Cadastre um cliente antes de adicionar um pet.");
            return;
        }

        console.log("Clientes cadastrados:");
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome}`);
        });

        let indiceCliente: number = -1;
        while (indiceCliente < 0 || indiceCliente >= this.clientes.length) {
            indiceCliente = this.entrada.receberNumero("Escolha o número do cliente dono do pet: ") - 1;
            if (indiceCliente < 0 || indiceCliente >= this.clientes.length) {
                console.log("Número inválido. Escolha um cliente da lista.");
            }
        }

        const clienteSelecionado = this.clientes[indiceCliente];

        let nome: string = "";
        while (nome.trim() === "") {
            nome = this.entrada.receberTexto("Informe o nome do pet: ");
            if (nome.trim() === "") console.log("Nome não pode ser vazio.");
        }

        let tipo: string = "";
        while (tipo.trim() === "") {
            tipo = this.entrada.receberTexto("Informe o tipo do pet (ex: cachorro, gato): ");
            if (tipo.trim() === "") console.log("Tipo não pode ser vazio.");
        }

        let raca: string = "";
        while (raca.trim() === "") {
            raca = this.entrada.receberTexto("Informe a raça do pet: ");
            if (raca.trim() === "") console.log("Raça não pode ser vazia.");
        }

        let genero: string = "";
        while (!["M", "F"].includes(genero.toUpperCase())) {
            genero = this.entrada.receberTexto("Informe o gênero do pet (M/F): ");
            if (!["M", "F"].includes(genero.toUpperCase())) {
                console.log("Gênero inválido. Use apenas M ou F.");
            }
        }

        const pet = new Pet(nome, raca, genero.toUpperCase(), tipo);
        clienteSelecionado.adicionarPet(pet);

        console.log(`\nPet '${nome}' cadastrado com sucesso para o cliente ${clienteSelecionado.nome}.\n`);
    }
}
