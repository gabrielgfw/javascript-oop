import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente01 = new Cliente();
const contaCorrente01 = new ContaCorrente();

cliente01.nome = "Gabriel";
cliente01.cpf = 2329223123;
cliente01.agencia = 2321;

contaCorrente01.cliente = cliente01;

console.log(cliente01);
console.log(contaCorrente01);