import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Empresa from "../modelo/empresa";

export default class RegistrarConsumo {
    private empresa: Empresa;
    private entrada: Entrada;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.entrada = new Entrada();
    }

    public registrar(): void {
        const clientes = this.empresa.getClientes;

        if (clientes.length === 0) {
            console.log("Nenhum cliente cadastrado.");
            return;
        }

        console.log("\nClientes:");
        clientes.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome}`);
        });

        let indiceCliente = this.entrada.receberNumero("Escolha o número do cliente: ") - 1;

        if (indiceCliente < 0 || indiceCliente >= clientes.length) {
            console.log("Cliente não encontrado.");
            return;
        }

        const cliente = clientes[indiceCliente];

        let escolha = this.entrada.receberNumero("Digite 1 para registrar produto ou 2 para registrar serviço: ");

        if (escolha === 1) {
            const produtos = this.empresa.getProdutos;
            if (produtos.length === 0) {
                console.log("Nenhum produto disponível.");
                return;
            }

            console.log("\nProdutos disponíveis:");
            produtos.forEach((produto, index) => {
                console.log(`${index + 1} - ${produto.getNome()} (R$ ${produto.getPreco().toFixed(2)})`);
            });

            let indiceProduto = this.entrada.receberNumero("Informe o número do produto consumido: ") - 1;

            if (indiceProduto < 0 || indiceProduto >= produtos.length) {
                console.log("Produto não encontrado.");
                return;
            }

            cliente.adicionarProduto(produtos[indiceProduto]);
            console.log("Produto registrado com sucesso!");

        } else if (escolha === 2) {
            const servicos = this.empresa.getServicos;
            if (servicos.length === 0) {
                console.log("Nenhum serviço disponível.");
                return;
            }

            console.log("\nServiços disponíveis:");
            servicos.forEach((servico, index) => {
                console.log(`${index + 1} - ${servico.getNome()} (R$ ${servico.getPreco().toFixed(2)})`);
            });

            let indiceServico = this.entrada.receberNumero("Informe o número do serviço consumido: ") - 1;

            if (indiceServico < 0 || indiceServico >= servicos.length) {
                console.log("Serviço não encontrado.");
                return;
            }

            cliente.adicionarServico(servicos[indiceServico]);
            console.log("Serviço registrado com sucesso!");
        } else {
            console.log("Opção inválida.");
        }
    }
}
