export default class animal {
  tipo: string;
  nome: string;
  idade: number;

  constructor(t: string, n: string, i:number) {
    this.tipo = t;
    this.nome = n;
    this.idade = i;
  } 
}

class gente extends animal {
  etnia: string
  constructor(t: string, n: string, i: number, c: string) {
    super(t, n , i);
    this.etnia = c;
  }
  Gente(): void {
    console.log(`Nome..: ${this.nome}\nTipo..: ${this.tipo}\nIdade.: ${this.idade}\nEtnia.: ${this.etnia}`);
  }
}

class cachorro extends animal {
  raca: string;
  constructor(t: string, n: string, i: number, r: string) {
    super(t, n, i);
    this.raca = r;
  }
  Cachorro(): void {
      console.log(`Nome..: ${this.nome}\nTipo..: ${this.tipo}\nIdade.: ${this.idade}\nRaça..: ${this.raca}`);
      console.log('------------------------');
    }
  }

export { animal, cachorro, gente };