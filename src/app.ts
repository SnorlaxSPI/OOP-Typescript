import { carro } from './models/animal/carro';
import { pessoa } from './models/animal/pessoa';
import { cachorro, gente } from './models/animal/animal';
import { tlou } from './models/games/interface';
import { ContaBancaria } from './models/banco/ContaBancaria';

//let c = new carro('Gol','Cinza', 2018, 30000);
//let p1 = new pessoa('Alessandro', 47);
//let c1 = new cachorro('cachorro', 'Bob', 2, 'Poodle');
//let g1 = new gente('Humano', 'Marley', 25, 'Negro')


//c.getInfo();
//p1.Pessoa();
//c1.Cachorro();
//g1.Gente();
//tlou.getSimilars(tlou.title);

//console.log(tlou.title);

const cb = new ContaBancaria()
let saldoAtual: number = cb.Consultar();
console.log(`Saldo Inicial: ${saldoAtual}`);

let itsOk:boolean = cb.Depositar(50);
if (!itsOk) {
  console.log('Não foi possível realizar o depósito')
} else {
  saldoAtual = cb.Consultar()
  console.log(`Saldo Atual: ${saldoAtual}`);
}

itsOk = cb.Depositar(100);
if (!itsOk) {
  console.log('Não foi possível realizar o depósito')
} else {
  saldoAtual = cb.Consultar()
  console.log(`Saldo Atual: ${saldoAtual}`);
}

itsOk = cb.Sacar(30);
if (!itsOk) {
  console.log('Não foi possível realizar o saque')
} else {
  saldoAtual = cb.Consultar()
  console.log(`Saldo Atual: ${saldoAtual}`);
}

itsOk = cb.Sacar(5);
if (!itsOk) {
  console.log('Não foi possível realizar o saque')
} else {
  saldoAtual = cb.Consultar()
  console.log(`Saldo Atual: ${saldoAtual}`);
}



