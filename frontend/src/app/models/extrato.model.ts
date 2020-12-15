import { Conta } from "./conta.model";
import { Deposito } from "./deposito.model";
import { Saque } from "./saque.model";
import { Transferencia } from "./transferencia.model";

export interface Extrato {    
    data: string;
    valor: number;
    operacaoDeposito?:Deposito;
    operacaoSaque?: Saque;
    operacaoTransferencia?: Transferencia;
}