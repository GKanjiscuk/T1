import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Servico from "../modelo/servico";

export default class AtualizarServico {
    private empresa: Empresa;
    private entrada: Entrada;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        const servicos = this.empresa.getServicos;

        if (servicos.length === 0) {
            console.log("\nNenhum serviço cadastrado.");
            return;
        }

        console.log("\nServiços disponíveis:");
        servicos.forEach((servico, index) => {
            console.log(`${index + 1} - ${servico.getNome()} (R$ ${servico.getPreco().toFixed(2)})`);
        });

        let indice = this.entrada.receberNumero("Informe o número do serviço a ser atualizado: ") - 1;

        if (indice < 0 || indice >= servicos.length) {
            console.log("Serviço não encontrado.");
            return;
        }

        const servico = servicos[indice];

        const novoNome = this.entrada.receberTexto("Novo nome do serviço: ");
        const novoPreco = this.entrada.receberNumero("Novo preço do serviço: ");

        servico.setNome(novoNome);
        servico.setPreco(novoPreco);

        console.log("Serviço atualizado com sucesso.");
    }
}
