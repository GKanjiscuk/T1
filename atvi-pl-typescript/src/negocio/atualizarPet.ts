import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";

export default class AtualizarPet {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        console.log("\nAtualização de pet");

        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome}`);
        });

        let indiceCliente = this.entrada.receberNumero("Informe o número do cliente dono do pet: ") - 1;

        if (indiceCliente < 0 || indiceCliente >= this.clientes.length) {
            console.log("Cliente não encontrado.");
            return;
        }

        let cliente = this.clientes[indiceCliente];

        if (cliente.getPets.length === 0) {
            console.log("Este cliente não possui pets cadastrados.");
            return;
        }

        cliente.getPets.forEach((pet, index) => {
            console.log(`${index + 1} - ${pet.getNome()} (${pet.getTipo()} - ${pet.getRaca()})`);
        });

        let indicePet = this.entrada.receberNumero("Informe o número do pet que deseja atualizar: ") - 1;

        if (indicePet < 0 || indicePet >= cliente.getPets.length) {
            console.log("Pet não encontrado.");
            return;
        }

        let pet = cliente.getPets[indicePet];

        let novoNome = this.entrada.receberTexto("Novo nome do pet: ");
        let novaRaca = this.entrada.receberTexto("Nova raça do pet: ");
        let novoGenero = this.entrada.receberTexto("Novo gênero do pet (M/F): ");
        let novoTipo = this.entrada.receberTexto("Novo tipo do pet (ex: cachorro, gato): ");

        pet.setNome(novoNome);
        pet.setRaca(novaRaca);
        pet.setGenero(novoGenero);
        pet.setTipo(novoTipo);

        console.log("Pet atualizado com sucesso.");
    }
}
