import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemPets extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista de Pets por Cliente:\n`);
        this.clientes.forEach(cliente => {
            console.log(`Cliente: ${cliente.nome}`);
            const pets = cliente.getPets;
            if (pets.length === 0) {
                console.log("  Nenhum pet cadastrado.");
            } else {
                pets.forEach(pet => {
                    console.log(`    Pet: ${pet.getNome()}`);
                    console.log(`    Tipo: ${pet.getTipo()}`);
                    console.log(`    Raça: ${pet.getRaca()}`);
                    console.log(`    Gênero: ${pet.getGenero()}`);
                });
            }
            console.log(`--------------------------------------`);
        });
    }
}
