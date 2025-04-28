import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroPets from "../negocio/cadastroPets";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemPets from "../negocio/listagemPets";
import AtualizarCliente from "../negocio/atualizarCliente";
import DeletarCliente from "../negocio/deletarCliente";
import DeletarPets from "../negocio/deletarPet";
import AtualizarPet from "../negocio/atualizarPet";
import CadastroProduto from "../negocio/cadastroProduto";
import ListagemProdutos from "../negocio/listagemProdutos";
import AtualizarProduto from "../negocio/atualizarProduto";
import DeletarProduto from "../negocio/deletarProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemServicos from "../negocio/listagemServicos";
import AtualizarServico from "../negocio/atualizarServico";
import DeletarServico from "../negocio/deletarServico";
import RegistrarConsumo from "../negocio/registrarConsumo";
import ListagemTop10Clientes from "../negocio/listagemTop10Clientes";
import ListagemMaisConsumidos from "../negocio/listagemMaisConsumidos";
import ListagemConsumoPorTipoRaca from "../negocio/listagemConsumoPorTipoRaca";






console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`);
let empresa = new Empresa();
let execucao = true;

while (execucao) {
    console.log(`\n--- MENU PRINCIPAL ---`);

    console.log(`\nClientes:`);
    console.log(`  1 - Cadastrar cliente`);
    console.log(`  2 - Listar todos os clientes`);
    console.log(`  3 - Atualizar cliente`);
    console.log(`  4 - Deletar cliente`);

    console.log(`\nPets:`);
    console.log(`  5 - Cadastrar pet`);
    console.log(`  6 - Listar pets por cliente`);
    console.log(`  7 - Atualizar pet`);
    console.log(`  8 - Deletar pet`);

    console.log(`\nProdutos:`);
    console.log(`  9 - Cadastrar produto`);
    console.log(` 10 - Listar produtos`);
    console.log(` 11 - Atualizar produto`);
    console.log(` 12 - Deletar produto`);

    console.log(`\nServiços:`);
    console.log(` 13 - Cadastrar serviço`);
    console.log(` 14 - Listar serviços`);
    console.log(` 15 - Atualizar serviço`);
    console.log(` 16 - Deletar serviço`);

    console.log(`\nConsumos:`);
    console.log(` 17 - Registrar consumo de produto ou serviço`);
    console.log(` 18 - Listar Top 10 clientes que mais consumiram`);
    console.log(` 19 - Listar produtos e serviços mais consumidos`);
    console.log(` 20 - Listar consumo por tipo e raça de pets`);



    console.log(`\n0 - Sair`);

    let entrada = new Entrada();
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

    switch (opcao) {
        case 1:
            new CadastroCliente(empresa.getClientes).cadastrar();
            break;
        case 2:
            new ListagemClientes(empresa.getClientes).listar();
            break;
        case 3:
            new AtualizarCliente(empresa.getClientes).atualizar();
            break;
        case 4:
            new DeletarCliente(empresa.getClientes).deletar();
            break;
        case 5:
            new CadastroPets(empresa.getClientes).cadastrar();
            break;
        case 6:
            new ListagemPets(empresa.getClientes).listar();
            break;
        case 7:
            new AtualizarPet(empresa.getClientes).atualizar();
            break;
        case 8:
            new DeletarPets(empresa.getClientes).deletar();
            break;
        case 9:
            new CadastroProduto(empresa).cadastrar();
            break;
        case 10:
            new ListagemProdutos(empresa).listar();
            break;
        case 11:
            new AtualizarProduto(empresa).atualizar();
            break;
        case 12:
            new DeletarProduto(empresa).deletar();
            break;
        case 13:
            new CadastroServico(empresa).cadastrar();
            break;
        case 14:
            new ListagemServicos(empresa).listar();
            break;
        case 15:
            new AtualizarServico(empresa).atualizar();
            break;
        case 16:
            new DeletarServico(empresa).deletar();
            break;
        case 17:
            new RegistrarConsumo(empresa).registrar();
            break;
        case 18:
            new ListagemTop10Clientes(empresa).listar();
            break;
        case 19:
            new ListagemMaisConsumidos(empresa).listar();
            break;
        case 20:
            new ListagemConsumoPorTipoRaca(empresa).listar();
            break;
                
        case 0:
            execucao = false;
            console.log(`Até mais`);
            break;
        default:
            console.log(`Operação não entendida`);
    }
}
