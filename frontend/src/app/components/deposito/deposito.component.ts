import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Deposito } from 'src/app/models/deposito.model';
import * as objectHash from 'object-hash';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {  
  options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  dataAtual = new Date().toLocaleDateString('pt-BR', this.options);
  hash: any;

  deposito: Deposito ={
    data: '',
    hash: '',
    valor: 0,    
    conta: {
      hash: '',
      cliente:{
        cpf: '', 
        nome: ''
      },
      saldo: 0.00
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  cadastrarDeposito(): void {
    alert("Depósito criado com sucesso!");
    this.deposito.hash = this.hash;
    console.log(this.deposito);
  }

}