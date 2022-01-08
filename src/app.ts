import { cachorro, gente } from './animal';
import { pessoa } from './pessoa';

let p1 = new pessoa('Alessandro', 47);
let c1 = new cachorro('cachorro', 'Bob', 2, 'Poodle');
let g1 = new gente('Humano', 'Marley', 25, 'Negro')

//console.log(`Nome: ${p1.nome}\nIdade: ${p1.idade}` );
p1.Pessoa();
//console.log('------------------------')
c1.Cachorro();
//console.log(`Nome: ${c1.nome}\nTipo: ${c1.tipo}`);
//console.log('------------------------')
g1.Gente();
//console.log(`Nome: ${g1.nome}\nTipo: ${g1.tipo}\nIdade: ${g1.idade}\nCor: ${g1.cor}`);
