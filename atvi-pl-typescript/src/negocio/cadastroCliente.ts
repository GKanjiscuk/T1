import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import Cadastro from "./cadastro"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);

        let nome: string = ''
        while (nome.trim() === '') {
            nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
            if (nome.trim() === '') {
                console.log('⚠️ Nome não pode ser vazio!');
            }
        }

        let nomeSocial: string = ''
        while (nomeSocial.trim() === '') {
            nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
            if (nomeSocial.trim() === '') {
                console.log('⚠️ Nome social não pode ser vazio!');
            }
        }

        let valor: string = ''
        while (!/^\d{11}$/.test(valor)) {
            valor = this.entrada.receberTexto(`Por favor informe o número do CPF (apenas números, 11 dígitos): `)
            if (!/^\d{11}$/.test(valor)) {
                console.log('⚠️ CPF inválido! Deve conter exatamente 11 dígitos numéricos.');
            }
        }

        let data: string = ''
        let dataEmissao: Date
        while (true) {
            data = this.entrada.receberTexto(`Por favor informe a data de emissão do CPF (dd/mm/yyyy): `)
            let partesData = data.split('/')
            if (partesData.length === 3) {
                let dia = Number(partesData[0])
                let mes = Number(partesData[1]) - 1
                let ano = Number(partesData[2])
                dataEmissao = new Date(ano, mes, dia)
                if (!isNaN(dataEmissao.getTime())) {
                    break
                }
            }
            console.log('⚠️ Data inválida! Use o formato correto: dd/mm/yyyy.');
        }

        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, nomeSocial, cpf);
        this.clientes.push(cliente)

        console.log(`\n✅ Cadastro concluído com sucesso!\n`);
    }
}
