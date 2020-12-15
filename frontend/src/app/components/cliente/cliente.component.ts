import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/model/cliente.model';
import { ClienteViewComponent } from './cliente-view/cliente-view.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
  
})
export class ClienteComponent implements OnInit {
  
  rotaNovoCliente:string = '/clientes-view';
  submitted = false;

  componenteView: ClienteViewComponent;

  cliente: Cliente = {
    nome: '',
    cpf: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarCliente(): void {
    alert("Cliente " 
    +  this.cliente.nome.toString() 
    + " cadastrado com sucesso!");
    console.log(this.cliente);
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
  } 

  // onSubmit(form: NgForm) {
  //   this.submitted = true;
  //   alert("Cliente" +  form.name.toString() + "cadastrado com sucesso!");
  //   console.log(this.cliente);
  // } 

}
