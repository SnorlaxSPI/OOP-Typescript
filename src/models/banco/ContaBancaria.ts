export class ContaBancaria {
  saldo: number;
  
  constructor() {
    this.saldo = 0;
  }
  Consultar(): number {
    return this.saldo;
  }

  Depositar(valor: number): boolean {
    if (valor > 0) {
      this.saldo += valor;
      return true;
   }
   return false
  }

  Sacar(valor: number): boolean {
    if (valor >= 0 && this.saldo >= valor) {
      this.saldo -= valor;
      return true;
    }
    return false
  }
}
