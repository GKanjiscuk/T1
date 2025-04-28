import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";

export default class DeletarPets {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public deletar(): void {
        console.log("\nRemoção de Pet");

        if (this.clientes.length === 0) {
            console.log("Não há clientes cadastrados.");
            return;
        }

        console.log("Clientes:");
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome}`);
        });

        let indiceCliente = this.entrada.receberNumero("Escolha o número do cliente dono do pet: ") - 1;

        if (indiceCliente < 0 || indiceCliente >= this.clientes.length) {
            console.log("Cliente não encontrado.");
            return;
        }

        const clienteSelecionado = this.clientes[indiceCliente];
        const pets = clienteSelecionado.getPets;

        if (pets.length === 0) {
            console.log(`O cliente ${clienteSelecionado.nome} não possui pets.`);
            return;
        }

        console.log(`Pets de ${clienteSelecionado.nome}:`);
        pets.forEach((pet, index) => {
            console.log(`${index + 1} - ${pet.getNome()} (${pet.getTipo()} - ${pet.getRaca()})`);
        });

        let indicePet = this.entrada.receberNumero("Informe o número do pet a ser removido: ") - 1;

        if (indicePet < 0 || indicePet >= pets.length) {
            console.log("Pet não encontrado.");
            return;
        }

        const petRemovido = pets.splice(indicePet, 1)[0];
        console.log(`Pet "${petRemovido.getNome()}" removido com sucesso.`);
    }
}
