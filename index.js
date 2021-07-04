import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente01 = new Cliente("Gabriel", 2329223123);
const cliente02 = new Cliente("Felipe", 325341223);

const contaCorrente01 = new ContaCorrente(102, cliente01);
const contaCorrente02 = new ContaCorrente(103, cliente02);

contaCorrente01.depositar(500);
contaCorrente02.depositar(40);
contaCorrente01.transferir(50, contaCorrente02);

console.log(contaCorrente01);
console.log(contaCorrente02);