import { Component, OnInit } from '@angular/core';
import { Saque } from 'src/app/models/saque.model';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {  
  options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  dataAtual = new Date().toLocaleDateString('pt-BR', this.options);
  hash: any;

  saque: Saque ={
    data: '',
    valor: 0,
    hash: '',
    conta: {
      hash: '',
      cliente:{
        nome:'',
        cpf:''
      },
      saldo: 0.0
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  sacar(): void {
    alert("Saque efetuado com sucesso!");
    this.saque.hash = this.hash;
    console.log(this.saque);
  }


}