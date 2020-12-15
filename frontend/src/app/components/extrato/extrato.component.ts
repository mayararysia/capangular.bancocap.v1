import { Component, OnInit } from '@angular/core';
import { Deposito } from 'src/app/model/deposito.model';
import { Extrato } from 'src/app/model/extrato.model';
import { Saque } from 'src/app/model/saque.model';
import { Transferencia } from 'src/app/model/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {    
  options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  dataAtual = new Date().toLocaleDateString('pt-BR', this.options);

  mock_extrato_deposito: Extrato = {
    data: '14/12/2020',
    valor: 2000.00,
    operacaoDeposito: {
      data: '14/12/2020',
      valor: 2000.00, 
      hash: 'ge9f2c7fd25e1b3afad3e85a0bd17d9b100db4b3',  
      conta: {
        hash: 'de9f2c7fd25e1b3afad3e85a0bd17d9b100db4b3',
        cliente:{
          cpf: '341.000.658-44', 
          nome: "Sophie"
        },
        saldo: 0.00
      }
    }
  }

  mock_extrato_saque: Extrato = {
    data: '14/12/2020',
    valor: 2000.00,
    operacaoSaque: {
      data: '14/12/2020',
      valor: 2000.00, 
      hash: 'ge9f2c7fd25e1b3afad3e85a0bd17d9b100db4b3',
      conta: {
        hash: 'de9f2c7fd25e1b3afad3e85a0bd17d9b100db4b3',
        cliente:{
          cpf: '341.000.658-44', 
          nome: "Sophie"
        },
        saldo: 10000.00
      }
    }
  }

  mock_extrato_transferencia: Extrato = {
    data: '14/12/2020',
    valor: 2000.00,
    operacaoTransferencia: {
      data: '14/12/2020',
      valor: 2000.00,   
      contaOrigem: {
        hash: 'de9f2c7fd25e1b3afad3e85a0bd17d9b100db4b3',
        cliente:{
         cpf: '341.000.658-44', 
         nome: "Sophie"
        },
        saldo: 10000.00
     },
       contaDestino: {
       hash: '5e9f2c7fd25e1b3afad3e85a0bd17d9b100db4b3',
       cliente:{
          cpf: '441.000.600-44', 
          nome: "Marcus"
        },
        saldo: 10000.00
       }
    }
  }

  constructor() { }

  ngOnInit(): void {
  } 

}