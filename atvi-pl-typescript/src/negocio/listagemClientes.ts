import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);

            const pets = cliente.getPets;
            if (pets.length > 0) {
                console.log(`Pets:`);
                pets.forEach((pet, index) => {
                    console.log(`  ${index + 1}. Nome: ${pet.getNome()}, Tipo: ${pet.getTipo()}, Raça: ${pet.getRaca()}, Gênero: ${pet.getGenero()}`);
                });
            } else {
                console.log(`Pets: Nenhum pet cadastrado.`);
            }

            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}
