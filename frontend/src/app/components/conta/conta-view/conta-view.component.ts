import { Component, OnInit } from '@angular/core';
import { Conta } from 'src/app/models/conta.model';

@Component({
  selector: 'app-conta-view',
  templateUrl: './conta-view.component.html',
  styleUrls: ['./conta-view.component.css']
})
export class ContaViewComponent implements OnInit {

  mock_conta: Conta = {
    hash: 'de9f2c7fd25e1b3afad3e85a0bd17d9b100db4b3',
    cliente: {
      cpf: '341.000.658-44', 
      nome: "Sophie"
    },
    saldo: 2000.00
  }

  constructor() { }

  ngOnInit(): void {
  }

}
