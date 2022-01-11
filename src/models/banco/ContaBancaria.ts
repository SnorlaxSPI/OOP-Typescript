/**
* Encapsulamento: _saldo que só é possível acessar nos métodos
* Método Getter: Método que dá acesso ao valor de um determinado atributo (provavelmente privado)
* Método Setter: Método que realiza a alteração segura do valor de um determinado atributo (provavelmente privado)
*/

export class ContaBancaria {
  private _saldo: number;
  private _numero: string;
  private _agencia: string;

  
  constructor() {
    this._saldo = 0;
    this._numero = '00000-0';
    this._agencia = '0000-0';
  }

  get numero(): string {
    return this._numero;
  }

  set numero(valor: string) {
    const regex = /^\d{5}-\d{1}$/
    if(regex.test(valor)) {
      this._numero = valor;
    } else {
      console.log('Formato de número inválido!')
    }
  }

  get agencia(): string {
    return this._agencia;
  }

  set agencia(valor: string) {
    const regex = /^\d{4}-\d{1}$/
    if(regex.test(valor)) {
      this._agencia = valor;
    } else {
      console.log('Formato de agência inválido!')
    }
  }


  Consultar(): number {
    return this._saldo;
  }

  Depositar(valor: number): boolean {
    if (valor > 0) {
      this._saldo += valor;
      return true;
   }
   return false
  }

  Sacar(valor: number): boolean {
    if (valor >= 0 && this._saldo >= valor) {
      this._saldo -= valor;
      return true;
    }
    return false
  }
}
