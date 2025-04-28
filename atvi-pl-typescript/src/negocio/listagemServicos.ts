import Empresa from "../modelo/empresa";

export default class ListagemServicos {
    private empresa: Empresa;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
    }

    public listar(): void {
        const servicos = this.empresa.getServicos;

        console.log(`\nLista de Serviços:\n`);
        if (servicos.length === 0) {
            console.log("Nenhum serviço cadastrado.");
            return;
        }

        servicos.forEach((servico, index) => {
            console.log(`${index + 1} - ${servico.getNome()} - R$ ${servico.getPreco().toFixed(2)}`);
        });
    }
}
