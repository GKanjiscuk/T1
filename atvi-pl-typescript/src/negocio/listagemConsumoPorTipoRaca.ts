import Empresa from "../modelo/empresa";

export default class ListagemConsumoPorTipoRaca {
    private empresa: Empresa;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
    }

    public listar(): void {
        const clientes = this.empresa.getClientes;

        if (clientes.length === 0) {
            console.log("Nenhum cliente cadastrado.");
            return;
        }

        const consumoPorTipoRaca = new Map<string, number>();

        clientes.forEach(cliente => {
            cliente.getPets.forEach(pet => {
                const chave = `${pet.getTipo()} - ${pet.getRaca()}`;

                // Conta produtos
                cliente.getProdutosConsumidos.forEach(produto => {
                    consumoPorTipoRaca.set(
                        chave,
                        (consumoPorTipoRaca.get(chave) || 0) + 1
                    );
                });

                // Conta serviços
                cliente.getServicosConsumidos.forEach(servico => {
                    consumoPorTipoRaca.set(
                        chave,
                        (consumoPorTipoRaca.get(chave) || 0) + 1
                    );
                });
            });
        });

        console.log(`\nConsumo de Produtos e Serviços por Tipo e Raça de Pet:\n`);

        const consumoOrdenado = Array.from(consumoPorTipoRaca.entries())
            .sort((a, b) => b[1] - a[1]);

        consumoOrdenado.forEach(([tipoRaca, quantidade], index) => {
            console.log(`${index + 1} - ${tipoRaca}: ${quantidade} consumos`);
        });
    }
}
