export class pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
  Pessoa() : void {
    console.log(`Nome..: ${this.nome}\nIdade.: ${this.idade}` );
    console.log('-------------------');
  }
}
