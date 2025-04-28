import Empresa from "../modelo/empresa";

export default class ListagemTop10Clientes {
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

    
        const clientesOrdenados = clientes
            .map(cliente => {
                const totalConsumos = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
                return {
                    nome: cliente.nome,
                    totalConsumos: totalConsumos
                };
            })
            .sort((a, b) => b.totalConsumos - a.totalConsumos)
            .slice(0, 10);

        console.log(`\nTop 10 clientes que mais consumiram produtos e serviços:\n`);
        clientesOrdenados.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome} - ${cliente.totalConsumos} itens consumidos`);
        });
    }
}
