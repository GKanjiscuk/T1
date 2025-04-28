import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Empresa from "../modelo/empresa";

export default class CadastroServico {
    private empresa: Empresa;
    private entrada: Entrada;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log("\nCadastro de Serviço");

        let nome = "";
        while (nome.trim() === "") {
            nome = this.entrada.receberTexto("Informe o nome do serviço: ");
            if (nome.trim() === "") console.log("Nome não pode ser vazio.");
        }

        let preco = -1;
        while (isNaN(preco) || preco < 0) {
            preco = this.entrada.receberNumero("Informe o preço do serviço: ");
            if (isNaN(preco) || preco < 0) console.log("Preço inválido.");
        }

        const servico = new Servico(nome, preco);
        this.empresa.getServicos.push(servico);

        console.log(`\nServiço "${nome}" cadastrado com sucesso.\n`);
    }
}
