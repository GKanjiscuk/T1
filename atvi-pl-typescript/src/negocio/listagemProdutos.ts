import Produto from "../modelo/produto";
import Empresa from "../modelo/empresa";

export default class ListagemProdutos {
    private empresa: Empresa;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
    }

    public listar(): void {
        const produtos = this.empresa.getProdutos;

        console.log(`\nLista de Produtos:\n`);
        if (produtos.length === 0) {
            console.log("Nenhum produto cadastrado.");
            return;
        }

        produtos.forEach((produto, index) => {
            console.log(`${index + 1} - ${produto.getNome()} - R$ ${produto.getPreco().toFixed(2)}`);
        });
    }
}
