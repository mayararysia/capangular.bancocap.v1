import { Component, OnInit } from '@angular/core';
import { Deposito } from 'src/app/models/deposito.model';

@Component({
  selector: 'app-deposito-view',
  templateUrl: './deposito-view.component.html',
  styleUrls: ['./deposito-view.component.css']
})
export class DepositoViewComponent implements OnInit {

  mock_deposito: Deposito ={
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

  constructor() { }

  ngOnInit(): void {
  }
}
