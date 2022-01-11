export default class carro {
  marca: string;
  cor: string;
  ano: number;
  valor: number;

  constructor(m: string, c: string, a: number, v: number) {
    this.marca = m;
    this.cor = c;
    this.ano = a;
    this.valor = v;
  }

  // getters e setters

  public getValor() {
    return this.valor;
  }

  public setValor(valor: number) {
    this.valor = valor;
  }

  public getInfo() {
    console.log('Exemplo de Getters e Setters');
    console.log(`Marca.: ${this.marca}\nCor...: ${this.cor}\nAno...: ${this.ano}\nValor.: ${this.getValor()}` )
    console.log('-------------------');
  }
}

export { carro };