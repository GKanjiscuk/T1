import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";

export default class AtualizarCliente {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        console.log("\nAtualização de cliente");

        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome}`);
        });

        let indice = this.entrada.receberNumero("Informe o número do cliente que deseja atualizar: ") - 1;

        if (indice < 0 || indice >= this.clientes.length) {
            console.log("Cliente não encontrado.");
            return;
        }

        let cliente = this.clientes[indice];
        let novoNome = this.entrada.receberTexto("Novo nome: ");
        let novoNomeSocial = this.entrada.receberTexto("Novo nome social: ");

        cliente.nome = novoNome;
        cliente.nomeSocial = novoNomeSocial;

        console.log("Cliente atualizado com sucesso.");
    }
}
