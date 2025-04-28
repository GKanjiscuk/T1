import Produto from "../modelo/produto";
import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";

export default class AtualizarProduto {
    private empresa: Empresa;
    private entrada: Entrada;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        const produtos = this.empresa.getProdutos;

        if (produtos.length === 0) {
            console.log("\nNenhum produto cadastrado.");
            return;
        }

        console.log("\nProdutos disponíveis:");
        produtos.forEach((produto, index) => {
            console.log(`${index + 1} - ${produto.getNome()} (R$ ${produto.getPreco().toFixed(2)})`);
        });

        let indice = this.entrada.receberNumero("Informe o número do produto que deseja atualizar: ") - 1;

        if (indice < 0 || indice >= produtos.length) {
            console.log("Produto não encontrado.");
            return;
        }

        const produto = produtos[indice];

        const novoNome = this.entrada.receberTexto("Novo nome do produto: ");
        const novoPreco = this.entrada.receberNumero("Novo preço do produto: ");

        produto.setNome(novoNome);
        produto.setPreco(novoPreco);

        console.log("Produto atualizado com sucesso!");
    }
}
