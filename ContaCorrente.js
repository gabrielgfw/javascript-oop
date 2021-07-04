import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  agencia;
  _cliente;
  _saldo;

  constructor(agencia, cliente) {
    this.agencia = agencia;
    this._cliente = cliente;
    this._saldo = 0;
  }

  set cliente(cliente) {
    if(cliente instanceof Cliente) {
      this._cliente = cliente;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  sacar(valor) {
    if(this._saldo >= valor) {
      this._saldo -= valor;
    }
  }

  depositar(valor) {
    if(valor > 0) {
      this._saldo += valor;
    }
  }

  transferir(valor, conta) {
    this.sacar(valor);
    conta.depositar(valor);
  }
}