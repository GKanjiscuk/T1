import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";

export default class DeletarCliente {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public deletar(): void {
        console.log("\nRemoção de cliente");

        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome}`);
        });

        let indice = this.entrada.receberNumero("Informe o número do cliente a ser removido: ") - 1;

        if (indice < 0 || indice >= this.clientes.length) {
            console.log("Cliente não encontrado.");
            return;
        }

        let clienteRemovido = this.clientes.splice(indice, 1);
        console.log(`Cliente "${clienteRemovido[0].nome}" removido com sucesso.`);
    }
}
