import Cliente from "./cliente"
import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import Servico from "./servico"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto> = [];
    private servicos: Array<Servico> = [];

    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
        this.preencherDadosIniciais();
    }
    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(): Array<Produto>{
        return this.produtos
    }
    public get getServicos(): Array<Servico> {
        return this.servicos;
    }

    private preencherDadosIniciais(): void {
        // Clientes
        const cpf1 = new CPF("12345678900", new Date(2000, 5, 15));
        const cliente1 = new Cliente("João Silva", "Joãozinho", cpf1);

        const cpf2 = new CPF("98765432100", new Date(1995, 10, 20));
        const cliente2 = new Cliente("Maria Oliveira", "Mari", cpf2);

        // Pets
        const pet1 = new Pet("Rex", "Golden Retriever", "M", "Cachorro");
        const pet2 = new Pet("Mimi", "Persa", "F", "Gato");

        cliente1.adicionarPet(pet1);
        cliente2.adicionarPet(pet2);

        this.clientes.push(cliente1, cliente2);

        // Produtos
        const produto1 = new Produto("Ração Premium", 150.00);
        const produto2 = new Produto("Coleira de couro", 45.90);

        this.produtos.push(produto1, produto2);

        // Serviços
        const servico1 = new Servico("Banho e Tosa", 80.00);
        const servico2 = new Servico("Consulta Veterinária", 120.00);

        this.servicos.push(servico1, servico2);
    }
}