import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente01 = new Cliente();
cliente01.nome = "Gabriel";
cliente01.cpf = 2329223123;
cliente01.agencia = 102;

const cliente02 = new Cliente();
cliente02.nome = "Felipe";
cliente02.cpf = 332329271;
cliente02.agencia = 103;

const contaCorrente01 = new ContaCorrente();
contaCorrente01.cliente = cliente01;

const contaCorrente02 = new ContaCorrente();
contaCorrente02.cliente = cliente02;

contaCorrente01.depositar(500);
contaCorrente02.depositar(40);
contaCorrente01.transferir(50, contaCorrente02);

console.log(contaCorrente01);
console.log(contaCorrente02);