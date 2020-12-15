import { Component, OnInit } from '@angular/core';
import { Transferencia } from 'src/app/models/transferencia.model';

@Component({
  selector: 'app-transferencia-view',
  templateUrl: './transferencia-view.component.html',
  styleUrls: ['./transferencia-view.component.css']
})
export class TransferenciaViewComponent implements OnInit {

  mock_transferencia: Transferencia ={
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


  constructor() { }

  ngOnInit(): void {
  }
}
