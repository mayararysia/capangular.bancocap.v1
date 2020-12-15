import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { ClienteViewComponent } from './cliente-view/cliente-view.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
  
})
export class ClienteComponent implements OnInit {
  
  submitted = false;
  componenteView: ClienteViewComponent;

  cliente: Cliente = {
    nome: '',
    cpf: ''
  }

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  showMessage(msg: string, cliente: Cliente): void {
    alert(msg);
    console.log(cliente);
  }

  criarCliente(): void {
    this.clienteService.criarCliente(this.cliente);
    this.showMessage("Cliente " + this.cliente.nome.toString() 
      + " cadastrado com sucesso!", this.cliente);
      //this.router.navigate(['/cliente-view']);
      this.submitted = true;
      console.log(this.submitted);
  }

  limpar(): void{
    this.submitted = false;
    this.cliente = {
      nome: '',
      cpf: ''
    }
  }

  voltar(): void {
   this.limpar();
   this.router.navigate(['/home']);
  }

  voltarCriarCliente() {
    this.limpar();
    this.router.navigate(['/clientes']);
  }

  onSubmit() {
    this.submitted = true;
  } 
}
