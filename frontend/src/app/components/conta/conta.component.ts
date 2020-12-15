import { Component, OnInit } from '@angular/core';

import { Cliente } from 'src/app/models/cliente.model';
import { Conta } from 'src/app/models/conta.model';
import * as objectHash from 'object-hash';
import { ContaService } from 'src/app/services/conta.service';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  selectedValue: string = '';
  exibirCadastro: boolean = false;
  submitted: boolean = false;
  hash: any;

  conta: Conta ={
    hash: '',
    cliente: {
      cpf: '', 
      nome: ''
    },
    saldo: 0.0
  }

  clientes: Cliente [];

  mock_clientes: Cliente[] = [
    { cpf: '1', nome: "John" },
    { cpf: '2', nome: "Mary" },
    { cpf: '3', nome: "Sophie"},
    { cpf: '4', nome: "Susan"},
    { cpf: '5', nome: "Michel"}
  ];

  constructor(
    private contaService: ContaService,
    private clienteService: ClienteService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.clienteService.listarClientes().subscribe(clientes => {
      this.clientes = clientes;
      console.log(this.clientes);
    });
  }

  onSubmit() { this.submitted = true; }

  showMessage(msg: string, conta: Conta): void {
    alert(msg);
    console.log(conta);
  }

  criarConta(): void {
    this.contaService.criarContas(this.conta);
    alert("Conta criada com sucesso!");
    this.encontrarClientePorNome(this.selectedValue)
    this.conta.hash = this.hash;
    console.log(this.conta);
  }

  encontrarClientePorNome(nome: string) {
    for (const client of this.mock_clientes) {
      if( client.nome == this.selectedValue ) {
        this.conta.cliente = client;
        this.hash = objectHash(this.conta);
        break;
      }
    }
  }

}
