import { Component, OnInit } from '@angular/core';
import { Deposito } from 'src/app/model/deposito.model';
import { Saque } from 'src/app/model/saque.model';

@Component({
  selector: 'app-saque-view',
  templateUrl: './saque-view.component.html',
  styleUrls: ['./saque-view.component.css']
})
export class SaqueViewComponent implements OnInit {

  mock_saque: Saque ={
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

  constructor() { }

  ngOnInit(): void {
  }
}
