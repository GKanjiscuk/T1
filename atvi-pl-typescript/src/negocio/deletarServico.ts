import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";

export default class DeletarServico {
    private empresa: Empresa;
    private entrada: Entrada;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.entrada = new Entrada();
    }

    public deletar(): void {
        const servicos = this.empresa.getServicos;

        if (servicos.length === 0) {
            console.log("\nNenhum serviço cadastrado.");
            return;
        }

        console.log("\nServiços disponíveis:");
        servicos.forEach((servico, index) => {
            console.log(`${index + 1} - ${servico.getNome()} (R$ ${servico.getPreco().toFixed(2)})`);
        });

        let indice = this.entrada.receberNumero("Informe o número do serviço a ser removido: ") - 1;

        if (indice < 0 || indice >= servicos.length) {
            console.log("Serviço não encontrado.");
            return;
        }

        const servicoRemovido = servicos.splice(indice, 1)[0];
        console.log(`Serviço "${servicoRemovido.getNome()}" removido com sucesso.`);
    }
}
