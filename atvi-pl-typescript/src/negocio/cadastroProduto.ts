import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Empresa from "../modelo/empresa";

export default class CadastroProduto {
    private empresa: Empresa;
    private entrada: Entrada;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log("\nCadastro de Produto");

        let nome = "";
        while (nome.trim() === "") {
            nome = this.entrada.receberTexto("Informe o nome do produto: ");
            if (nome.trim() === "") {
                console.log("Nome não pode ser vazio.");
            }
        }

        let preco = -1;
        while (isNaN(preco) || preco < 0) {
            preco = this.entrada.receberNumero("Informe o preço do produto (ex: 19.90): ");
            if (isNaN(preco) || preco < 0) {
                console.log("Preço inválido. Deve ser um número positivo.");
            }
        }

        const produto = new Produto(nome, preco);
        this.empresa.getProdutos.push(produto);

        console.log(`\nProduto "${nome}" cadastrado com sucesso.\n`);
    }
}
