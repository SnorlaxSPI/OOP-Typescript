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
  cor: string
  constructor(t: string, n: string, i: number, c: string) {
    super(t, n , i);
    this.cor = c;
  }
}

class cachorro extends animal {
  raca: string;
  constructor(t: string, n: string, i: number, r: string) {
    super(t, n, i);
    this.raca = r;
  }
}

export { animal, cachorro, gente };