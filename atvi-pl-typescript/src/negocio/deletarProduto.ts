import Produto from "../modelo/produto";
import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";

export default class DeletarProduto {
    private empresa: Empresa;
    private entrada: Entrada;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.entrada = new Entrada();
    }

    public deletar(): void {
        const produtos = this.empresa.getProdutos;

        if (produtos.length === 0) {
            console.log("\nNenhum produto cadastrado.");
            return;
        }

        console.log("\nProdutos disponíveis:");
        produtos.forEach((produto, index) => {
            console.log(`${index + 1} - ${produto.getNome()} (R$ ${produto.getPreco().toFixed(2)})`);
        });

        let indice = this.entrada.receberNumero("Informe o número do produto a ser removido: ") - 1;

        if (indice < 0 || indice >= produtos.length) {
            console.log("Produto não encontrado.");
            return;
        }

        const produtoRemovido = produtos.splice(indice, 1)[0];
        console.log(`Produto "${produtoRemovido.getNome()}" removido com sucesso.`);
    }
}
