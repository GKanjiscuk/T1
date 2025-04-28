import Empresa from "../modelo/empresa";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class ListagemMaisConsumidos {
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

        const contagemProdutos = new Map<string, number>();
        const contagemServicos = new Map<string, number>();

        
        clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                contagemProdutos.set(
                    produto.getNome(),
                    (contagemProdutos.get(produto.getNome()) || 0) + 1
                );
            });

            cliente.getServicosConsumidos.forEach(servico => {
                contagemServicos.set(
                    servico.getNome(),
                    (contagemServicos.get(servico.getNome()) || 0) + 1
                );
            });
        });

        console.log(`\nProdutos mais consumidos:\n`);
        const produtosOrdenados = Array.from(contagemProdutos.entries())
            .sort((a, b) => b[1] - a[1]); 

        produtosOrdenados.forEach(([nome, quantidade], index) => {
            console.log(`${index + 1} - ${nome}: ${quantidade} vezes`);
        });

        console.log(`\nServiços mais consumidos:\n`);
        const servicosOrdenados = Array.from(contagemServicos.entries())
            .sort((a, b) => b[1] - a[1]); 

        servicosOrdenados.forEach(([nome, quantidade], index) => {
            console.log(`${index + 1} - ${nome}: ${quantidade} vezes`);
        });
    }
}
