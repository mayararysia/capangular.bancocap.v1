import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Transferencia } from 'src/app/models/transferencia.model';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {  
  options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  dataAtual = new Date().toLocaleDateString('pt-BR', this.options);
  hashOrigem: any;
  hashDestino: any;

  transferencia: Transferencia ={
    data: '',
    valor: 0,    
    contaOrigem: {
      hash: '',
      cliente:{
        nome:'',
        cpf:''
      },
      saldo:0
    },
    contaDestino: {
      hash: '',
      cliente:{
        nome:'',
        cpf:''
      },
      saldo:0
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  transferir(){
    alert("Transferência realizada com sucesso!");
    this.transferencia.contaOrigem.hash = this.hashOrigem;
    this.transferencia.contaDestino.hash = this.hashDestino;
    console.log(this.transferencia);
  }

}